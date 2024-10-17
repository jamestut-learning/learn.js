const css = require('./MyList.scss');

export class TheList extends HTMLElement {
    listEl: HTMLElement;

    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'closed'});
        shadow.innerHTML = /*html*/`
            <ul id="cont"></ul>
        `;
        const style = new CSSStyleSheet();
        console.log(css.default);
        style.replaceSync(css.default);
        shadow.adoptedStyleSheets = [style];
        this.listEl = shadow.getElementById("cont");
    }

    addItem = (v) => {
        const listItemEl = document.createElement('li');
        listItemEl.innerHTML = /*html*/`
            <button class="delbtn">❌</button>&nbsp;
            <span>${v}</span>
        `;
        this.listEl.appendChild(listItemEl);
    }
}
