import { Negotiation, NegotiationArray } from "../models/NegotiationModels.js";
import { NegotiationView } from "../views/NegotiationViews.js";
export class NegotiationController {
    constructor() {
        this.negotiationArray = new NegotiationArray();
        this.negotiationView = new NegotiationView("#negotiationView");
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
        this.negotiationView.update(this.negotiationArray);
    }
    createNegotiation() {
        const date = new Date(this.inputDate.value.replace(/-/g, ","));
        const quantity = Number(this.inputQuantity.value);
        const value = Number(this.inputValue.value);
        return new Negotiation(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
    addNegotiation() {
        const negotiation = this.createNegotiation();
        this.negotiationArray.push(negotiation);
        this.negotiationView.update(this.negotiationArray);
        this.clearForm();
    }
}
