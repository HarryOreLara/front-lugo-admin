import { Component, OnInit } from '@angular/core';
import { Owner } from '@class/owner/owner.class';
import { OwnerFacade } from '@patterns//facade/owner.facade';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.container.html',
})
export class OwnerListContainer implements OnInit {
  owners$ = new BehaviorSubject<Owner[]>([]);

  constructor(private readonly ownerFacade: OwnerFacade) {
    this.owners$ = ownerFacade.owners$;
  }

  public ngOnInit(): void {
    this.ownerFacade.getAllOwners();
  }
}
