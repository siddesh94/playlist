import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase'
})
export class CustomUppercasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.toUpperCase();
  }

}
