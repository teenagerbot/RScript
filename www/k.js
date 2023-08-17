window.alert = (...args) => new  Promise(resolve => {
  let string = "";
  for (let arg of args) {
    string += String(arg).replaceAll('<', '&lt;');
  }
  let alertAndroid = document.createElement("android-alert");
  alertAndroid.style.cssText = `
  width: 84.3%;
  display: block;
  border: 2px #333436 solid;
  position: fixed;
  left: 4.4%;
  margin: auto;
  top: 30%;
  padding: 10px;
  word-break: break-all;
  border-radius: 20px;
  background: #333436;
  color: white;`;
  alertAndroid.innerHTML = `<spam>${string}</spam><br>
  <button id="__android_ok_alert">OK</button>`;
  document.body.appendChild(alertAndroid);
  document.querySelector("#__android_ok_alert").onclick = function() {
    this.parentNode.remove();
    return resolve();
  }
});

// Где-то позже
async function x(){ 
  await alert(2);
  console.log(1);
}
x()


alert("hello", () => {
  hjfghjghj
})