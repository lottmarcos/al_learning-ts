import { TodaysNegotiations } from "../interfaces/NegotitationInterfaces.js";
import { Negotiation } from "../models/NegotiationModels.js";

export class NegotiationService {
  getTodaysNegotiations(): Promise<Negotiation[]> {
    return fetch("http://localhost:8080/dados")
      .then((response) => response.json())
      .then((data: TodaysNegotiations[]) => {
        return data.map((data) => {
          return new Negotiation(new Date(), data.vezes, data.montante);
        });
      });
  }
}
