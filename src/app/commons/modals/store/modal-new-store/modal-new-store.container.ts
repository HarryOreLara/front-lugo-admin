import { Component, OnInit } from '@angular/core';
import { Owner } from '@class/owner/owner.class';
import { OwnerFacade } from '@patterns//facade/owner.facade';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modal-new-store',
  templateUrl: './modal-new-store.container.html',
})
export class ModalNewStoreContainer implements OnInit {
  public visibleModal: boolean = true;
  owners$ = new BehaviorSubject<Owner[]>([]);

  constructor(private readonly ownerFacade: OwnerFacade) {
    this.owners$ = ownerFacade.owners$;
  }

  public ngOnInit(): void {
    this.ownerFacade.getAllOwners();
  }
}
