import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLapse',
})
export class TimeLapsePipe implements PipeTransform {
  transform(value: any): any {
    let Today: Date = new Date();
    let dateToday: any = new Date(
      Today.getFullYear(),
      Today.getMonth(),
      Today.getDate()
    );

    var timelapse = Math.abs(value - dateToday);
    const secs = 86400;
    var difference = timelapse / secs / 30000;

    return difference;
  }
}
