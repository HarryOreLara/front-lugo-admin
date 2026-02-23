import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '@components//host/app-modal.service';
import { ParameterNode } from '@enums/parameters.enum';
import { Parameter } from '@interfaces/parameter/parameter.interface';
import { ProductFacade } from '@patterns//facade/product.facade';
import { LugoStateService } from '@states/lugo-state/lugo-state.service';
import { Subject } from 'rxjs';
import { IProductForm } from './modals/product-form.modal';

@Component({
  selector: 'app-modal-new-product',
  templateUrl: './modal-new-product.container.html',
})
export class ModalNewProductContainer implements OnInit {
  @Input() title: string = 'Nuevo producto';
  public isLoading$: Subject<boolean> = new Subject<boolean>();
  public visibleModal: boolean = true;

  public categories: Array<Parameter>;
  public brands: Array<Parameter>;
  public colors: Array<Parameter>;
  public units: Array<Parameter>;

  public constructor(
    public readonly modalService: ModalService,
    private readonly productFacade: ProductFacade,
    private readonly lugoStateService: LugoStateService,
  ) {}

  public ngOnInit(): void {
    this.initParameters();
  }

  public initParameters() {
    this.categories =
      this.lugoStateService.getSnapshot<Array<Parameter>>(
        ParameterNode.CATEGORIES,
      ) ?? [];

    this.brands =
      this.lugoStateService.getSnapshot<Array<Parameter>>(
        ParameterNode.BRANDS,
      ) ?? [];

    this.colors =
      this.lugoStateService.getSnapshot<Array<Parameter>>(
        ParameterNode.COLORS,
      ) ?? [];

    this.units =
      this.lugoStateService.getSnapshot<Array<Parameter>>(
        ParameterNode.UNITS,
      ) ?? [];
  }

  public saveProduct(product: IProductForm) {
    this.productFacade.saveProductFc(product);
  }

  public close() {
    this.modalService.close();
  }
}
