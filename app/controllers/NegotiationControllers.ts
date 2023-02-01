import { Negotiation, NegotiationArray } from "../models/NegotiationModels.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiationArray = new NegotiationArray();

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputQuantity = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
  }

  createNegotiation(): Negotiation {
    const date = new Date(this.inputDate.value.replace(/-/g, ","));
    const quantity = Number(this.inputQuantity.value);
    const value = Number(this.inputValue.value);
    return new Negotiation(date, quantity, value);
  }

  clearForm(): void {
    this.inputDate.value = "";
    this.inputQuantity.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }

  addNegotiation(): void {
    const negotiation = this.createNegotiation();
    this.negotiationArray.push(negotiation);

    console.log(this.negotiationArray);
    this.clearForm();
  }
}
