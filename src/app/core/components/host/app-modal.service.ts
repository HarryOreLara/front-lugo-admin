import { Injectable } from '@angular/core';

import { MODAL_REGISTRY } from './modal-registry';
import { ModalHostComponent } from './app-modal-host.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private host!: ModalHostComponent;

  registerHost(host: ModalHostComponent) {
    console.log({
      reigsterHost: host
    });
    this.host = host;
  }

  openByName(name: string, data?: object) {
    console.log({
      name,
      data,
    });
    if (!this.host) throw new Error('ModalHost not registered');
    const component = MODAL_REGISTRY[name];
    if (!component) throw new Error(`Modal "${name}" no está registrado`);

    console.log({component});
    console.log('LLEGO AL RETURN');
    return this.host.add(component, data);
  }

  close() {
    if (this.host) this.host.clear();
  }
}
