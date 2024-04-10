import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentYear',
  standalone: true,
})
export class CurrentYearPipe implements PipeTransform {
  transform(): number {
    return new Date().getFullYear();
  }
}
