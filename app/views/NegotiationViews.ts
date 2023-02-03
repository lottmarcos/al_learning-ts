import { NegotiationArray } from "../models/NegotiationModels.js";

export abstract class BaseView<Type> {
  protected element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  update(model: Type): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }

  protected abstract template(model: Type): string;
}
export class NegotiationView extends BaseView<NegotiationArray> {
  protected template(model: NegotiationArray): string {
    return `
      <table class="table table-hover table-bordered">
         <thead>
           <tr>
             <th>DATE</th>  
             <th>QUANTITY</th>  
             <th>VALUE</th>
            </tr>
         </thead>
         <tbody>
            ${model
              .getList()
              .map((negotiation) => {
                return `
              <tr>
              <td>
                  ${new Intl.DateTimeFormat().format(negotiation.date)}
              </td>
              <td>
                  ${negotiation.quantity}
              </td>
              <td>
                  ${negotiation.value}
              </td>
          </tr>
              `;
              })
              .join("")}
         </tbody>
      </table> 
    `;
  }
}

export class MessageView extends BaseView<string> {
  protected template(model: string): string {
    return `
      <p class="alert alert-info">${model}</p>
  `;
  }
}
