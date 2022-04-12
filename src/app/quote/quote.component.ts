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
      0,
      'Kenneth Matiba',
      'Lucy',
      'no one lives twice',
      new Date(2022, 4, 10)
    ),
    new Quote(
      1,
      'Mecry Lee',
      'Masika',
      'he who has no vision, sight is the most great asset he has',
      new Date(2022, 4, 9)
    ),
    new Quote(
      2,
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
  functionLike(index: number) {
    this.quotes[index].voteLikes++;
  }

  functionDislike(index: number) {
    this.quotes[index].voteDislikes++;
  }

  deleteQuote(i: any) {
    this.quotes.splice(i, 1);
  }

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate);
    this.quotes.push(quote);
  }

  constructor() {}

  ngOnInit(): void {}
}
