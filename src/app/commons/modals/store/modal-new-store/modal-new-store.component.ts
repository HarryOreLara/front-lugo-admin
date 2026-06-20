import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStoreForm } from './model/store-form.model';
import { Parameter } from '@class/parameter/paramter.class';
import { StoreFormPresenter } from './store-form.presenter';
import { Store } from '@class/index';
import { Owner } from '@class/owner/owner.class';

@Component({
  selector: 'app-modal-new-store-ui',
  templateUrl: './modal-new-store.component.html',
  styleUrls: ['./modal-new-store.component.css'],
})
export class ModalNewStoreComponent {
  @Input() public isLoading: boolean;
  @Input() public visibleModal: boolean;
  @Input() public brands: Array<Parameter>;
  @Input() public categories: Array<Parameter>;
  @Input() public colors: Array<Parameter>;
  @Input() public units: Array<Parameter>;
  @Input() public partners: Array<Parameter>;
  @Input() store: Store;
  @Input() public owners: Owner[] = [];

  @Output() saveStoreEmit: EventEmitter<IStoreForm> =
    new EventEmitter<IStoreForm>();
  @Output() updateStoreEmit: EventEmitter<{
    store: IStoreForm;
    id: number;
  }> = new EventEmitter<{ store: IStoreForm; id: number }>();
  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();

  constructor(public readonly storeFormPresenter: StoreFormPresenter) {
    this.createControls();
  }

  public saveStore() {
    this.saveStoreEmit.emit(this.storeFormPresenter.Form.getRawValue());
  }

  public updateStore() {
    this.updateStoreEmit.emit({
      store: this.storeFormPresenter.Form.getRawValue(),
      id: this.store.id,
    });
  }

  public close() {
    this.closeEmit.emit();
  }

  private createControls() {
    this.storeFormPresenter.initForm();
    this.storeFormPresenter.createForm();
  }
}
