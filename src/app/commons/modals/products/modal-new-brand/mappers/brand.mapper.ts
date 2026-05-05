import { Status } from '@enums/status.enum';
import { IBrandForm } from '../models/brand-form.model';
import { IBrandRequest } from '../models/brand-request.model';

export const createBrandMapper = (clientForm: IBrandForm): IBrandRequest => {
  return {
    name: clientForm.name,
    code: clientForm.code,
    description: clientForm.description,
    channel: clientForm.channel,
    isActive: clientForm.isActive,
    status: clientForm.isActive ? Status.ACTIVE : Status.INACTIVE,
  };
};
