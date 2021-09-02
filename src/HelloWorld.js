import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }

      :host([active]) {
        display: block;
        padding: 25px;
        background-color: red;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      active: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
    if(this.counter >= 10){
      this.active = true;
    }
  }

  __decrement() {
    if (this.counter <= 0){
    } else {
      this.counter -= 1;
    }
    if(this.counter >= 10){
      this.active = true;
    }
    
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <input value=${this.counter}></input>
      <button @click=${this.__increment}>increment</button>
      <button @click=${this.__decrement}>decrement</button>
    `;
  }
}
