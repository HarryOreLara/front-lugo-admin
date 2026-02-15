import { Type } from '@angular/core';
import { ModalNewProductContainer } from 'src/app/commons/modals/products/modal-new-product/modal-new-product.container';

export const MODAL_REGISTRY: Record<string, Type<object>> = {
  // user: UserModalComponent,
  // nuevaCategoria:NuevaCategoria
  modalNewProduct: ModalNewProductContainer,
};
