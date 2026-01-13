import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slug',
})
export class SlugPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .trim();
  }
}
