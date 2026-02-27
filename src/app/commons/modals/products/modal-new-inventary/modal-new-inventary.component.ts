import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-new-inventary-ui',
  templateUrl: './modal-new-inventary.component.html',
  styleUrls: ['./modal-new-inventary.component.css'],
})
export class ModalNewInventaryComponent {
  @Input() public visibleModal: boolean;
  @Input() public isLoading: boolean;

  selectedValue: any;
  selectedValue2: any;
  public animal: any;


  saveInventary(){}


  close(){}
}
