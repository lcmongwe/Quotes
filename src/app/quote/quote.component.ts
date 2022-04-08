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
      0,
      new Date(2020, 7, 14)
    ),
    new Quote(
      'Mecry Lee',
      'Masika',
      'no one lives twice',
      0,
      new Date(20202, 09, 21)
    ),
    new Quote(
      'Abram Nest',
      'Mongwe',
      'no one lives twice',
      0,
      new Date(20202, 09, 21)
    ),
    new Quote(
      'Isaac Newton',
      'Diana',
      'no one lives twice',
      0,
      new Date(20202, 09, 21)
    ),
    new Quote(
      'Wangari Maathai',
      'Debra',
      'no one lives twice',
      0,
      new Date(20202, 09, 21)
    ),
    new Quote(
      'P.O Lumumba',
      'Daisy',
      'no one lives twice',
      0,
      new Date(20202, 09, 21)
    ),
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
