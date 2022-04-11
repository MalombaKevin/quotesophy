import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
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
 
  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quoteText}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // .completeDate = new Date(goal.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
function emit(complete: boolean) {
  throw new Error('Function not implemented.');
}

