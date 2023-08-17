export function web2apk (zone, urlServer) {
  var apk = new APKManager(); 
  var files;
  var nameApk;
  let sizeFiles = 0;
  //const android = io(urlServer);
  const dropZone = document.querySelector(zone);
  dropZone.addEventListener('dragover', function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    this.style.background = "#163239";
  });
  dropZone.addEventListener('dragleave', function(e) {
    e.stopPropagation();
    e.preventDefault();
    this.style.background = "";
  });
  dropZone.addEventListener('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();
    this.style.background = "";
    files = undefined;
    sizeFiles = 0;
    files = e.dataTransfer.files;
    document.querySelector("desk").innerHTML = "";
    let tempDir = 0;
    for (let dir of files) {
      sizeFiles += dir.size;
      if (dir.name == "index.html") {
        tempDir += 2;
      } else if (dir.name == "builder.json") {
        tempDir += 4;
      }
      document.querySelector("ang").innerHTML = "";
      let iop = document.createElement("card-info");
      iop.innerHTML = `<img src="__mobile/__constructor/__panel/${String(dir.name.match(/\.(.+)/gi)).replace(".", "")}.png" onerror='this.src="__mobile/__constructor/__panel/unknown.png"'><br><name-info>${dir.name}</name-info>`;
      document.querySelector("desk").appendChild(iop);
    }
    let er = 0;
    setTimeout(() => {
      for (let q of document.querySelectorAll("card-info")) {
        er += 200;
        setTimeout(() => {
          q.classList.add("open");
        }, er);
      }
    }, 200);
    if (tempDir == 6) {
      for (let dir of files) {
        if (dir.name == "builder.json") {
          const fr = new FileReader();
          fr.onload = receivedText;
          fr.readAsText(dir);
        }
      }
      function receivedText(e) {
        let lines = e.target.result;
        var newArr = JSON.parse(lines); 
        let ry = ["name-apk", "description", "version", "background-activity", "icon"];
        //document.querySelector("ang").innerHTML = `<pre>${lines}</pre>`
        const val = Object.keys(newArr);
        let yu = 0;
        for (let yr of ry) {
          if (!val.includes(yr)) {
            document.querySelector("ang").innerHTML += `<error-scan>❌Помилка: у файлі не знайдено ключа ${yr}</error-scan>`;
            yu++;
          }
        }
        if (yu == 0) {
          nameApk = newArr["name-apk"];
          document.querySelector("ang").innerHTML = `
          <info-scan>✔️Файли успішно прочитані</info-scan>
          <info-scan>✔️Розмір проекту: ${(String(sizeFiles).length > 3 && String(sizeFiles).length < 7)?`${Math.round(sizeFiles/1000)}KB`:(String(sizeFiles).length > 6)?`${Math.round(sizeFiles/1000000)}MB`:`${sizeFiles}B`}</info-scan>
          <info-scan>✔️Назва додатку: ${newArr["name-apk"]}</info-scan>
          <info-scan>✔️Опис: ${newArr.description}</info-scan>
          <info-scan>✔️Версія: ${newArr.version}</info-scan>
          <info-scan>✔️Автор: ${(newArr.author)?newArr.author:"не задано"}</info-scan>
          <info-scan>✔️Фон екрану: ${newArr["background-activity"]}</info-scan>
          <info-scan>✔️Іконка: ${newArr.icon}</info-scan><br><button id="__get_apk">Згенерувати файл</button>`;
          sizeFiles = 0;
          document.querySelector("#__get_apk").onclick = () => {
            for (let file of files) {
              if (file.name.endsWith("png") || file.name.endsWith("gif") || file.name.endsWith("jpg") || file.name.endsWith("ico") || file.name.endsWith("jpeg") || file.name.endsWith("webp")) {
                apk.file(file.name, file, {base64: true});
              } else {
                apk.file(file.name, file);
              }
            }
            apk.generateAsync({type:"blob"}).then(function(content) {
              var aa = document.createElement("a")
              aa.href =  URL.createObjectURL(content);
              aa.download = `${nameApk}.apk`;
              document.body.appendChild(aa);
              aa.click();
              setTimeout(() => {
                aa.remove();
                document.querySelector("ang").innerHTML = `<info-scan>✔️Проект згенерований в apk</info-scan>
                <warning-scan><warn>⚠</warn>В жодному разі не встановлюй цей файл на справжній смартфон, цей файл працює лише на веб-eмуляторі від JSLearn</warning-scan>`;
                files = undefined;
              }, 400);
            });
          }
        }
      }
    } else {
      document.querySelector("ang").innerHTML += `<error-scan>❌Помилка: У проекті не знайдено файлу index.html або builder.json</error-scan>`;
    }
  });
  //   function uploader(files, apk) {
  //   let size = 0;
  //   for (let fileSize of files) {
  //     size += fileSize.size;
  //   }
  //   if ((size / 1000000) > 100) {
  //     alert("error")
  //   } else {
  //     let y = files.length;
  //     let tmp = 0;
  //     android.emit("uploader", {
  //       file: files[0],
  //       fileName: files[0].name,
  //       apkName: apk,
  //       count: "--"
  //     });
  //     // for (let file of files) {
  //     //   android.emit("uploader", {
  //     //     file: file,
  //     //     fileName: file.name,
  //     //     apkName: apk,
  //     //     count: "--"
  //     //   });
  //     //   tmp++;
  //     // }
  //     android.emit("gone", apk);
  //   }
  // }
}