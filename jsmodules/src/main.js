import { TestClass } from "./mymodule";

const testInstance = new TestClass();

window.addEventListener("load", () => {
    document.getElementById("incbtn").addEventListener(
        "click", testInstance.increment);
    document.getElementById("getvalbtn").addEventListener(
        "click", () => alert(testInstance.value));
});
