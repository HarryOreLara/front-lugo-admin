import { Component, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENTS_TYPE } from '@constants/document-type.constant';
import { IParameterEnum } from '@interfaces/index';
import { IPurchaseDataClientForm } from './commons/purchase-data-client.form';
import { ClientFacade } from '@patterns//facade/client.facade';
import { SearchType } from '@enums/search-type.enum';
import { BehaviorSubject } from 'rxjs';
import { Client } from '@class/index';
import { ModalService } from '@components//host/app-modal.service';
import { MODELS_ENUM } from '@enums/models.enum';
import { EventBussService } from '@states/event-buss/event-buss.service';

@Component({
  selector: 'app-purchase-data-client',
  templateUrl: './purchase-data-client.container.html',
})
export class PurchaseDataClientContainer implements OnDestroy, OnInit {
  public documentsType: IParameterEnum[] = DOCUMENTS_TYPE;
  client$ = new BehaviorSubject<Client>(new Client());

  constructor(
    private readonly clientFacade: ClientFacade,
    private readonly modalService: ModalService,
    private readonly eventBussService: EventBussService,
  ) {
    this.client$ = clientFacade.client$;
  }

  ngOnInit(): void {
    this.eventBussService.on<boolean>('lugo-purchase-reset').subscribe({
      next: (value) => {
        if (!value) return;
        this.client$ = new BehaviorSubject(new Client());
      },
    });
  }

  ngOnDestroy(): void {
    this.client$.next(new Client());
  }

  public searchClient(client: IPurchaseDataClientForm) {
    this.clientFacade.findClient(client.document, SearchType.DNI);
  }

  public newClient() {
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_CLIENT, {});
  }
}
