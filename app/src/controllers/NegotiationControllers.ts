import { TimeControl } from "../decorators/NegotiationDecorators.js";
import { Negotiation, NegotiationArray } from "../models/NegotiationModels.js";
import { NegotiationService } from "../services/NegotiationServices.js";
import { MessageView, NegotiationView } from "../views/NegotiationViews.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiationArray = new NegotiationArray();
  private negotiationService = new NegotiationService();
  private negotiationView = new NegotiationView("#negotiationView");
  private messageView = new MessageView("#messageView");

  constructor() {
    this.inputDate = document.querySelector("#date");
    this.inputQuantity = document.querySelector("#quantity");
    this.inputValue = document.querySelector("#value");
    this.negotiationView.update(this.negotiationArray);
  }

  private createNegotiation(): Negotiation {
    const date = new Date(this.inputDate.value.replace(/-/g, ","));
    const quantity = Number(this.inputQuantity.value);
    const value = Number(this.inputValue.value);
    return new Negotiation(date, quantity, value);
  }

  private clearForm(): void {
    this.inputDate.value = "";
    this.inputQuantity.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }

  @TimeControl()
  addNegotiation(): void {
    const negotiation = this.createNegotiation();
    this.negotiationArray.push(negotiation);
    this.negotiationView.update(this.negotiationArray);
    this.messageView.update("Negotiation added successfully.");
    this.clearForm();
  }
  importData(): void {
    this.negotiationService
      .getTodaysNegotiations()
      .then((TodaysNegotiationArray) => {
        for (let negotiation of TodaysNegotiationArray)
          this.negotiationArray.push(negotiation);

        this.negotiationView.update(this.negotiationArray);
      });
  }
}
