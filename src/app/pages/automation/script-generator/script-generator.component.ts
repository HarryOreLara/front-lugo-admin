import { Component } from '@angular/core';
import { ParsedProduct, ProductSqlGeneratorService } from '@service/automation/product-sql-generator.service';

@Component({
  selector: 'app-script-generator-ui',
  templateUrl: './script-generator.component.html',
  styleUrls: ['./script-generator.component.css'],
})
export class ScriptGeneratorComponent {
  rawText: string = '';
  generatedSql: string = '';
  copied: boolean = false;

  // IDs configurables desde la UI
  categoryId: number = 1;
  brandId: number = 1;
  colorId: number = 1;



  parsedProduct: ParsedProduct | null = null;

  constructor(private sqlGenerator: ProductSqlGeneratorService) {}

  generate(): void {
    if (!this.rawText.trim()) return;

    // Parsea el producto e inyecta los IDs seleccionados en la UI
    const product = this.sqlGenerator.parseProduct(this.rawText);
    product.categoryId = this.categoryId;
    product.brandId = this.brandId;
    product.colorId = this.colorId;

    this.generatedSql = this.sqlGenerator.generateSql(product);
    this.copied = false;
  }

  copySql(): void {
    navigator.clipboard.writeText(this.generatedSql).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    });
  }
}
