// export class Quote {
//     quoteTheme!:string
//     quoteText!:string;
//     quoteAuthor!:string;
//     quoteSubmittedBy!:string;
// }

export class Quote {
    showQuoteDetails!:boolean;
    constructor(public quoteTheme:string, public quoteText:string, public quoteAuthor:string, public quoteSubmittedBy:string, public upVote:number, public downVote:number, public completeDate:Date){
        this.showQuoteDetails=true;
    }
}
