import {_Android_,
        _ANDROID_DOM_,
        _ANDROID_LOG_,
        __Validator
       } from "../overrider/window.js";
customElements.define('android-script', class extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'closed'});
    let scr = _ANDROID_DOM_.createElement("script");
    let moduleIs = (this.getAttribute("android-module") == "true")?`type="module"`:"";
    let olp = (this.getAttribute("android-package") == "true")?this.getAttribute("apk").replace(/(.+)\.apk/g, "$1.js"):this.getAttribute("apk");
    scr.src = olp
    if (moduleIs != "") {
      scr.setAttribute("type", "module");
    }
    shadow.appendChild(scr);
  }
});
const bllp = document.querySelector("blocki");
navigator.connection.onchange = function() {
  if (navigator.onLine == false) {
    document.querySelector("body > comp > android-block > android-super").style.display = "none";
    document.querySelector("android-block").style.display = "";
    document.querySelector("body").style.overflow = "hidden";
    bllp.style.display = "none";
  } else {
    document.querySelector("android-block").style.display = "none";
    document.querySelector("body").style.overflow = "scroll";
    document.querySelector("body > comp > android-block > android-super").style.display = "block";
  }
}