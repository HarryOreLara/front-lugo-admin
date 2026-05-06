import { AbstractControl, ValidationErrors } from '@angular/forms';

export const onlyLettersValidator = (
  control: AbstractControl,
): ValidationErrors | null => {
  const value = control.value;

  if (!value) return null;

  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  return regex.test(value) ? null : { onlyLetters: true };
};

export const noWhitespaceValidator = (
  control: AbstractControl,
): ValidationErrors | null => {
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
