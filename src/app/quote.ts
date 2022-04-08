export class Quote {
  constructor(
    public author: string,
    public sender: string,
    public quote: string,
    public votes: number,
    public postDate: Date
  ) {}
}
