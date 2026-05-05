import { Injectable } from '@angular/core';
import { Brand } from '@class/brand/brand.class';
import { BrandService } from '@service/brand/brand.service';
import { BehaviorSubject, finalize, Subject, takeUntil, tap } from 'rxjs';

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
    this.brandService.getAllBrands().subscribe((brands) => {
      this.brands$.next(brands);
    });
  }

  createBrand(brand: Brand) {
    // const payload = Brand.toJson(category);

    this.loading$.next(true);

    this.brandService
      .createBrand(brand)
      .pipe(
        tap((response) => {
          this.brands$.next([response, ...this.brands$.value]);

          this.closeModal$.next();
        }),
        takeUntil(this.destroy$),
        finalize(() => {
          this.loading$.next(false);
        }),
      )
      .subscribe();
  }

  updateBrand(brand: Brand, id: number) {
    // const payload = Brand.toJson(category);

    this.loading$.next(true);

    this.brandService
      .updateBrand(id, brand)
      .pipe(
        tap((updatedCategory) => {
          const updatedList = this.brands$.value.map((brand) =>
            brand.id === id ? { ...brand, ...updatedCategory } : brand,
          );

          this.brands$.next(updatedList);

          this.closeModal$.next();
        }),

        takeUntil(this.destroy$),
        finalize(() => {
          this.loading$.next(false);
        }),
      )
      .subscribe();
  }
}
