// app-modal-host.component.ts
import {
  Component,
  EnvironmentInjector,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-modal-host',
  templateUrl: './app-modal-host.component.html',
})
export class ModalHostComponent {
  @ViewChild('modalContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(private injector: EnvironmentInjector) {}

  clear() {
    this.container.clear();
  }

  add<T extends object>(component: Type<T>, data?: Partial<T>) {
    this.container.clear();

    const componentRef = this.container.createComponent<T>(component, {
      environmentInjector: this.injector,
    });

    if (data) {
      Object.assign(componentRef.instance, data);
    }

    componentRef.changeDetectorRef.detectChanges();

    return componentRef;
  }
}
