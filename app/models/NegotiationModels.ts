export class Negotiation {
  constructor(
    private _date: Date,
    private _quantity: number,
    private _value: number
  ) {}

  get date(): Date {
    return this._date;
  }
  get quantity(): number {
    return this._quantity;
  }
  get value(): number {
    return this._value;
  }
  get volume(): number {
    return this._value * this._quantity;
  }
}

export class NegotiationArray {
  private NegotiationArray: Negotiation[];

  push(negotiation: Negotiation): void {
    this.NegotiationArray.push(negotiation);
  }

  getList(): readonly Negotiation[] {
    return this.NegotiationArray;
  }
}
