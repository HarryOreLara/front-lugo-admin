import { Component } from '@angular/core';
import { ModalService } from '@components//host/app-modal.service';
import { MODELS_ENUM } from '@enums/models.enum';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {

  representatives!: any[];

  statuses!: any[];

  loading: boolean = false;

  activityValues: number[] = [0, 100];

  searchValue: string | undefined;

  constructor(private readonly modalService: ModalService) {}
  ngOnInit() {}

  public newLoteProduct() {
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_PRODUCT, {
      title: 'Centralizado',
      message: 'Test',
    });
  }

}
