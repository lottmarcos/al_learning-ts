import { NegotiationArray } from "../models/NegotiationModels.js";

export class NegotiationView {
  private element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  template(model: NegotiationArray): string {
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
              <td>${new Intl.DateTimeFormat().format(negotiation.date)}
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

  update(model: NegotiationArray): void {
    const template = this.template(model);
    console.log(template);
    this.element.innerHTML = template;
  }
}
