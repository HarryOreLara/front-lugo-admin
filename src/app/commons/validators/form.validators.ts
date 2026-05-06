import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const onlyNumbersValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const value = control.value.toString();

    const isValid = /^[0-9]+$/.test(value);

    return isValid ? null : { onlyNumbers: true };
  };
};

export const onlyLettersValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    return regex.test(control.value) ? null : { onlyLetters: true };
  };
};

export const noWhitespaceValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    const trimmed = value.trim();

    if (trimmed.length === 0) {
      return { whitespace: true };
    }

    if (value !== trimmed) {
      return { whitespaceEdges: true };
    }

    if (/\s{2,}/.test(value)) {
      return { whitespaceMultiple: true };
    }

    return null;
  };
};
