import { Component, Input, OnInit } from '@angular/core';
import { Client } from '@class/index';
import { CHANNEL_CONSTANT } from '@constants/channel.constant';
import { DOCUMENTS_TYPE } from '@constants/document-type.constant';
import { IParameterEnum } from '@interfaces/index';
import { IClientForm } from './models/client-form.model';
import { ClientFacade } from '@patterns//facade/client.facade';
import { ModalService } from '@components//host/app-modal.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-modal-new-client',
  templateUrl: './modal-new-client.container.html',
})
export class ModalNewClientContainer implements OnInit {
  @Input() client: Client;
  private destroy$ = new Subject<void>();

  public visibleModal: boolean = true;

  public documentsType: IParameterEnum[] = DOCUMENTS_TYPE;
  public channels: IParameterEnum[] = CHANNEL_CONSTANT;

  public constructor(
    private readonly clientFacade: ClientFacade,
    private readonly modalService: ModalService,
  ) {}

  public ngOnInit(): void {
    this.clientFacade.closeModal$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.close();
      });
  }

  public saveClient(client: IClientForm) {
    this.clientFacade.saveClient(client);
  }

  public close() {
    this.modalService.close();
  }
}
