export const ErrorMessage = (
  validatorName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validatorValue?: any,
): string => {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  const config: { [key: string]: string } = {
    required: 'El campo es requerido',
    minlength: `Mínimo ${validatorValue.requiredLength} caracteres requeridos`,
    maxlength: `Máximo ${validatorValue.requiredLength} caracteres permitidos`,
    email: 'Formato de email inválido',
    pattern: 'Formato inválido',
    document: 'Formato de documento inválido',
    onlyLetters: 'Solo se permiten letras',
    whitespace: 'Hay muchos espacios',
    whitespaceEdges: 'Hay espacios al incio o final',
    whitespaceMultiple: 'Hay multiples espacios',
    onlyNumbers: 'Solo se acepta números',
  };

  return config[validatorName] || 'Error de validación';
};
