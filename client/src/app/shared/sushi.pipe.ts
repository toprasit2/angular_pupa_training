import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sushi'
})
export class SushiPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
