export class Negotiation {
   private _date: Date
   private _quantity: number
   private _value: number

   constructor(date: Date, quantity: number, value: number) {
      this._date = date
      this._quantity = quantity
      this._value = value
   };

   get date():Date { return this._date}
   get quantity():number { return this._quantity}
   get value():number { return this._value}
   get volume():number { return this._value * this._quantity}
};

export class NegotiationArray {
   private NegotiationArray: Array<Negotiation> = []

   push(negotiation: Negotiation):void {
      this.NegotiationArray.push(negotiation)
   };
   
   getList(): ReadonlyArray<Negotiation> { 
      return this.NegotiationArray
   };
};