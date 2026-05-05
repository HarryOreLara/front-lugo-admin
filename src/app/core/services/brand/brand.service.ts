import { Inject, Injectable } from '@angular/core';
import { Brand } from '@class/brand/brand.class';
import { BrandRepository } from '@patterns//repository/brand.repository';
import { Observable } from 'rxjs';
import { IBrandForm } from 'src/app/commons/modals/products/modal-new-brand/models/brand-form.model';
import { IBrandRequest } from 'src/app/commons/modals/products/modal-new-brand/models/brand-request.model';
import { BRAND_REPOSITORY } from 'src/app/commons/tokens/brand.token';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(
    @Inject(BRAND_REPOSITORY)
    private readonly brandRepository: BrandRepository,
  ) {}

  getAllBrands(): Observable<Brand[]> {
    return this.brandRepository.getAllBrand(1, 20);
  }

  findOneBrand(id: number): Observable<Brand> {
    return this.brandRepository.findBrandById(id);
  }

  createBrand(brandRequest: IBrandRequest): Observable<Brand> {
    return this.brandRepository.createBrand(brandRequest);
  }

  updateBrand(id: number, brand: IBrandRequest): Observable<Brand> {
    return this.brandRepository.updateBrand(id, brand);
  }

  deleteBrand(id: number): Observable<Brand> {
    return this.brandRepository.deleteBrand(id);
  }
}
