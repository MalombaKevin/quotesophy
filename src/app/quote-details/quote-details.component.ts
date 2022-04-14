import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote!:Quote;
  
  postedTimeDifference(timePosted:any){
    let currentTime:any = new Date();
    return (Math.floor((currentTime-timePosted)/1000/31336000));

  }

  constructor() { }

  ngOnInit(): void {
  }

}
