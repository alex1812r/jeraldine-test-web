import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from 'src/app/core/student/student.types';

@Pipe({
  name: 'gradesAverage'
})
export class GradesAveragePipe implements PipeTransform {

  transform(value: IStudent[]): number {
    let sum = 0;
    value.forEach((item) => sum += item.grades)
    const avg = +(sum / value.length).toFixed(2);
    return avg;
  }

}
