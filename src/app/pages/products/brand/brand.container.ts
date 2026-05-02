import { Component, OnInit } from '@angular/core';
import { Brand } from '@class/brand/brand.class';
import { BrandFacade } from '@patterns//facade/brand.facade';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.container.html',
})
export class BrandContainer implements OnInit{
  public isLoading$: Subject<void> = new Subject<void>();
  public brands$ = new BehaviorSubject<Brand[]>([]);

  public constructor(private readonly brandFacade: BrandFacade) {
    this.brands$ = brandFacade.brands$;
  }

  ngOnInit(): void {
    this.brandFacade.getAllBrands();
  }
}
