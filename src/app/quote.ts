export class Quote {
  constructor(
    public id: number,
    public author: string,
    public sender: string,
    public quote: string,
    public postDate: Date
  ) {}
}
