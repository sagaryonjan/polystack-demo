import {LitElementWrapper} from 'polystack';
import { html, css } from 'lit-element';
import  * as methods from './errorActions';

class ErrorComponent extends LitElementWrapper {
 
    static get properties() {
      return { 
        message: { type: String }
      };
    }

    methods() {
      return methods;
    }

    

    static get styles() {
      return [
        css`
        p {
            background-color: red;
            height: 100%;
          }
        `
      ];
    }
  
    render() {
      return html`
          <p>${this.message}</p>
          <p>Click <a href="javascript:void(0)" @click=${this.resolveIssue}> here </a> to resolve issue. </p>
      `;
    }
  }
  
  customElements.define('error-component', ErrorComponent);
  