import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyLugo',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, unit: string = 'S/.'): string {
    if (value == null) {
      return `${unit} 0.00`;
    }

    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

    return `${unit} ${formatted}`;
  }
}
