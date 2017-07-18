 class Card extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        let shadowRoot = this.attachShadow({ mode: 'open' });
        const t = document.querySelector('#card');
        const instance = t.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    }
}

customElements.define('my-card', Card);