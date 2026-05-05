import { Injectable } from '@angular/core';
import { Brand } from '@class/brand/brand.class';
import { BrandService } from '@service/brand/brand.service';
import { BehaviorSubject, finalize, Subject, takeUntil, tap } from 'rxjs';
import { createBrandMapper } from 'src/app/commons/modals/products/modal-new-brand/mappers/brand.mapper';
import { IBrandForm } from 'src/app/commons/modals/products/modal-new-brand/models/brand-form.model';

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

  createBrand(brand: IBrandForm) {
    const payload = createBrandMapper(brand);

    this.loading$.next(true);

    this.brandService
      .createBrand(payload)
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

  updateBrand(brand: IBrandForm, id: number) {
    const payload = createBrandMapper(brand);
    

    this.loading$.next(true);

    this.brandService
      .updateBrand(id, payload)
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
