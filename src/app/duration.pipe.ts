import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value:any): number {
    let today:Date = new Date(); 
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayWithNoTime-value) 
    const secondsInDay = 86400; 
    var dateDifferenceSeconds = dateDifference*0.001; 
    var daysAgo = dateDifferenceSeconds/secondsInDay;

    if (daysAgo >= 1 && todayWithNoTime >value ){
      return daysAgo;
    }else{
    return 0;
    }
  }
}
