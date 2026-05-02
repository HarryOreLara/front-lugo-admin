import { Inject, Injectable } from '@angular/core';
import { Brand } from '@class/brand/brand.class';
import { BrandRepository } from '@patterns//repository/brand.repository';
import { Observable } from 'rxjs';
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

  createBrand(brand: Brand): Observable<Brand> {
    return this.brandRepository.createBrand(brand);
  }

  updateBrand(id: number, brand: Brand): Observable<Brand> {
    return this.brandRepository.updateBrand(id, brand);
  }

  deleteBrand(id: number): Observable<Brand> {
    return this.brandRepository.deleteBrand(id);
  }
}
