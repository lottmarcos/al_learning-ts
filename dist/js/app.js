import { NegotiationController } from "./controllers/negotiation.js";
const controller = new NegotiationController();
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    controller.addNegotiation();
});
