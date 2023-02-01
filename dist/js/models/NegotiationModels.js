export class Negotiation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get volume() {
        return this.value * this.quantity;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
}
export class NegotiationArray {
    constructor() {
        this.NegotiationArray = [];
    }
    push(negotiation) {
        this.NegotiationArray.push(negotiation);
    }
    getList() {
        return this.NegotiationArray;
    }
}
