import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from './quote';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {





  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }
}


    // let postedHowLongAgo: any = '';
    // let today: any = new Date();
    // var timeDifference = (today-value) / 1000;
    // let daysDifference = Math.floor(timeDifference / 86400);
    // if (daysDifference > 0) {
    //   postedHowLongAgo += Math.floor(daysDifference) +  " " + 'Days ago';
    // }
    // daysDifference -= daysDifference * 86400;
    // let hoursDifference=Math.floor(timeDifference/3600)%24;
    // if(hoursDifference>0){
    //   timeCount += Math.floor(hoursDifference)+ 'hours ago'
    // }
    // daysDifference -= daysDifference * 86400;
    // let minutesDifference=Math.floor(timeDifference/60)%60;
    // if(hoursDifference>0){
    //   timeCount += Math.floor(hoursDifference)+ 'minutes ago'
    // }
    // daysDifference -= daysDifference * 86400;
    // let secondsDifference=Math.floor(timeDifference%60);
    // if(hoursDifference>0){
    //   timeCount += Math.floor(hoursDifference)+ 'seconds ago'
    // }
  //   return postedHowLongAgo;
  // }

// }
