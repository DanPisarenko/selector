import Seletro from "./components/Seletro/index.js"

if (!customElements.get("my-seletro")) {
    customElements.define("my-seletro", Seletro);
}