import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) *0.001);
      if (seconds < 60)
        return 'Just now';
      const intervals: any = {
        Years: 31536000,
        Months: 2592000,
        Weeks: 604800,
        Days: 86400,
        Hours: 3600,
        Minutes: 60,
        Seconds: 1,
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter >=1)
          return `${counter} ${i}`;
      }
    }
    return value;
  }
}

