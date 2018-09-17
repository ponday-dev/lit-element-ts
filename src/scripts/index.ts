import { LitElement, html, property } from '@polymer/lit-element';

class MyElement extends LitElement {
    @property()
    name = 'unknwon';

    render() {
        return html`<h1>${this.name}</h1>`
    }
}

customElements.define('my-element', MyElement);
