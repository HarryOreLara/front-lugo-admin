import { Status } from '@enums/status.enum';
import { IOwnerForm } from '../model/owner-form.model';
import { IOwnerRequest } from '../model/owner-request.model';
import { NOT_AVAILABLE } from '@constants/global.constant';

export const createOwnerMapper = (ownerForm: IOwnerForm): IOwnerRequest => {
  return {
    firstName: ownerForm.firstName,
    lastName: ownerForm.lastName,
    email: ownerForm.email,
    phone: ownerForm.phone,
    role: ownerForm.role,
    isActive: ownerForm.isActive,
    typeDocument: ownerForm.typeDocument,
    document: ownerForm.document,
    postalCode: NOT_AVAILABLE,
    address: ownerForm.address,
    status: ownerForm.isActive ? Status.ACTIVE : Status.INACTIVE,
    districtId: 1,
    bankId: 1,
  } as IOwnerRequest;
};
