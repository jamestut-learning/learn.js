import { TheList } from './components/MyList';

function test() {
    const el = document.getElementById("mylist") as TheList;
    el.addItem("testing");
    // alert("test");
}

document.getElementById("thebutton").addEventListener("click", test);

customElements.define('the-list', TheList);
