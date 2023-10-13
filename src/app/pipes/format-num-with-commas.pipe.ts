import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumWithCommas'
})
export class FormatNumWithCommasPipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString('en-US');
  }

}
