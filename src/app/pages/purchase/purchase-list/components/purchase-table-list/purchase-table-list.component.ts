import { Component, Input } from '@angular/core';
import { Purchase } from '@class/purchase/purchase.class';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-purchase-table-list-ui',
  templateUrl: './purchase-table-list.component.html',
  styleUrls: ['./purchase-table-list.component.css'],
})
export class PurchaseTableListComponent {
  @Input() purchases: Array<Purchase> = [];
  @Input() isLoading: boolean;

  // Detecta el tipo de comprobante por el prefijo
  getVoucherType(fullNumber: string): string {
    const prefix = fullNumber?.charAt(0)?.toUpperCase();
    const types: Record<string, string> = {
      E: 'Boleta de Venta',
      F: 'Factura',
      B: 'Boleta',
      T: 'Ticket',
    };
    return types[prefix] ?? 'Comprobante';
  }

  getStatusSeverity(status: string): string {
    const map: Record<string, string> = {
      DELIVERED: 'success',
      PENDING: 'warning',
      CANCELLED: 'danger',
      PROCESSING: 'info',
    };
    return map[status] ?? 'info';
  }

  generatePdf(purchase: any): void {
    const doc = new jsPDF();
    const voucherType = this.getVoucherType(purchase.fullNumber);
    const pageWidth = doc.internal.pageSize.getWidth();

    // ── ENCABEZADO ──────────────────────────────────────────
    doc.setFillColor(41, 50, 60);
    doc.rect(0, 0, pageWidth, 35, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(voucherType.toUpperCase(), pageWidth / 2, 15, { align: 'center' });

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`N°: ${purchase.fullNumber}`, pageWidth / 2, 25, {
      align: 'center',
    });

    // ── DATOS GENERALES ─────────────────────────────────────
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);

    const colLeft = 14;
    const colRight = pageWidth / 2 + 5;
    let y = 45;

    // Columna izquierda: Cliente
    doc.setFont('helvetica', 'bold');
    doc.text('DATOS DEL CLIENTE', colLeft, y);
    doc.setFont('helvetica', 'normal');
    y += 6;
    doc.text(`Nombre: ${'Harry'} ${'Ore Lara'}`, colLeft, y);
    y += 5;
    doc.text(`${'DNI'}: ${'73617110'}`, colLeft, y);

    // Columna derecha: Comprobante
    y = 45;
    doc.setFont('helvetica', 'bold');
    doc.text('DATOS DEL COMPROBANTE', colRight, y);
    doc.setFont('helvetica', 'normal');
    y += 6;
    doc.text(`Canal: ${purchase.channel}`, colRight, y);
    y += 5;
    doc.text(`Estado: ${purchase.status}`, colRight, y);
    y += 5;
    doc.text(
      `Empleado: ${purchase.employee.firstName} (${purchase.employee.document})`,
      colRight,
      y,
    );

    // ── TABLA DE ITEMS ───────────────────────────────────────
    y = 80;
    doc.setFont('helvetica', 'bold');
    doc.text('DETALLE DE PRODUCTOS', colLeft, y);

    autoTable(doc, {
      startY: y + 4,
      head: [['Producto', 'P. Unitario', 'Cantidad', 'Subtotal']],
      body: purchase.items.map((item: any) => [
        item.product.name,
        `S/ ${Number(item.unitPrice).toFixed(2)}`,
        item.quantity,
        `S/ ${Number(item.salePrice).toFixed(2)}`,
      ]),
      headStyles: {
        fillColor: [41, 50, 60],
        textColor: 255,
        fontStyle: 'bold',
      },
      alternateRowStyles: { fillColor: [245, 247, 250] },
      columnStyles: {
        1: { halign: 'right' },
        2: { halign: 'center' },
        3: { halign: 'right' },
      },
      styles: { fontSize: 9 },
    });

    // ── TOTALES ──────────────────────────────────────────────
    const afterTable = (doc as any).lastAutoTable.finalY + 8;

    doc.setFont('helvetica', 'normal');
    doc.text(`Subtotal:`, pageWidth - 60, afterTable);
    doc.text(
      `S/ ${Number(purchase.subTotal).toFixed(2)}`,
      pageWidth - 14,
      afterTable,
      { align: 'right' },
    );

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(`TOTAL:`, pageWidth - 60, afterTable + 8);
    doc.text(
      `S/ ${Number(purchase.total).toFixed(2)}`,
      pageWidth - 14,
      afterTable + 8,
      { align: 'right' },
    );

    // ── PAGOS ────────────────────────────────────────────────
    const payY = afterTable + 20;
    doc.setFontSize(10);
    doc.text('FORMA DE PAGO', colLeft, payY);

    // autoTable(doc, {
    //   startY: payY + 4,
    //   head: [['Método', 'Monto', 'Moneda', 'Estado']],
    //   body: purchase.payments.map((p: any) => [
    //     p.method,
    //     `S/ ${Number(p.amount).toFixed(2)}`,
    //     p.currency,
    //     p.status,
    //   ]),
    //   headStyles: { fillColor: [41, 50, 60], textColor: 255 },
    //   styles: { fontSize: 9 },
    // });

    // ── ABRIR EN NUEVA PESTAÑA ───────────────────────────────
    const pdfBlob = doc.output('blob');
    const url = URL.createObjectURL(pdfBlob);
    window.open(url, '_blank');
  }
}
