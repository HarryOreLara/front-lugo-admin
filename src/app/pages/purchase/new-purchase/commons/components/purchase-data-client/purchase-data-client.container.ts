import { Component } from '@angular/core';
import { DOCUMENTS_TYPE } from '@constants/document-type.constant';
import { IParameterEnum } from '@interfaces/index';
import { IPurchaseDataClientForm } from './commons/purchase-data-client.form';
import { ClientFacade } from '@patterns//facade/client.facade';
import { SearchType } from '@enums/search-type.enum';
import { BehaviorSubject } from 'rxjs';
import { Client } from '@class/index';

@Component({
  selector: 'app-purchase-data-client',
  templateUrl: './purchase-data-client.container.html',
})
export class PurchaseDataClientContainer {
  public documentsType: IParameterEnum[] = DOCUMENTS_TYPE;
  client$ = new BehaviorSubject<Client>(new Client());

  constructor(private readonly clientFacade: ClientFacade) {
    this.client$ = clientFacade.client$;
  }

  public searchClient(client: IPurchaseDataClientForm) {
    this.clientFacade.findClient(client.document, SearchType.DNI);
  }
}
