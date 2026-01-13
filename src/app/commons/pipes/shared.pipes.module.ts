import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency/currency.pipe';
import { KilogramoPipe } from './kilogramo/kilogramo.pipe';
import { PalabrasTruncasPipe } from './palabras/palabras.pipe';
import { TimeFormatPipe } from './time-format/time-format.pipe';
import { NroCuentaBancoPipe } from './nro-cuenta-banco/nro-cuenta-banco.pipe';
import { SanitizerUrlPipe } from './sanitizerUrl/sanitizer-url.pipe';
import { SlugPipe } from './slug/slug.pipe';

@NgModule({
  declarations: [
    CurrencyPipe,
    KilogramoPipe,
    PalabrasTruncasPipe,
    TimeFormatPipe,
    NroCuentaBancoPipe,
    SanitizerUrlPipe,
    SlugPipe,
  ], // Declara el pipe aquí
  imports: [CommonModule],
  exports: [
    CurrencyPipe,
    KilogramoPipe,
    PalabrasTruncasPipe,
    TimeFormatPipe,
    NroCuentaBancoPipe,
    SanitizerUrlPipe,
    SlugPipe,
  ], // Exporta el pipe para que esté disponible en otros módulos
})
export class SharedPipesModule {}
