import { Directive, Input, OnInit } from '@angular/core';
import { Status } from '@enums/status.enum';
import { Tag } from 'primeng/tag'; // Importa el tipo si es accesible

@Directive({
  selector: '[tagStatus]',
})
export class TagStatusDirective implements OnInit {
  @Input('tagStatus') estado!: Status;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.estado);
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(estado: Status) {
    switch (estado) {
      case Status.ACTIVE:
        return { value: 'ACTIVO', severity: 'success' };
      case Status.DEFECT:
        return { value: 'DEFECTO', severity: 'warning' };
      case Status.INACTIVE:
        return { value: 'INACTIVO', severity: 'danger' };
      default:
        return { value: 'DESCONOCIDO', severity: 'info' };
    }
  }
}
