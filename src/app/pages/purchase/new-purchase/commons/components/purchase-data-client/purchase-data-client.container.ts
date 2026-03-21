import { Component, OnDestroy } from '@angular/core';
import { DOCUMENTS_TYPE } from '@constants/document-type.constant';
import { IParameterEnum } from '@interfaces/index';
import { IPurchaseDataClientForm } from './commons/purchase-data-client.form';
import { ClientFacade } from '@patterns//facade/client.facade';
import { SearchType } from '@enums/search-type.enum';
import { BehaviorSubject } from 'rxjs';
import { Client } from '@class/index';
import { ModalService } from '@components//host/app-modal.service';
import { MODELS_ENUM } from '@enums/models.enum';

@Component({
  selector: 'app-purchase-data-client',
  templateUrl: './purchase-data-client.container.html',
})
export class PurchaseDataClientContainer implements OnDestroy {
  public documentsType: IParameterEnum[] = DOCUMENTS_TYPE;
  client$ = new BehaviorSubject<Client>(new Client());

  constructor(
    private readonly clientFacade: ClientFacade,
    private readonly modalService: ModalService,
  ) {
    this.client$ = clientFacade.client$;
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
