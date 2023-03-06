import { NegotiationController } from "./controllers/NegotiationControllers.js";
import { Negotiation } from "./models/NegotiationModels.js";

const controller = new NegotiationController();
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  controller.addNegotiation();
});

const importButton = document.querySelector("#import-btn");
importButton.addEventListener("click", () => {
  controller.importData();
});
