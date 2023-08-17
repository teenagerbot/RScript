function buildMessage(text) {
  let stack = document.createElement("error-stack");
  stack.innerHTML = `${text}:<br><button id="__reload_page">Перезавантажити</button>`;
  document.querySelector("blocki")?.remove();
  document.querySelector("errs").appendChild(stack);
  document.querySelector("#__reload_page").onclick = () => {
        location.reload();
      }
}
export function ErrorCatcher() {
  console.log(`%c     ##  #####    
     ##  ##       
     ##  #####    
##   ##     ##    
#######  #####

Error catcher started`, `color:#6ad444; font-size:20px;font-weight: bold;text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)`);
  window.onerror = function (message, file, line, column, errorObj) {
    if(errorObj !== undefined) {
      buildMessage("Сталася фатальна помилка натисни на цю кнопку");
      buildMessage = () => {};
      document.querySelector("comp").innerHTML = `Error: ${message.toString().replace(/(.+\: )/, "")}<br> <error>at ${new URL(file.toString()).pathname}:${line}:${column}<br>
      Type error: <code>cmv3049v0945bn76u78un7ksdjgiuge5</code><br>
      Server: <code>android.rscript.co</code><br>
      Client: <code>rscript.teleweb.repl.co</code><br>
      User: <code>developer</code><br>
      Version: <code>RScript 1.0.5</code><br>
      Something went wrong, reload the page</h1>
      </error>
      <style>
      body {
        background: hsl(246deg 100% 50%);
        color: white;
        font-size: 30px;
      }
    h1 {
      text-align: left;
      color: white;
    }
    error {
      display: block;
      margin-left: 52px;
    }
    error-stack {
      display: block;
      position: fixed;
      width: fit-content;
      height: auto;
      border: none;
      padding: 10px;
      left:  50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: hsl(0deg 3% 42%);
      color: black;
      font-size: 30px;
      font-family: cursive;
      border-radius: 20px;
      box-shadow: 0px 0px 10px 10px #4a4ac6, inset 0px 0px 10px;
    }
    
    button#__reload_page {
      text-align: center;
      display: block;
      margin: auto;
      width: 100%;
      cursor: pointer;
    }
    code {
      color: hsl(0deg 0% 100% / 59%);
    }</style>`;
    window.stop();
    }
  }
}
// window.onerror = function (message, file, line, column, errorObj) {
//     if(errorObj !== undefined) //so it won't blow up in the rest of the browsers
//         console.log('Error: ' + errorObj.stack);
// }
// window.addEventListener('error', function(event) {
//   console.log('Captured error:', event);
// });