import { Component, Input } from '@angular/core';
import { ModalService } from '@components//host/app-modal.service';

@Component({
  selector: 'app-modal-new-product',
  templateUrl: './modal-new-product.component.html',
  styleUrls: ['./modal-new-product.component.css'],
})
export class ModalNewProductComponent {
  @Input() title: string = 'Nuevo producto';
  public visible: boolean = true;

  public countries: any = [];

  constructor(
    // public  productFormPresenter: ProductsFormPresenter,
    private readonly modalService: ModalService,
  ) {}

  public guardarProductos() {}

  public close() {
    this.visible = false;
    this.modalService.close();
  }
}
