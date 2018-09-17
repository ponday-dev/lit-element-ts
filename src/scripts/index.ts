import { LitElement, html, property } from '@polymer/lit-element';

class MyElement extends LitElement {
    @property()
    name = 'unknwon';

    constructor() {
        super();
        this.addEventListener('click', this.onClick);
    }

    render() {
        return html`<h1>${this.name}</h1>`
    }

    onClick() {
        this.name = 'sample';
    }
}

customElements.define('my-element', MyElement);
