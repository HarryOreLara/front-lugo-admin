import { Component, OnInit } from '@angular/core';
import { Product } from '@class/index';
import { Parameter } from '@class/parameter/paramter.class';
import { ModalService } from '@components//host/app-modal.service';
import { CHANNEL_CONSTANT } from '@constants/channel.constant';
import { STATUS_CONSTANT } from '@constants/status.constant';
import { Channel } from '@enums/channel.enum';
import { MODELS_ENUM } from '@enums/models.enum';
import { ParameterNode } from '@enums/parameters.enum';
import { IParameterEnum } from '@interfaces/index';
import { ProductFacade } from '@patterns//facade/product.facade';
import { LugoStateService } from '@states/lugo-state/lugo-state.service';
import { BehaviorSubject, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.container.html',
})
export class ProductTableContainer implements OnInit {
  public products$ = new BehaviorSubject<Product[]>([]);
  public product$ = new BehaviorSubject<Product>(new Product());
  public isLoading$: Subject<boolean> = new Subject<boolean>();
  public categories: Array<Parameter>;
  public brands: Array<Parameter>;
  public channels: IParameterEnum[] = [];
  public status: IParameterEnum[] = [];

  public constructor(
    public readonly productFacade: ProductFacade,
    private readonly lugoStateService: LugoStateService,
    private readonly modalService: ModalService,
  ) {
    this.products$ = productFacade.products$;
    this.product$ = productFacade.product$;
  }

  ngOnInit(): void {
    this.initParameters();
    this.channels = CHANNEL_CONSTANT;
    this.status = STATUS_CONSTANT;
    this.productFacade.getAllProducts(Channel.PHYSICAL);
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
  }

  changeChannel(channel: Channel) {
    this.productFacade.getAllProducts(channel);
  }

  public updateProduct(product: Product) {
    this.productFacade
      .findOneProduct(product.id)
      .pipe(tap((response) => this.product$.next(response)))
      .subscribe((response) => {
        this.modalService.openByName(MODELS_ENUM.MODAL_NEW_PRODUCT, {
          product: response,
        });
      });
  }
}
