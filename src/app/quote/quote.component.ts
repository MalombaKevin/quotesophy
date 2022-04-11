import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  // quotes:Quote[]=[
  //   (quoteTheme: 'Hope', quoteText:'Yes We can', quoteAuthor:'Barrack Obama', quoteSubmittedBy:'Kevin Malomba' ),
  //   {quoteTheme: 'Hope',quoteText:'Do you want world peace? Go home and love your family!', quoteAuthor:'Mother Teresa', quoteSubmittedBy:'William Malomba' },
  //   {quoteTheme: 'Hope', quoteText:'Yes We can', quoteAuthor:'Barrack Obama', quoteSubmittedBy:'William Malomba' }
  // ]

  quotes:Quote[]=[
    new Quote('Hope', 'Yes We can', 'Barrack Obama','Kevin Malomba'),
    new Quote('World Peace','Do you want world peace? Go home and love your family!','Mother Teresa','William Malomba')
  ]

  toggleDetails(index:any){
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
