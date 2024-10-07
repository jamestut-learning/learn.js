const itemTemplate = document.createElement("template");
itemTemplate.innerHTML = /*html*/`
    <li>
        <span class="itemname"></span>
        <button class="delbtn">X</button>
    </li>
`;

class MyList extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        this.listEl = document.createElement('ul');
        shadowRoot.appendChild(this.listEl);
    }

    addItem(v) {
        const listItemEl = document.createElement('li');
        listItemEl.innerHTML = /*html*/`
            <button class="delbtn">❌</button>&nbsp;
            <span>${v}</span>
        `;
        listItemEl.querySelector('.delbtn').addEventListener("click", () => {
            listItemEl.remove();
        });
        this.listEl.appendChild(listItemEl);
    }
}

customElements.define('my-list', MyList);
