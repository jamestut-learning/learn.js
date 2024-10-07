import { HelloWorld } from "./helloworld.js";
import { MyList } from "./list.js";
import { MyInput } from "./myinput.js";

window.addEventListener("load", () => {
    /* Hello world demo */
    const myInputEl = document.getElementById("ipt");
    const helloWorldEl = document.getElementById("hw");

    myInputEl.addEventListener("change", () => {
        helloWorldEl.setAttribute('name', myInputEl.getAttribute("value"));
    });

    /* List demo */
    const listDemoInputEl = document.getElementById("list-demo-input");
    const myList = document.getElementById("list-demo");

    document.getElementById("list-demo-form").addEventListener("submit", (evt) => {
        evt.preventDefault();
        if (!listDemoInputEl.value) {
            alert("Please input a value!");
            return;
        }
        myList.addItem(listDemoInputEl.value);
        listDemoInputEl.value = "";
    });
});
