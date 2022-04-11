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
      Today.getDay()
    );

    var timelapse = Math.abs(dateToday - value);
    const secs = 86400;
    var difference = timelapse / secs / 30000;

    return difference;
  }
}
