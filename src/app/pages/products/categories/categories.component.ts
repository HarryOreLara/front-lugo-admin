import { Component } from '@angular/core';
import { ModalService } from '@components//host/app-modal.service';
import { MODELS_ENUM } from '@enums/models.enum';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  constructor(private readonly modalService: ModalService) {}

  public ngOnInit() {}

  public newCategory() {
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_CATEGORY, {
      title: 'Centralizado',
      message: 'Test',
    });
  }
}
