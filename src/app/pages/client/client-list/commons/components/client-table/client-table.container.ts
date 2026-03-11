import { Component, Input, OnInit } from '@angular/core';
import { Client } from '@class/index';
import { DOCUMENTS_TYPE } from '@constants/document-type.constant';
import { IParameterEnum } from '@interfaces/index';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.container.html',
})
export class ClientTableContainer implements OnInit {
  @Input() clients: Client[];

  documentsType: IParameterEnum[];
  public ngOnInit(): void {
    this.documentsType = DOCUMENTS_TYPE;
  }
}
