export class MyInput extends HTMLElement {
    constructor() {
        super();

        this.pauseCallbacks = false;

        const shadow = this.attachShadow({mode: 'closed'});
        this.inputEl = document.createElement("input");
        this.inputEl.value = this.getAttribute('value');
        this.inputEl.addEventListener("input", this.handleChange);
        shadow.appendChild(this.inputEl);
    }

    handleChange = () => {
        if (this.pauseCallbacks) return;

        const newval = this.inputEl.value;
        if (this.getAttribute('value') !== newval) {
            this.doSyncState(() => this.setAttribute("value", newval));
            this.dispatchEvent(new CustomEvent('change'));
        }
    }

    doSyncState = (fn) => {
        // pauses attributeChangedCallback and
        this.disableAttrChangeCallback = true;
        try {
            fn();
        } finally {
            this.disableAttrChangeCallback = false;
        }
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (this.pauseCallbacks) return;
        if (property === 'value') {
            this.doSyncState(() => this.inputEl.value = newValue);
        }
    }

    static get observedAttributes() {
        return ['value'];
    }
}

customElements.define('my-input', MyInput);
