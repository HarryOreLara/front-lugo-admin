import { IClientForm } from '../models/client-form.model';
import { IClientRequest } from '../models/client-request.model';

export const createClientMapper = (clientForm: IClientForm): IClientRequest => {
  return {
    typeDocument: clientForm.typeDocument,
    document: clientForm.document,
    firstName: clientForm.firstName,
    lastName: clientForm.lastName,
    email: clientForm.email,
    phone: clientForm.phone,
    address: clientForm.address,
    postalCode: String(clientForm.postalCode),
    isActive: clientForm.isActive,
    channel: clientForm.channel,
    status: clientForm.status,
  };
};
