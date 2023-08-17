function rrun(event) {
    if (event.key === "Enter" && event.ctrlKey) {
      event.preventDefault();
      document.querySelector("#run").click();
        //run code
    } else if (event.altKey && event.key == "e") {
      event.preventDefault();
      document.querySelector("#resp").click();
    } else if (event.ctrlKey && event.key == "e") {
      event.preventDefault();
      document.querySelector("#resp").click();
      document.querySelector("#run").click();
    } else if (event.altKey && event.key == "a") {
      event.preventDefault();
      editor.setValue("");
      editorCss.setValue("");
      editorHtml.setValue(`<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <!--CSS-->
    </head>
    
    <body>
      Hello world
      <!--JS-->
    </body>
    
    </html>`);
    } else if (event.altKey && event.key == "h") {
      event.preventDefault();
      editorHtml.setValue(`<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <!--CSS-->
    </head>
    
    <body>
      Hello world
      <!--JS-->
    </body>
    
    </html>`);
    } else if (event.altKey && event.key == "j") {
      event.preventDefault();
      editor.setValue("");
    } else if (event.altKey && event.key == "c") {
      event.preventDefault();
      editorCss.setValue("");
    } else if (event.shiftKey && event.key == "F5") {
      event.preventDefault();
      document.querySelector("#Code").contentWindow.location.reload();
    }
  }


data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYuNTkgOC41OUwxMiAxMy4xNyA3LjQxIDguNTkgNiAxMGw2IDYgNi02eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=