import { Component, Input } from '@angular/core';
import { Brand } from '@class/brand/brand.class';
import { Category } from '@class/category/category.class';
import { Product } from '@class/index';
import { ModalService } from '@components//host/app-modal.service';
import { ProductFacade } from '@patterns//facade/product.facade';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal-new-product',
  templateUrl: './modal-new-product.container.html',
})
export class ModalNewProductContainer {
  @Input() title: string = 'Nuevo producto';
  public isLoading$: Subject<boolean> = new Subject<boolean>();
  public visibleModal: boolean = true;

  public brands: Array<Brand> = [];
  public categories: Array<Category> = [];

  public constructor(
    public readonly modalService: ModalService,
    private readonly productFacade: ProductFacade,
  ) {}

  public saveProduct(product: Product) {
    this.productFacade.saveProductFc(product)
  }

  public close() {
    this.modalService.close();
  }
}
