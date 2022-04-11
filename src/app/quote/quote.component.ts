import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {
      author: 'Kenneth Matiba',
      sender: 'Lucy',
      quote: 'no one lives twice',
      postDate: new Date(2022, 4, 10),
    },
    {
      author: 'Mecry Lee',
      sender: 'Masika',
      quote: 'he who has no vision, sight is the most great asset he has',
      postDate: new Date(2022, 4, 9),
    },
    {
      author: 'Abram Nest',
      sender: 'Mongwe',
      quote: 'silent waters run deep huhuuu!',
      postDate: new Date(2022, 7, 3),
    },
    {
      author: 'Abram Nest',
      sender: 'Mongwe',
      quote: 'get yourself together, head high and see the open door',
      postDate: new Date(2022, 7, 3),
    },
    {
      author: 'Abram Nest',
      sender: 'Mongwe',
      quote: 'no man is an island',
      postDate: new Date(2022, 7, 3),
    },
  ];
  votelikes: number = 0;
  votedislikes: number = 0;

  functionlike(i: any) {
    if ((i = true)) {
      this.votelikes++;
    } else i != true;
    {
      this.votelikes = this.votelikes;
    }
  }
  functiondislike() {
    this.votedislikes++;
  }

  deleteQuote(i: any) {
    this.quotes.splice(i);
  }

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate);
    this.quotes.push(quote);
  }

  constructor() {}

  ngOnInit(): void {}
}
