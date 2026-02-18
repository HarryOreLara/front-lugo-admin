import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lgc-actions-buttons',
  templateUrl: './actions-buttons.component.html',
  styleUrls: ['./actions-buttons.component.css'],
})
export class ActionsButtonsComponent {
  public visible = false;

  @Output() update = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  public toggle(event: Event): void {
    event.stopPropagation();
    this.visible = !this.visible;
  }

  public close(): void {
    this.visible = false;
  }

  public onUpdate(): void {
    this.update.emit();
    this.close();
  }

  public onDelete(): void {
    this.delete.emit();
    this.close();
  }
}
