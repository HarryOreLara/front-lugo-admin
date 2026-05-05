import { Brand } from '@class/brand/brand.class';
import { Observable } from 'rxjs';
import { IBrandRequest } from 'src/app/commons/modals/products/modal-new-brand/models/brand-request.model';

export interface BrandRepository {
  getAllBrand(page: number, size: number): Observable<Brand[]>;
  findBrandById(id: number): Observable<Brand>;
  findBrandByName(brand: Brand): Observable<Brand>;
  createBrand(brand: IBrandRequest): Observable<Brand>;
  updateBrand(id: number, brand: IBrandRequest): Observable<Brand>;
  deleteBrand(id: number): Observable<Brand>;
}
