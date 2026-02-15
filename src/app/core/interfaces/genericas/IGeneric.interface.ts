
export interface IValueWrapper<T> {
    isSuccess: boolean;
    isFailure: boolean;
    _value: T;
  }


export interface IGeneric<T> {
  data: IValueWrapper<T>;
  status: number;
  message: string;
}

// Interface para la respuesta de múltiples elementos
export interface IGenericArrays<T> {
  // data: IValueWrapper<T[]>;
  data: T[];
  status: number;
  message: string;
}