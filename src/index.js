import {LitElementWrapper} from 'polystack';

import { html, css } from 'lit-element';
import  * as methods from './methods'
import * as errorMixin from './error/errorMixin';

import './error/ErrorComponent';

class DemoApp extends LitElementWrapper {

  constructor() {
    super();

    this.fullName = 'Sagar Yonjan';
  }

  /**
   * Define
   */
  mixins() {
    return [
      errorMixin
    ]
  }

  /**
   * Methods
   */
  methods() {
    return methods;
  }

  firstUpdated() {
    this.listenToResolveError();
  }

  static get styles() {
    return [
      css`
        main {
          background-color: var(--color-backgroudGrey);
          height: 100%;
        }
      `
    ];
  }

  render() {
    return html`
        <p>My name is sagar.</p>
        <button @click="${this.onClickShowError}">Click to show error</button>
        <button @click="${this.onClickHideError}">Hide Error</button>
        
        ${this.error.status ? html`<error-component .message="${this.error.message}"></error-component>` : this.error.message}

        <p> My Full Name is ${this.fullName}</p>
        <input type="text" @input="${(e) => this.model('fullName', e, true)}">
    `;
  }
}

customElements.define('demo-app', DemoApp);
