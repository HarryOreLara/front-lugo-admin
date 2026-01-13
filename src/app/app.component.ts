import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AlertHostComponent } from '@components//alerts/app-alert-host.component';
import { AlertBussService } from '@components//alerts/app-alert.service';
import { ModalHostComponent } from '@components//host/app-modal-host.component';
import { ModalService } from '@components//host/app-modal.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'front-lugo-admin';

  @ViewChild(ModalHostComponent) host!: ModalHostComponent;
  @ViewChild(AlertHostComponent) hostAlert!: AlertHostComponent;

  constructor(
    private primengConfig: PrimeNGConfig,
    private readonly alertBussService: AlertBussService,
    private readonly modalService: ModalService
  ) {}

  ngOnInit() {
    this.primengConfig.setTranslation({
      accept: 'Aceptar',
      reject: 'Cancelar',
      choose: 'Elegir',
      upload: 'Subir',
      cancel: 'Cancelar',
      startsWith: 'Empieza con',
      contains: 'Contiene',
      notContains: 'No contiene',
      endsWith: 'Termina en',
      equals: 'Igual a',
      notEquals: 'Distinto de',
      noFilter: 'Sin filtro',
      lt: 'Menor que',
      lte: 'Menor o igual que',
      gt: 'Mayor que',
      gte: 'Mayor o igual que',
      dateIs: 'Fecha es',
      dateIsNot: 'Fecha no es',
      dateBefore: 'Fecha es antes de',
      dateAfter: 'Fecha es después de',
      clear: 'Limpiar',
      apply: 'Aplicar',
      matchAll: 'Coincidir con todos',
      matchAny: 'Coincidir con cualquiera',
      addRule: 'Agregar regla',
      removeRule: 'Eliminar regla',
      emptyMessage: 'No hay resultados',
      emptyFilterMessage: 'Sin coincidencias',
    });
  }

  ngAfterViewInit() {
    this.modalService.registerHost(this.host);
    this.alertBussService.registerHost(this.hostAlert);
  }
}
