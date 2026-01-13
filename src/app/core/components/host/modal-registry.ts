import { Type } from '@angular/core';
import { ModalNewProductComponent } from 'src/app/commons/modals/products/modal-new-product/modal-new-product.component';

export const MODAL_REGISTRY: Record<string, Type<object>> = {
  // user: UserModalComponent,
  // nuevaCategoria:NuevaCategoria
  modalNewProduct: ModalNewProductComponent,
};
