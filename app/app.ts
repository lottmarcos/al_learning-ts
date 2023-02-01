import { NegotiationController } from "./controllers/NegotiationControllers.js";

const controller = new NegotiationController();
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  controller.addNegotiation();
});
