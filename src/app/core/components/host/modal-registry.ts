import { Type } from '@angular/core';
import { ModalNewClientContainer } from 'src/app/commons/modals/client/modal-new-client/modal-new-client.container';
import { ModalNewEmployeeContainer } from 'src/app/commons/modals/employee/modal-new-employee/modal-new-employee.container';
import { ModalNewCategoryContainer } from 'src/app/commons/modals/products/modal-new-category/modal-new-category.container';
import { ModalNewInventaryContainer } from 'src/app/commons/modals/products/modal-new-inventary/modal-new-inventary.container';
import { ModalNewProductContainer } from 'src/app/commons/modals/products/modal-new-product/modal-new-product.container';

export const MODAL_REGISTRY: Record<string, Type<object>> = {
  // user: UserModalComponent,
  // nuevaCategoria:NuevaCategoria
  modalNewProduct: ModalNewProductContainer,
  modalNewCategory: ModalNewCategoryContainer,
  modalNewInventary: ModalNewInventaryContainer,
  modalNewClient: ModalNewClientContainer,
  modalNewEmployee: ModalNewEmployeeContainer
};
