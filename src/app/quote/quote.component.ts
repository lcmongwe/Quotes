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
      votes: 0,
    },
    {
      author: 'Mecry Lee',
      sender: 'Masika',
      quote: 'no one lives twice',
      votes: 0,
    },
    {
      author: 'Abram Nest',
      sender: 'Mongwe',
      quote: 'no one lives twice',
      votes: 0,
    },
    {
      author: 'Isaac Newton',
      sender: 'Diana',
      quote: 'no one lives twice',
      votes: 0,
    },
    {
      author: 'Wangari Maathai',
      sender: 'Debra',
      quote: 'no one lives twice',
      votes: 0,
    },
    {
      author: 'P.O Lumumba',
      sender: 'Daisy',
      quote: 'no one lives twice',
      votes: 0,
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
