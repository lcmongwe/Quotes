export class Quote {
  public showDetails: boolean;
  public votelikes: number;
  public votedislikes: number;
  constructor(
    public author: string,
    public sender: string,
    public quote: string,
    public postDate: Date
  ) {
    this.showDetails = false;
    this.votelikes = 0;
    this.votedislikes = 0;
  }
}
