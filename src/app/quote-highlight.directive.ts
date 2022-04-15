import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {

  constructor(private elem: ElementRef) { 
    elem.nativeElement.style.backgroundColor="gold"

  }

}
