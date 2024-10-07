class HelloWorld extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'closed'});
        shadow.innerHTML = /*html*/`
        <link rel="stylesheet" href="helloworld.css">
        <div id="cont">
            Hello, <span id="name"></span>!
        </div>
        `;

        this.nameEl = shadow.getElementById("name");
    }

    // not needed for now
    // connectedCallback() {}

    attributeChangedCallback(property, oldValue, newValue) {
        // console.log(`attributeChangedCallback('${property}')`);
        if (property === 'name') {
            this.nameEl.innerText = newValue;
        }
    }

    static get observedAttributes() {
        return ['name'];
    }
}

customElements.define('hello-world', HelloWorld);
