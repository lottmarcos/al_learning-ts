export class Negotiation {
  constructor(
    private _date: Date,
    public readonly quantity: number,
    public readonly value: number
  ) {}

  get volume(): number {
    return this.value * this.quantity;
  }
  get date(): Date {
    const date = new Date(this._date.getTime());
    return date;
  }
}

export class NegotiationArray {
  private NegotiationArray: Negotiation[] = [];

  push(negotiation: Negotiation) {
    this.NegotiationArray.push(negotiation);
  }

  getList(): readonly Negotiation[] {
    return this.NegotiationArray;
  }
}
