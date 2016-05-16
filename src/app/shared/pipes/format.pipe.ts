import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class Format implements PipeTransform {

  transform(value: any, format: string): string {
    if (format === "name") {
      return value.first + " " + value.last;
    }
    return "N/A";
  }

}
