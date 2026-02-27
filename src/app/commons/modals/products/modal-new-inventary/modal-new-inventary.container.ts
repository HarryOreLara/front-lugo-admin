import { Component, OnInit } from '@angular/core';
import { Product } from '@class/index';
import { INVENTARY_MOVEMENT_CONSTANT } from '@constants/inventary-movement.constant';
import { Channel } from '@enums/channel.enum';
import { IParameterEnum } from '@interfaces/index';
import { ProductFacade } from '@patterns//facade/product.facade';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modal-new-inventary',
  templateUrl: './modal-new-inventary.container.html',
})
export class ModalNewInventaryContainer implements OnInit {
  public visibleModal: boolean = true;
  public products$ = new BehaviorSubject<Product[]>([]);
  public inventaryMovementsType: IParameterEnum[] = INVENTARY_MOVEMENT_CONSTANT;

  public constructor(private readonly productFacade: ProductFacade) {
    this.products$ = productFacade.products$;
  }

  public ngOnInit(): void {
    this.productFacade.getAllProducts(Channel.PHYSICAL);
  }
}
