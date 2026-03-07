import { Directive, Input, OnInit } from '@angular/core';
import { InventaryMovementType } from '@enums/inventary-movement.enum';
import { Tag } from 'primeng/tag';

@Directive({
  selector: '[tagInventaryMovement]',
})
export class TagInventaryMovementDirective implements OnInit {
  @Input('tagInventaryMovement') inventaryMovement!: InventaryMovementType;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.inventaryMovement);
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(inventaryMovement: InventaryMovementType) {
    switch (inventaryMovement) {
      case InventaryMovementType.RETURN:
        return { value: 'RETORNO', severity: 'info' };
      case InventaryMovementType.INBOUND:
        return { value: 'ENTRADA', severity: 'success' };
      case InventaryMovementType.OUTBOUND:
        return { value: 'SALIDA', severity: 'danger' };
      default:
        return { value: 'AJUSTE', severity: 'warning' };
    }
  }
}
