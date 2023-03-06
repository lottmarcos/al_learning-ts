var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
import { TimeControl } from "../decorators/NegotiationDecorators.js";
import { Negotiation, NegotiationArray } from "../models/NegotiationModels.js";
import { MessageView, NegotiationView } from "../views/NegotiationViews.js";
export class NegotiationController {
  constructor() {
    this.negotiationArray = new NegotiationArray();
    this.negotiationView = new NegotiationView("#negotiationView");
    this.messageView = new MessageView("#messageView");
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
    this.messageView.update("Negotiation added successfully.");
    this.clearForm();
  }
}
__decorate(
  [TimeControl()],
  NegotiationController.prototype,
  "addNegotiation",
  null
);
