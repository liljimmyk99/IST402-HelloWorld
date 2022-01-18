import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {

  // Generates CSS for the HTML content in the render() function.
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

  // Initializes the properties of the hello-world element.
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      active: {type: Boolean}
    };
  }

  // Sets the default values for hello-world's properties.
  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  // Adds 1 to this.counter
  __increment() {
    this.counter += 1;
    if(this.counter >= 10){
      this.active = true;
    }
  }

  // Subtracts 1 from this.counter until 0 threshold
  __decrement() {
    if (this.counter <= 0){
    } else {
      this.counter -= 1;
    }
    if(this.counter >= 10){
      this.active = true;
    }
    
  }

  // Renders HTML on the page within the hello-world tag.
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <input value=${this.counter}></input>
      <button @click=${this.__increment}>increment</button>
      <button @click=${this.__decrement}>decrement</button>
    `;
  }
}
