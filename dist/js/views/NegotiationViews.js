export class BaseView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
export class NegotiationView extends BaseView {
    template(model) {
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
}
export class MessageView extends BaseView {
    template(model) {
        return `
      <p class="alert alert-info">${model}</p>
  `;
    }
}
