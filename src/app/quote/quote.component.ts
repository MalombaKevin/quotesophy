import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    {quoteText:'Yes We can', quoteAuthor:'Barrack Obama', quoteSubmittedBy:'Kevin Malomba' },
    {quoteText:'Yes We can', quoteAuthor:'Barrack Obama', quoteSubmittedBy:'William Malomba' },
    {quoteText:'Yes We can', quoteAuthor:'Barrack Obama', quoteSubmittedBy:'William Malomba' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
