import { Negotiation } from "./models/negotiations.js";

const negotiation = new Negotiation(new Date(), 10, 100)
console.log(negotiation.value);