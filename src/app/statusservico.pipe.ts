import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'statusServicoPipe'})
export class StatusServicoPipe implements PipeTransform {
  transform(value: string): string {
      if (value != null && value == 'Disponível') {
        return "pi-check";
      } else if (value != null && value == 'Indisponível') {
        return "pi-times";
      } else {
        return "pi-minus";
      }
  }
}