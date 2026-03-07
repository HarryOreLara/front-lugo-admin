import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '@class/index';
import { ModalService } from '@components//host/app-modal.service';
import { INVENTARY_MOVEMENT_CONSTANT } from '@constants/inventary-movement.constant';
import { Channel } from '@enums/channel.enum';
import { IParameterEnum } from '@interfaces/index';
import { ProductFacade } from '@patterns//facade/product.facade';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { IInventaryForm } from './models/inventary.model';
import { InventaryMovementFacade } from '@patterns//facade/inventary-movement.facade';

@Component({
  selector: 'app-modal-new-inventary',
  templateUrl: './modal-new-inventary.container.html',
})
export class ModalNewInventaryContainer implements OnInit, OnDestroy {
  public visibleModal: boolean = true;
  public products$ = new BehaviorSubject<Product[]>([]);
  public inventaryMovementsType: IParameterEnum[] = INVENTARY_MOVEMENT_CONSTANT;
  private destroy$ = new Subject<void>();

  public constructor(
    private readonly productFacade: ProductFacade,
    public readonly modalService: ModalService,
    private readonly inventaryMovementFacade: InventaryMovementFacade,
  ) {
    this.products$ = productFacade.products$;
  }

  public ngOnInit(): void {
    this.productFacade.getAllProducts(Channel.PHYSICAL);

    this.inventaryMovementFacade.closeModal$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.close();
      });
  }

  public saveInventaryMovement(inventaryForm: IInventaryForm) {
    this.inventaryMovementFacade.saveInventaryMovement(inventaryForm);
  }

  public close() {
    this.modalService.close();
  }
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
