import { Directive, Input, OnInit } from '@angular/core';
import { DocumentType } from '@enums/document-type.enum';
import { Status } from '@enums/status.enum';
import { Tag } from 'primeng/tag'; // Importa el tipo si es accesible

@Directive({
  selector: '[tagDocumentType]',
})
export class TagDocumentTypeDirective implements OnInit {
  @Input('tagDocumentType') documentType!: DocumentType;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.documentType);
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(documentType: DocumentType) {
    switch (documentType) {
      case DocumentType.DNI:
        return { value: 'DNI', severity: 'info' };
      case DocumentType.RUC:
        return { value: 'RUC', severity: 'warning' };
      case DocumentType.CE:
        return { value: 'CE', severity: 'danger' };
      default:
        return { value: 'PASAPORTE', severity: 'sucess' };
    }
  }
}
