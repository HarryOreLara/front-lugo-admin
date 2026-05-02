import { Injectable } from '@angular/core';
import { Brand } from '@class/brand/brand.class';
import { BrandService } from '@service/brand/brand.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandFacade {
  public brands$ = new BehaviorSubject<Brand[]>([]);
  public brand$ = new BehaviorSubject<Brand>(new Brand());
  public loading$ = new BehaviorSubject<boolean>(false);
  public closeModal$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  constructor(private readonly brandService: BrandService) {}

  getAllBrands() {
    console.log("FACADE");
    this.brandService.getAllBrands().subscribe((brands) => {
      console.log({ brands });
      this.brands$.next(brands);
    });
  }
}
