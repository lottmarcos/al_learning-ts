import { Negotiation, NegotiationArray } from "../models/NegotiationModels.js";
export class NegotiationController {
    constructor() {
        this.negotiationArray = new NegotiationArray();
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    createNegotiation() {
        const date = new Date(this.inputDate.value.replace(/-/g, ','));
        const quantity = Number(this.inputQuantity.value);
        const value = Number(this.inputValue.value);
        return new Negotiation(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    addNegotiation() {
        const negotiation = this.createNegotiation();
        this.negotiationArray.push(negotiation);
        console.log(this.negotiationArray);
        this.clearForm();
    }
}
