import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Owner } from '@class/owner/owner.class';
import { OwnerFormPresenter } from './owner-form.presenter';
import { IParameterEnum } from '@interfaces/index';
import { Parameter } from '@interfaces/parameter/parameter.interface';
import { IOwnerForm } from './model/owner-form.model';

@Component({
  selector: 'app-modal-new-owner-ui',
  templateUrl: './modal-new-owner.component.html',
  styleUrls: ['./modal-new-owner.component.css'],
})
export class ModalNewOwnerComponent {
  @Input() public visibleModal: boolean;
  @Input() owner: Owner;
  @Input() public documentsType: IParameterEnum[];
  @Input() public employeeRoles: IParameterEnum[];
  @Input() public isLoading: boolean;
  @Input() public banks: Array<Parameter>;
  @Input() public districts: Array<Parameter>;
  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveOwnerEmit: EventEmitter<IOwnerForm> =
    new EventEmitter<IOwnerForm>();
  @Output() updateOwnerEmit: EventEmitter<{
    product: IOwnerForm;
    id: number;
  }> = new EventEmitter<{ product: IOwnerForm; id: number }>();
  public constructor(public readonly ownerFormPresenter: OwnerFormPresenter) {
    this.createControls();
  }

  public close() {
    this.closeEmit.emit();
  }

  public updateOwner() {
    this.updateOwnerEmit.emit({
      product: this.ownerFormPresenter.Form.getRawValue(),
      id: this.owner.id,
    });
  }

  public saveOwner() {
    this.saveOwnerEmit.emit(this.ownerFormPresenter.Form.getRawValue());
  }

  private createControls() {
    this.ownerFormPresenter.initForm();
    this.ownerFormPresenter.createForm();
  }
}
