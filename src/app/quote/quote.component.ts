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

  quotes: Quote[] = [
    new Quote('Imagination', "Imagination is Everything. It is the preview of life's coming attraction", 'Albert Einstein', 'Kevin Malomba', 0, 0, new Date(1987, 5, 16)),
    new Quote('World Peace', 'Do you want world peace? Go home and love your family!', 'Mother Teresa', 'William Malomba', 0, 0, new Date(2019, 0, 13))
  ]

  toggleDetails(index: any) {
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  @Input() quote!: Quote;
  // @Output() isComplete = new EventEmitter<boolean>();

  // quoteDelete(complete: boolean) {
  //   this.isComplete.emit(complete);
  // }
  // deleteQuote(isComplete: any, index: any) {
  //   if (isComplete) {
  //     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quoteText}?`)

  //     if (toDelete) {
  //       this.quotes.splice(index, 1)
  //     }
  //   }
  // }
  upvote(i:number) {
    alert('(:')
    this.quotes[i].upVote += 1;
    
  }
  downvote(i:number) {
    alert('):')
    this.quotes[i].downVote += 1;
  }
  quoteDelete(i:number){
    alert("Dear Quotesopher,You are now deleting the quote!")
    this.quotes.splice(i,1)

  }

  addNewQuote(quote: any) {
    alert("Thank You for inspiring the world.")
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    // .completeDate = new Date(goal.completeDate)
    this.quotes.push(quote)
  }
  mostLikes!:number
  leastLikes!:number
  count!:number
  highest(){
    this.mostLikes=0;
    this.leastLikes=0;
    for(this.count=0;this.count<this.quotes.length;this.count++){
      this.leastLikes=(this.quotes[this.count].upVote);
      if(this.leastLikes>this.mostLikes){
        this.mostLikes=this.leastLikes
      }
      
    }
    return this.mostLikes;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
function emit(complete: boolean) {
  throw new Error('Function not implemented.');
}

