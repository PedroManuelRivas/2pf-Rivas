import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  transform(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
  }

  // transform(value1: string, value2: string): string {
  //   // Aquí puedes personalizar cómo quieres unir las cadenas.
  //   // Por ejemplo, podrías simplemente concatenarlas con un espacio en blanco entre ellas.
  //   return `${value1} ${value2}`;


}
