import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '@components//host/app-modal.service';
import { ParameterNode } from '@enums/parameters.enum';
import { Parameter } from '@interfaces/parameter/parameter.interface';
import { ProductFacade } from '@patterns//facade/product.facade';
import { LugoStateService } from '@states/lugo-state/lugo-state.service';
import { Subject, takeUntil } from 'rxjs';
import { IProductForm } from './modals/product-form.modal';
import { Product } from '@class/index';
import { ProductsFormPresenter } from './products-form.presenter';

@Component({
  selector: 'app-modal-new-product',
  templateUrl: './modal-new-product.container.html',
})
export class ModalNewProductContainer implements OnInit {
  @Input() product: Product;
  private destroy$ = new Subject<void>();
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
    private readonly productPresenter: ProductsFormPresenter,
  ) {
    this.isLoading$ = productFacade.loading$;
  }

  public ngOnInit(): void {
    this.initParameters();

    console.log('ModalNewCategoryContainer - INIT');
    console.log('Categoría recibida:', this.product);

    if (this.product) {
      this.productPresenter.updateForm(this.product);
    } else {
      console.log('Es creación');
    }

    this.productFacade.closeModal$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.close();
      });
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

  public updateProduct({ product, id }: { product: IProductForm; id: number }) {
    this.productFacade.updateProductFc(product, id);
  }

  public close() {
    this.modalService.close();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
