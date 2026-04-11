// ============================================================
// product-sql-generator.ts
// Servicio Angular para generar SQL de inserción de productos
// ============================================================

import { Injectable } from '@angular/core';

export interface ParsedProduct {
  sku: string;
  barcode: string;
  qrCode: string;
  name: string;
  description: string;
  descriptionFull: string;
  salePrice: number;
  costPrice: number;
  stock: number;
  minStock: number;
  maxStock: number;
  imageUrl: string;
  categoryId: number;
  brandId: number;
  colorId: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductSqlGeneratorService {

  // ─── Generadores de campos automáticos ──────────────────────

  private generateSku(name: string): string {
    const words = name
      .toUpperCase()
      .replace(/[^A-Z0-9\s]/g, '')
      .split(' ')
      .filter(w => w.length > 0);

    const prefix = words
      .slice(0, 3)
      .map(w => w.substring(0, 3))
      .join('-');

    const suffix = Math.floor(100 + Math.random() * 900);
    return `${prefix}-${suffix}`;
  }

  private generateBarcode(): string {
    // Genera un EAN-13 de 13 dígitos
    let barcode = '';
    for (let i = 0; i < 13; i++) {
      barcode += Math.floor(Math.random() * 10).toString();
    }
    return barcode;
  }

  private generateQrCode(sku: string): string {
    return `QR-${sku}`;
  }

  private generateImageUrl(name: string): string {
    const encoded = encodeURIComponent(name.substring(0, 30));
    return `https://placehold.co/600x400?text=${encoded}`;
  }

  // ─── Parser de texto libre ───────────────────────────────────

  private extractPrice(text: string): number {
    // Busca patrones como: S/. 95, S/ 95, s/. 95.50, precio: 95, $95
    const patterns = [
      /(?:precio|price)\s*[:=]?\s*(?:s\/\.?\s*)?(\d+(?:[.,]\d{1,2})?)/i,
      /s\/\.?\s*(\d+(?:[.,]\d{1,2})?)/i,
      /\$\s*(\d+(?:[.,]\d{1,2})?)/i,
      /(\d+(?:[.,]\d{1,2})?)\s*(?:soles|sol|pen)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) {
        return parseFloat(match[1].replace(',', '.'));
      }
    }
    return 0;
  }

  private extractName(text: string): string {
    // La primera línea no vacía suele ser el nombre del producto
    const lines = text
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0);

    if (lines.length === 0) return 'Producto sin nombre';

    // Limpia emojis y caracteres especiales del nombre
    return lines[0]
      .replace(/[\u{1F300}-\u{1FFFF}]/gu, '')
      .replace(/[*✨❗]/g, '')
      .trim();
  }

  private extractFeatures(text: string): string[] {
    // Extrae líneas que empiecen con ✨, *, -, •, ❗ o similar
    return text
      .split('\n')
      .map(l => l.trim())
      .filter(l => /^[✨*\-•❗►→✓]/.test(l))
      .map(l =>
        l
          .replace(/^[✨*\-•❗►→✓]\s*/, '')
          .replace(/\*/g, '')
          .trim()
      )
      .filter(l => l.length > 0 && !/precio|price|\d+\s*s\//i.test(l));
  }

  private extractStock(text: string): number {
    // Busca frases como "últimas 10 disponibles", "stock: 5", etc.
    const match = text.match(
      /(?:últimas?|solo|stock|disponibles?)\s*[:]?\s*(\d+)/i
    );
    return match ? parseInt(match[1]) : 0;
  }

  // ─── Parser principal ────────────────────────────────────────

  parseProduct(rawText: string): ParsedProduct {
    const name = this.extractName(rawText);
    const features = this.extractFeatures(rawText);
    const salePrice = this.extractPrice(rawText);
    const costPrice = parseFloat((salePrice - 10).toFixed(2));
    const stock = this.extractStock(rawText);

    const sku = this.generateSku(name);
    const barcode = this.generateBarcode();
    const qrCode = this.generateQrCode(sku);
    const imageUrl = this.generateImageUrl(name);

    // Descripción corta: nombre + primeras 2 features
    const description =
      features.length > 0
        ? `${name}. ${features.slice(0, 2).join('. ')}.`
        : name;

    // Descripción completa: nombre + todas las features
    const descriptionFull =
      features.length > 0
        ? `${name}. ${features.join('. ')}.`
        : name;

    return {
      sku,
      barcode,
      qrCode,
      name,
      description,
      descriptionFull,
      salePrice,
      costPrice,
      stock,
      minStock: 1,
      maxStock: 50,
      imageUrl,
      // IDs por defecto — puedes hacerlos configurables en el formulario
      categoryId: 1,
      brandId: 1,
      colorId: 1,
    };
  }

  // ─── Generador SQL ───────────────────────────────────────────

  generateSql(product: ParsedProduct): string {
    const channels = ['PHYSICAL', 'WEB', 'MOBILE'];

    const channelValues = channels
      .map(ch => `  ('${ch}')`)
      .join(',\n');

    return `-- ============================================================
-- Producto: ${product.name}
-- SKU: ${product.sku}
-- ============================================================

BEGIN;

WITH inserted_product AS (
  INSERT INTO public.product (
    sku, bar_code, qr_code, name, description, description_full,
    stock, min_stock, max_stock, images, image_major,
    status, is_active, category_id, brand_id, color_id,
    created_at, updated_at
  )
  VALUES (
    '${product.sku}', '${product.barcode}', '${product.qrCode}', '${product.name.replace(/'/g, "''")}', '${product.description.replace(/'/g, "''")}', '${product.descriptionFull.replace(/'/g, "''")}',
    ${product.stock}, ${product.minStock}, ${product.maxStock}, ARRAY['${product.imageUrl}'],
    '${product.imageUrl}',
    'ACTIVE'::"Status",
    true,
    ${product.categoryId},
    ${product.brandId},
    ${product.colorId},
    NOW(), NOW()
  )
  RETURNING id
)
INSERT INTO public.product_price (
  channel, cost_price, sale_price, tax_rate, is_active, valid_from, product_id
)
SELECT
  channel::"SaleChannel",
  ${product.costPrice},
  ${product.salePrice},
  18.00,
  true,
  NOW(),
  inserted_product.id
FROM inserted_product,
(VALUES
${channelValues}
) AS channels(channel);

COMMIT;
`;
  }

  // ─── Método principal: texto → SQL ──────────────────────────

  generateSqlFromText(rawText: string): string {
    const product = this.parseProduct(rawText);
    return this.generateSql(product);
  }

  // ─── Genera SQL para múltiples productos a la vez ────────────

  generateSqlFromMultipleTexts(rawTexts: string[]): string {
    const sqls = rawTexts.map(text => this.generateSqlFromText(text));
    return sqls.join('\n\n');
  }
}