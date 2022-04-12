import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      'Kenneth Matiba',
      'Lucy',
      'no one lives twice',
      new Date(2022, 4, 10)
    ),
    new Quote(
      'Mecry Lee',
      'Masika',
      'he who has no vision, sight is the most great asset he has',
      new Date(2022, 4, 9)
    ),
    new Quote(
      'Abram Nest',
      'Mongwe',
      'silent waters run deep huhuuu!',
      new Date(2022, 7, 3)
    ),
  ];
  // votelikes: number = 0;
  // votedislikes: number = 0;

  // functionlike(index:number) {
  //   this.votelikes = this.votelikes;
  // }
  // functiondislike() {
  //   this.votedislikes++;
  // }
  functionlike(index: number) {
    this.quotes[index].votelikes++;
  }

  functiondislike(index: number) {
    this.quotes[index].votelikes--;
  }

  deleteQuote(i: any) {
    this.quotes.splice(i);
  }

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    // quote.id = quoteLength + 1;
    // quote.postDate = new Date(quote.postDate);
    this.quotes.push(quote);
  }

  constructor() {}

  ngOnInit(): void {}
}
