import { Negotiation } from "../models/NegotiationModels.js";
export class NegotiationService {
    getTodaysNegotiations() {
        return fetch("http://localhost:8080/dados")
            .then((response) => response.json())
            .then((data) => {
            return data.map((data) => {
                return new Negotiation(new Date(), data.vezes, data.montante);
            });
        });
    }
}
