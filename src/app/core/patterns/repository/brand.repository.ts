import { Brand } from '@class/brand/brand.class';
import { Observable } from 'rxjs';

export interface BrandRepository {
  getAllBrand(page: number, size: number): Observable<Brand[]>;
  findBrandById(id: number): Observable<Brand>;
  findBrandByName(brand: Brand): Observable<Brand>;
  createBrand(brand: Brand): Observable<Brand>;
  updateBrand(id: number, brand: Brand): Observable<Brand>;
  deleteBrand(id: number): Observable<Brand>;
}
