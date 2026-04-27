import { ILoginForm } from '../models/login-form.model';
import { ILoginRequest } from '../models/login-request.model';

export const createLoginMapper = (loginForm: ILoginForm): ILoginRequest => {
  return {
    username: loginForm.username,
    password: loginForm.password,
  } as ILoginRequest;
};
