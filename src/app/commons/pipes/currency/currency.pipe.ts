import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyLugo',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, unit: string = 'S/.'): string {
    if (value != null) {
      // Formatea el número a dos decimales
      return `${unit} ${value.toFixed(2)}`;
    }
    return `${unit} 0.00`; // Para casos de null o undefined
  }
}
