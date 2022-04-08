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
    },
    {
      author: 'Mecry Lee',
      sender: 'Masika',
      quote: 'no one lives twice',
    },
    {
      author: 'Abram Nest',
      sender: 'Mongwe',
      quote: 'no one lives twice',
    },
  ];
  votescount: number = 0;
  functionlike() {
    this.votescount++;
  }
  functiondislike() {
    this.votescount--;
  }

  constructor() {}

  ngOnInit(): void {}
}
