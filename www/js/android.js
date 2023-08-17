import { moveToEndCursor } from "./libs/redactor/cursor.js";
import { runTST, MobileTester } from "./libs/Android/checkPhone/checker.js";
import { watsNew } from "./libs/Android/console/watsNew.js";
//Mozilla only: typeof InstallTrigger == object
//Chrome only: !!window.chrome == true
import {
  _Android_,
  _ANDROID_DOM_,
  _ANDROID_LOG_,
  __Validator
} from "./libs/Android/overrider/window.js";
import { SecuringHasher } from "./libs/Android/repl-script/repl.js";
import { AndroidScreenTaker } from "./libs/Android/screenhoot/take_screen.js";
import { web2apk } from "./libs/Android/apkBuilder/apk.js";
import { ErrorCatcher } from "./libs/redactor/window/errors.js";
import { ValidatorUser } from "./libs/redactor/validator/val.js";
ValidatorUser();
//Importing datas
//ErrorCatcher();
const _OPERATING_SYSTEM_ = new _Android_();
const ZIP = new APKManager();
let g_temp;
//_OPERATING_SYSTEM_.getElem("android-console").innerHTML = "";
__Validator();
const bllp = document.querySelector("blocki");
let devToolsElectron = null;
let tab = null;
//LOADING APPS FROM SERVER
document.onreadystatechange = (e) => {
  console.log(document.readyState)
}
document.querySelector("body > comp > android-block > loader-android > img").ondragstart = (e) => {
  e.preventDefault();
}
function loadEmulator() {
  document.querySelector("#androidx iframe").src = "https://iphone.teleweb.repl.co/www/";
}
localStorage.setItem("tv_ttvers_09", "1.0.5");
window.onkeydown = (r) => {
  if (r.key == "Meta") {
    r.preventDefault();
    document.body.style.display = "none";
    setTimeout(() => {
      document.body.style.display = "block";
    }, 500);
  }
}
window.onkeypress = (r) => {
  if (r.key == "Meta") {
    r.preventDefault();
    document.body.style.display = "none";
    setTimeout(() => {
      document.body.style.display = "block";
    }, 500);
  }
}
_ANDROID_DOM_.querySelector("#__search").onkeydown = function(y) {
  if (y.key == "Enter") {
    let query = this.value.trim();
    if (query) {
      _ANDROID_DOM_.querySelector(".__result_se").innerHTML= `<img src="__mobile/__constructor/__loaders/__2.svg" id="looad">`;
      fetch(`https://uxwing.com/?s=${query}`).then((resp) => {
        resp.text().then((data) => {
          let html = data;
          let arr = html.match(/<img src="(https:\/\/uxwing\.com\/wp-content\/themes\/uxwing\/download\/.+\.svg)/gm);
          for (let ar of arr) {
            _ANDROID_DOM_.querySelector("#looad")?.remove()
            let dom = _ANDROID_DOM_.createElement("p");
            dom.className = "__dom_res";
            dom.innerHTML = `<img src="${String(ar.toString().replace(/<img src="(https:\/\/uxwing\.com\/wp-content\/themes\/uxwing\/download\/.+\.svg)/gm, "$1")).replace(/\.svg$/gm, ".png")}">`;
            _ANDROID_DOM_.querySelector("div.__result_se").appendChild(dom)
          }
        });
      })
    } else {
      _ANDROID_DOM_.querySelector(".__result_se").innerHTML = "";
    }
  }
}
document.querySelector("body > android-project-create > div.__result_se").onclick = (r) => {
  if (r.target.tagName == "IMG") {
    let temp = $("<input>");
    $("body").append(temp);
    temp.val(r.target.src).select();
    document.execCommand("copy");
    temp.remove();
  }
}
let users;
let operation = new Query();
(async () => {
  document.querySelector("#__android_url_project").onfocus = function() {
    this.select()
  }
  let __uu;
  let __oo;
  document.querySelector("#__android_url_project").onblur = function() {
    let u = this.value;
    this.value = "";
    this.value = u;
  }
  const AndroidChannelMessenger = new BroadcastChannel("@android");
  AndroidChannelMessenger.onmessage = (event) => {
    if (event.data == "@reloadElectron") {
      devToolsElectron.close();
      runCode();
    }
  };
  window.onpagehide = () => {
    devToolsElectron.close();
  }
function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

  /*
  https://rscript.teleweb.repl.co/www/?update=1.0.3
  */


  window.addEventListener('message', (data) => {
    if ((data.data).toString().match(/__close_app-err:(.+)/gm)) {
      let error = _ANDROID_DOM_.createElement("div");
      error.setAttribute("contenteditable", "false");
      error.innerHTML = "<br><b style='color:hsl(0deg 71% 70%);'>❌ <sprk>📱</sprk>😬[" + data.data.replace(/__close_app-err:(.+)/gm, "$1") + "]😲<emul>(Error caught in the emulator)</emul></b>";
      _ANDROID_DOM_.querySelector("android-console").prepend(error);
      error.scrollIntoView();
    } else if ((data.data).toString() == "__requestInstalledApps") {
      data.source.postMessage(`__userIdFrApps:${getCookie("nick")}`, data.origin);
    } else if ((data.data).toString().match(/__uninstall_app\:(.+)/gm)) {
      let po = confirm(`Ти точно хочеш видалити проект "${(data.data).toString().replace(/__uninstall_app\:(.+)/gm, "$1")}"? Його неможливо буде відновити`);
      if (po == true) {
        _ANDROID_SOCKET_CONNECTOR_.emit("deleteProject", {
          user: getCookie("nick"),
          project: (data.data).toString().replace(/__uninstall_app\:(.+)/gm, "$1")
        });
        sessionStorage.removeItem("repl-0-project-id");
        clearEditor();
        if (document.querySelector("#android.andr.ui-draggable.ui-draggable-handle")) {
          _OPERATING_SYSTEM_.getElem(".andr iframe").contentWindow.postMessage(`__delete_app-https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/${(data.data).toString().replace(/__uninstall_app\:(.+)/gm, "$1")}`, "https://Iphone.teleweb.repl.co");
        }
        _OPERATING_SYSTEM_.getElem("#androidx.andr.ui-draggable.ui-draggable-handle iframe").contentWindow.postMessage(`__reload_apps-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
        if (sessionStorage.getItem("repl-0-project-id") == (data.data).toString().replace(/__uninstall_app\:(.+)/gm, "$1")) {
          sessionStorage.removeItem("repl-0-project-id");
          clearEditor();
          data.source.postMessage(`__deleted_app`, data.origin);
        }
      }
    } else if (String(data.data) == "@android_no_screenhoot") {
      document.querySelector("body > comp > div.ham-menu > ul > li.__screenshoot").classList.add("no");
      document.querySelector("body > comp > div.ham-menu > ul > li.__screenshoot_o").classList.add("no");
    } else if (String(data.data) == "@android_yes_screenhoot") {
      document.querySelector("body > comp > div.ham-menu > ul > li.__screenshoot").classList.remove("no");
      document.querySelector("body > comp > div.ham-menu > ul > li.__screenshoot_o").classList.remove("no");
    }
  });
  var _ANDROID_SOCKET_CONNECTOR_ = io.connect('https://server-js.teleweb.repl.co');
  window.addEventListener('beforeunload', function(e) {
    _ANDROID_SOCKET_CONNECTOR_("closedTab");
  }, false)
  //localStorage.setItem("no", "yes");
  if (localStorage.getItem("no") == "yes") {
    _ANDROID_DOM_.body.style.background = "black";
  }
  if (sessionStorage.getItem("repl-0-project-id")) {
    sessionStorage.removeItem("repl-0-project-id");
  }
  let url = new URL(window.location.href);
  var site = url.searchParams.get("update");
  let adminS = url.searchParams.get("admin");
  let projectS = url.searchParams.get("project");
  let nnew = url.searchParams.get("new");
  let fn = url.searchParams.get("app");
  let nn = url.searchParams.get("icon");
  if (String(nnew) == "") {
    setTimeout(() => {
      _ANDROID_DOM_.querySelector("#newProject").click();
    }, 1000);
  } else if (nnew != "" && fn != "" && nn != "") {
    setTimeout(() => {
      __uu = fn;
      _ANDROID_NEW_REPL_(nnew, fn, nn);
    }, 1000);
  }
  if (site != null) {
    localStorage.setItem("tv_ttvers_09", site);
    location.replace("https://rscript.teleweb.repl.co/www/")
  } else if (adminS && projectS) {
    if (operation.$$(getCookie("nick")) != adminS) {
      _ANDROID_SOCKET_CONNECTOR_.emit("request-sharing", {
        user: getCookie("nick"),
        project: projectS,
        admin: adminS
      });
    }
  }
  let newPr = _ANDROID_DOM_.querySelector("#newProject");
  let screen = _ANDROID_DOM_.querySelector(".__screenshoot");
  let screenSh = _ANDROID_DOM_.querySelector(".__screenshoot_o");
  let screenSj = _ANDROID_DOM_.querySelector(".__screenshoot_y");
  //localStorage.setItem("tv_ttvers_09", "1.0.3")
  if (localStorage.getItem("tv_ttvers_09") == "1.0.2") {
    newPr.style.display = "block";
    screen.style.display = "none";
    screenSh.style.display = "none";
    screenSj.style.display = "none";
  } else if (localStorage.getItem("tv_ttvers_09") == "1.0.3") {
    newPr.style.display = "block";
    screen.style.display = "none";
    screenSj.style.display = "none";
    screenSh.style.display = "none";
  } else if (localStorage.getItem("tv_ttvers_09") == "1.0.5") {
    newPr.style.display = "block";
    screen.style.display = "block";
    screenSj.style.display = "block";
    screenSh.style.display = "block";
  } else {
    newPr.style.display = "none";
    screen.style.display = "none";
    screenSh.style.display = "none";
    screenSj.style.display = "none";
  }
  const lang = {
    js: {
      equa: /(\b=\b)/g,
      quot: /((&#39;.*?&#39;)|(&#34;.*?&#34;)|(".*?(?<!\\)")|('.*?(?<!\\)')|`)/g,
      comm: /((\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*))/g,
      logi: /(%=|%|\-|\+|\*|&amp;{1,2}|\|{1,2}|&lt;=|&gt;=|&lt;|&gt;|!={1,2}|={2,3})/g,
      numb: /(\d+(\.\d+)?(e\d+)?)/g,
      func: /(?<=^|\s*)(async|await|console|window|alert|Math|Object|Array|String|class(?!\s*\=)|function)(?=\b)/g,
      decl: /(?<=^|\s*)(var|let|const)/g,
      pare: /(\(|\))/g,
      squa: /(\[|\])/g,
      curl: /(\{|\})/g,
      meth: /(\.\D.+\()/g,
      inli: /(\$\{.+\})/g,
    },
    html: {
      tags: /(?<=&lt;(?:\/)?)(\w+)(?=\s|\&gt;)/g,
      // Props order matters! Here I rely on "tags"
      // being already applied in the previous iteration
      angl: /(&lt;\/?|&gt;)/g,
      attr: /((?<=<i class=html_tags>\w+<\/i>)[^<]+)/g,
    }
  };
  const highLite = el => {
    const dataLang = el.dataset.lang; // Detect "js", "html", "py", "bash", ...
    const langObj = lang[dataLang]; // Extract object from lang regexes dictionary
    let html = el.innerHTML;
    Object.keys(langObj).forEach(function(key) {
      html = html.replace(langObj[key], `<i class=${dataLang}_${key}>$1</i>`);
    });
    el.previousElementSibling.innerHTML = html;
  };
  _OPERATING_SYSTEM_.getElem("#html").oninput = function() {
    highLite(_OPERATING_SYSTEM_.getElem("#html"));
    tmlh.value = this.innerText;
    if (sessionStorage.getItem("repl-0-project-id")) {
      _ANDROID_SOCKET_CONNECTOR_.emit("update-repl", {
        user: getCookie("nick"),
        file: this.innerText,
        project: sessionStorage.getItem("repl-0-project-id"),
        extension: "html",
        name: "index"
      });
    }
    if (devToolsElectron != null) {
      var contentJS = editor.getValue();
      var contentCSS = editorCss.getValue();
      var contentHTML = editorHtml.innerText;
      updateElectron(contentHTML, contentCSS, contentJS);
    }
    // if (tab != null) {
    //   updateElectronTab(tab)
    // }
  }

  _OPERATING_SYSTEM_.getElem("#html").addEventListener("scroll", function() {
    _OPERATING_SYSTEM_.getElem(".highLite_colors").scrollTop = _OPERATING_SYSTEM_.getElem("#html").scrollTop;
    _OPERATING_SYSTEM_.getElem(".highLite_colors").scrollLeft = _OPERATING_SYSTEM_.getElem("#html").scrollLeft;
  });
  let Android_WEBVIEW;

  ///SERVICE WORKER
  //   if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker
  //     .register('sw1.js')
  //     .then(() => { console.log('Service Worker Registered'); });
  // }
  //load();
  setTimeout(() => {
    if (_OPERATING_SYSTEM_.getElem('android-console').innerHTML == "") {
      location.reload();
    }
  }, 400);

  function AndroidUserOnlineAdapter() {
    _ANDROID_SOCKET_CONNECTOR_.emit("newUser", getCookie("nick"));
  }

  function _ANDROID_BUILD_PROJECTS_WATCHER(user) {
    _ANDROID_SOCKET_CONNECTOR_.emit("requestProjects", user);
  }

  function _ANDROID_TRANSLATER_ADAPTER_UA_() {
    let _ANDROID_TRANSLATE_EN_DICTIONARY_ = [
      `Welcome to console`,
      `Loading...`,
      `Opening Google...`,
      `Connecting to Replit.com`,
      `Loading shell...`,
      `Loading WebBrowser...`,
      `Loading emulator...`,
      `Loading IO.Google...`,
      `Opening files...`,
      `Connecting to emulator...`,
      `✔️Success, WebBrowser conected to emulator<br>Reopening files...`,
      `Opening filestream...`,
      `Opening emulator...`,
      `Opening ServerStream...`,
      `✔️Success`,
      `Starting...`,
      `Project opened`,
      `Server started`,
      `The HTML was cleared`,
      `The CSS was cleared`,
      `The JS was cleared`,
      `History is recording...`,
      `Recording...`,
      `History was stopped...`,
      `Your nick`,
      `System`,
      `Emulator`,
      `Version emulator`,
      `Operating system`,
      `Your device`,
      `Sending homework`,
      `Clearing history`,
      `Searching in Google`,
      `Searching videos`,
      `Searching images`,
      `Searching emoji`,
      `Tab was opened`,
      `Tab was closed`,
      `command not found👀`,
      "Support center",
      `If there is a lot of text in the console, then to write a command - press Ctrl+arrow_down or click on the button "Scroll the console down"`,
      "Command",
      "Value",
      "Cleaning the console",
      "Running emulators",
      "Killing the Android system session and restarting the editor",
      "Closing all open emulators",
      "Cleaning up the html code",
      "Cleaning up the css code",
      "Cleaning up the js code",
      "Start recording code history",
      "Stop writing code history",
      "Clear history",
      "Open chat",
      "close chat",
      "Running the code",
      "Closing the tab",
      "Copy link",
      "Search for video, for example: --video(javascript)",
      `Sending homework from the console, TELEGRAM-NICK is your nick in <a href="https://web.telegram.org/k/" target="_blank">telegram.`,
      `Internet search, REQUEST is your request to Google, for example: --search (JavaScript programming)`,
      `Search in emoji, for example: --emoji(hello)`,
      "Running emulators, --run 4 will run 4 emulators",
      "Information about the system",
      "certificate"
    ];
    let _ANDROID_TRANSLATE_UA_DICTIONARY_ = [
      "Тебе вітає консоль",
      "Завантаження...",
      "Відкриття Google...",
      "Підключення до Replit.com",
      "Завантаження консолі...",
      "Завантаження WebBrowser...",
      "Завантаження емулятору...",
      "Завантаження IO.Google",
      "Відкриття файлів...",
      "Підключення до емулятору",
      "✔️WebBrowser успішно підключений до емулятору<br>Перевідкриття файлів...",
      "Відкриття файлового потоку...",
      "Запуск емулятору...",
      "Відкриття ServerStream...",
      "✔️Успішно завершено",
      "Запуск...",
      "Проект відкритий",
      "Сервер запущений",
      "HTML очищено",
      "CSSочищено",
      "JS очищено",
      "Історія записується...",
      "Запис...",
      "Історія зупинена",
      "Твій нік",
      "Система",
      "Емулятор",
      "Версія емулятору",
      "Веpсія операційної системи",
      "Твій пристрій",
      "Відправка ДЗ",
      "Очищення історії",
      "Пошук у Google",
      "Пошук відео",
      "Пошук фото",
      "Пошук емодзі",
      "Вкладка відкрита",
      "Вкладка закрита",
      "команда не знайдена👀",
      "Центр підтримки",
      "Якщо в консолі багато тексту, то щоб написати команду - натисни Ctrl+стрілка_вниз або клацни по кнопці \"Прокрутити консоль вниз\"",
      "Команда",
      "Значення",
      "Очищення консолі",
      "Запуск емуляторів",
      "Знищення сесії системи Android та перезавантаження редактору",
      "Закриття всіх відкритих емуляторів",
      "Очищення коду html",
      "Очищення коду css",
      "Очищення коду js",
      "Почати запис історії коду",
      "Зупинити запис історії коду",
      "Очистити історію",
      "Відкрити чат",
      "Закрити чат",
      "Запуск коду",
      "Закриття вкладки",
      "Копіювання посилання",
      "Пошук відео, наприклад: --video(javascript)",
      `Відправка дз з консолі, TELEGRAM-NICK - це ваш нік в <a href="https://web.telegram.org/k/" target="_blank">телеграмі`,
      `Пошук в інтернеті, REQUEST - це твій запит в Google, наприклад: --search(програмування на JavaScript)`,
      `Пошук в емодзі, наприклад: --emoji(hello)`,
      "Запуск емуляторів, --run 4 запустить 4 емулятори",
      "Інформація про систему",
      "Довідка"
    ];
    let _ANDROID_TRANSLATE_RU_DICTIONARY_ = [
      "Тебя приветствует консоль",
      "Загрузка...",
      "Открытие Google...",
      "Подключение к Replit.com",
      "Загрузка консоли...",
      "Загрузка WebBrowser...",
      "Загрузка эмулятора...",
      "Загрузка IO.Google",
      "Открытие файлов...",
      "Подключение к эмулятору",
      "✔️WebBrowser успешно подключен к эмулятору<br>Переоткрытие файлов...",
      "Открытие файлового потока...",
      "Запуск эмулятора...",
      "Открытие ServerStream...",
      "✔️Успешно завершено",
      "Запуск...",
      "Проект открыт",
      "Сервер запущен",
      "HTML очищено",
      "CSS очищено",
      "JS очищено",
      "История записывается...",
      "Запись...",
      "История остановлена",
      "Твой ник",
      "Система",
      "Емулятор",
      "Версия эмулятора",
      "Веpсия операционной системы",
      "Ваше устройство",
      "Отправка ДЗ",
      "Очистка истории",
      "Поиск в Google",
      "Поиск відео",
      "Поиск фото",
      "Поиск емодзі",
      "Вкладка открыта",
      "Вкладка закрыта",
      "команда не найдена👀",
      "Центр поддержки",
      `Если в консоли много текста, то чтобы написать команду – нажми Ctrl+стрелка_вниз или щелкни по кнопке "Прокрутить консоль вниз"`,
      "Команда",
      "Значение",
      "Очистка консоли",
      "Запуск эмуляторов",
      "Уничтожение сессии Android и перезагрузка редакторa",
      "Закрытие всех открытых эмуляторов",
      "Очистка кода html",
      "Очистка кода css",
      "Очистка кода js",
      "Начать запись истории кода",
      "Остановить запись истории кода",
      "Очистить историю",
      "Открыть чат",
      "Закрыть чат",
      "Запуск кода",
      "Закрытие вкладки",
      "Копирование ссылки",
      "Поиск видео, например: --video(javascript)",
      `Отправка дз из консоли, TELEGRAM-NICK - это ваш ник в <a href="https://web.telegram.org/k/" target="_blank">телеграмме</a>.`,
      `Поиск в интернете, REQUEST – это твой запрос в Google, например: --search(программирование на JavaScript)`,
      `Поиск в эмодзи, например: --emoji(hello)`,
      "Запуск эмуляторов, --run 4 запустит 4 эмулятора",
      "Информация о системе",
      "Справка"
    ];
    for (let androd in _ANDROID_TRANSLATE_EN_DICTIONARY_) {
      _OPERATING_SYSTEM_.getElem("android-console").innerHTML = _OPERATING_SYSTEM_.getElem("android-console").innerHTML.replaceAll(_ANDROID_TRANSLATE_EN_DICTIONARY_[androd], _ANDROID_TRANSLATE_UA_DICTIONARY_[androd]);
      _OPERATING_SYSTEM_.getElem("android-console").innerHTML = _OPERATING_SYSTEM_.getElem("android-console").innerHTML.replaceAll(_ANDROID_TRANSLATE_RU_DICTIONARY_[androd], _ANDROID_TRANSLATE_UA_DICTIONARY_[androd]);
    }
  }
  function _ANDROID_TRANSLATER_ADAPTER_RU_() {
    let _ANDROID_TRANSLATE_EN_DICTIONARY_ = [
      `Welcome to console`,
      `Loading...`,
      `Opening Google...`,
      `Connecting to Replit.com`,
      `Loading shell...`,
      `Loading WebBrowser...`,
      `Loading emulator...`,
      `Loading IO.Google...`,
      `Opening files...`,
      `Connecting to emulator...`,
      `✔️Success, WebBrowser conected to emulator<br>Reopening files...`,
      `Opening filestream...`,
      `Opening emulator...`,
      `Opening ServerStream...`,
      `✔️Success`,
      `Starting...`,
      `Project opened`,
      `Server started`,
      `The HTML was cleared`,
      `The CSS was cleared`,
      `The JS was cleared`,
      `History is recording...`,
      `Recording...`,
      `History was stopped...`,
      `Your nick`,
      `System`,
      `Emulator`,
      `Version emulator`,
      `Operating system`,
      `Your device`,
      `Sending homework`,
      `Clearing history`,
      `Searching in Google`,
      `Searching videos`,
      `Searching images`,
      `Searching emoji`,
      `Tab was opened`,
      `Tab was closed`,
      `command not found👀`,
      "Support center",
      `If there is a lot of text in the console, then to write a command - press Ctrl+arrow_down or click on the button "Scroll the console down"`,
      "Command",
      "Value",
      "Cleaning the console",
      "Running emulators",
      "Killing the Android system session and restarting the editor",
      "Closing all open emulators",
      "Cleaning up the html code",
      "Cleaning up the css code",
      "Cleaning up the js code",
      "Start recording code history",
      "Stop writing code history",
      "Clear history",
      "Open chat",
      "close chat",
      "Running the code",
      "Closing the tab",
      "Copy link",
      "Search for video, for example: --video(javascript)",
      `Sending homework from the console, TELEGRAM-NICK is your nick in <a href="https://web.telegram.org/k/" target="_blank">telegram.`,
      `Internet search, REQUEST is your request to Google, for example: --search (JavaScript programming)`,
      `Search in emoji, for example: --emoji(hello)`,
      "Running emulators, --run 4 will run 4 emulators",
      "Information about the system",
      "certificate"
    ];
    let _ANDROID_TRANSLATE_UA_DICTIONARY_ = [
      "Тебе вітає консоль",
      "Завантаження...",
      "Відкриття Google...",
      "Підключення до Replit.com",
      "Завантаження консолі...",
      "Завантаження WebBrowser...",
      "Завантаження емулятору...",
      "Завантаження IO.Google",
      "Відкриття файлів...",
      "Підключення до емулятору",
      "✔️WebBrowser успішно підключений до емулятору<br>Перевідкриття файлів...",
      "Відкриття файлового потоку...",
      "Запуск емулятору...",
      "Відкриття ServerStream...",
      "✔️Успішно завершено",
      "Запуск...",
      "Проект відкритий",
      "Сервер запущений",
      "HTML очищено",
      "CSSочищено",
      "JS очищено",
      "Історія записується...",
      "Запис...",
      "Історія зупинена",
      "Твій нік",
      "Система",
      "Емулятор",
      "Версія емулятору",
      "Веpсія операційної системи",
      "Твій пристрій",
      "Відправка ДЗ",
      "Очищення історії",
      "Пошук у Google",
      "Пошук відео",
      "Пошук фото",
      "Пошук емодзі",
      "Вкладка відкрита",
      "Вкладка закрита",
      "команда не знайдена👀",
      "Центр підтримки",
      "Якщо в консолі багато тексту, то щоб написати команду - натисни Ctrl+стрілка_вниз або клацни по кнопці \"Прокрутити консоль вниз\"",
      "Команда",
      "Значення",
      "Очищення консолі",
      "Запуск емуляторів",
      "Знищення сесії системи Android та перезавантаження редактору",
      "Закриття всіх відкритих емуляторів",
      "Очищення коду html",
      "Очищення коду css",
      "Очищення коду js",
      "Почати запис історії коду",
      "Зупинити запис історії коду",
      "Очистити історію",
      "Відкрити чат",
      "Закрити чат",
      "Запуск коду",
      "Закриття вкладки",
      "Копіювання посилання",
      "Пошук відео, наприклад: --video(javascript)",
      `Відправка дз з консолі, TELEGRAM-NICK - це ваш нік в <a href="https://web.telegram.org/k/" target="_blank">телеграмі`,
      `Пошук в інтернеті, REQUEST - це твій запит в Google, наприклад: --search(програмування на JavaScript)`,
      `Пошук в емодзі, наприклад: --emoji(hello)`,
      "Запуск емуляторів, --run 4 запустить 4 емулятори",
      "Інформація про систему",
      "Довідка"
    ];
    let _ANDROID_TRANSLATE_RU_DICTIONARY_ = [
      "Тебя приветствует консоль",
      "Загрузка...",
      "Открытие Google...",
      "Подключение к Replit.com",
      "Загрузка консоли...",
      "Загрузка WebBrowser...",
      "Загрузка эмулятора...",
      "Загрузка IO.Google",
      "Открытие файлов...",
      "Подключение к эмулятору",
      "✔️WebBrowser успешно подключен к эмулятору<br>Переоткрытие файлов...",
      "Открытие файлового потока...",
      "Запуск эмулятора...",
      "Открытие ServerStream...",
      "✔️Успешно завершено",
      "Запуск...",
      "Проект открыт",
      "Сервер запущен",
      "HTML очищено",
      "CSS очищено",
      "JS очищено",
      "История записывается...",
      "Запись...",
      "История остановлена",
      "Твой ник",
      "Система",
      "Емулятор",
      "Версия эмулятора",
      "Веpсия операционной системы",
      "Ваше устройство",
      "Отправка ДЗ",
      "Очистка истории",
      "Поиск в Google",
      "Поиск відео",
      "Поиск фото",
      "Поиск емодзі",
      "Вкладка открыта",
      "Вкладка закрыта",
      "команда не найдена👀",
      "Центр поддержки",
      `Если в консоли много текста, то чтобы написать команду – нажми Ctrl+стрелка_вниз или щелкни по кнопке "Прокрутить консоль вниз"`,
      "Команда",
      "Значение",
      "Очистка консоли",
      "Запуск эмуляторов",
      "Уничтожение сессии Android и перезагрузка редакторa",
      "Закрытие всех открытых эмуляторов",
      "Очистка кода html",
      "Очистка кода css",
      "Очистка кода js",
      "Начать запись истории кода",
      "Остановить запись истории кода",
      "Очистить историю",
      "Открыть чат",
      "Закрыть чат",
      "Запуск кода",
      "Закрытие вкладки",
      "Копирование ссылки",
      "Поиск видео, например: --video(javascript)",
      `Отправка дз из консоли, TELEGRAM-NICK - это ваш ник в <a href="https://web.telegram.org/k/" target="_blank">телеграмме</a>.`,
      `Поиск в интернете, REQUEST – это твой запрос в Google, например: --search(программирование на JavaScript)`,
      `Поиск в эмодзи, например: --emoji(hello)`,
      "Запуск эмуляторов, --run 4 запустит 4 эмулятора",
      "Информация о системе",
      "Справка"
    ];
    for (let androd in _ANDROID_TRANSLATE_EN_DICTIONARY_) {
      _OPERATING_SYSTEM_.getElem("android-console").innerHTML = _OPERATING_SYSTEM_.getElem("android-console").innerHTML.replaceAll(_ANDROID_TRANSLATE_EN_DICTIONARY_[androd], _ANDROID_TRANSLATE_RU_DICTIONARY_[androd]);
      _OPERATING_SYSTEM_.getElem("android-console").innerHTML = _OPERATING_SYSTEM_.getElem("android-console").innerHTML.replaceAll(_ANDROID_TRANSLATE_RU_DICTIONARY_[androd], _ANDROID_TRANSLATE_RU_DICTIONARY_[androd]);
    }
  }
  function _ANDROID_TRANSLATER_ADAPTER_EN_() {
    let _ANDROID_TRANSLATE_EN_DICTIONARY_ = [
      `Welcome to console`,
      `Loading...`,
      `Opening Google...`,
      `Connecting to Replit.com`,
      `Loading shell...`,
      `Loading WebBrowser...`,
      `Loading emulator...`,
      `Loading IO.Google...`,
      `Opening files...`,
      `Connecting to emulator...`,
      `✔️Success, WebBrowser conected to emulator<br>Reopening files...`,
      `Opening filestream...`,
      `Opening emulator...`,
      `Opening ServerStream...`,
      `✔️Success`,
      `Starting...`,
      `Project opened`,
      `Server started`,
      `The HTML was cleared`,
      `The CSS was cleared`,
      `The JS was cleared`,
      `History is recording...`,
      `Recording...`,
      `History was stopped...`,
      `Your nick`,
      `System`,
      `Emulator`,
      `Version emulator`,
      `Operating system`,
      `Your device`,
      `Sending homework`,
      `Clearing history`,
      `Searching in Google`,
      `Searching videos`,
      `Searching images`,
      `Searching emoji`,
      `Tab was opened`,
      `Tab was closed`,
      `command not found👀`,
      "Support center",
      `If there is a lot of text in the console, then to write a command - press Ctrl+arrow_down or click on the button "Scroll the console down"`,
      "Command",
      "Value",
      "Cleaning the console",
      "Running emulators",
      "Killing the Android system session and restarting the editor",
      "Closing all open emulators",
      "Cleaning up the html code",
      "Cleaning up the css code",
      "Cleaning up the js code",
      "Start recording code history",
      "Stop writing code history",
      "Clear history",
      "Open chat",
      "close chat",
      "Running the code",
      "Closing the tab",
      "Copy link",
      "Search for video, for example: --video(javascript)",
      `Sending homework from the console, TELEGRAM-NICK is your nick in <a href="https://web.telegram.org/k/" target="_blank">telegram.`,
      `Internet search, REQUEST is your request to Google, for example: --search (JavaScript programming)`,
      `Search in emoji, for example: --emoji(hello)`,
      "Running emulators, --run 4 will run 4 emulators",
      "Information about the system",
      "certificate"
    ];
    let _ANDROID_TRANSLATE_UA_DICTIONARY_ = [
      "Тебе вітає консоль",
      "Завантаження...",
      "Відкриття Google...",
      "Підключення до Replit.com",
      "Завантаження консолі...",
      "Завантаження WebBrowser...",
      "Завантаження емулятору...",
      "Завантаження IO.Google",
      "Відкриття файлів...",
      "Підключення до емулятору",
      "✔️WebBrowser успішно підключений до емулятору<br>Перевідкриття файлів...",
      "Відкриття файлового потоку...",
      "Запуск емулятору...",
      "Відкриття ServerStream...",
      "✔️Успішно завершено",
      "Запуск...",
      "Проект відкритий",
      "Сервер запущений",
      "HTML очищено",
      "CSSочищено",
      "JS очищено",
      "Історія записується...",
      "Запис...",
      "Історія зупинена",
      "Твій нік",
      "Система",
      "Емулятор",
      "Версія емулятору",
      "Веpсія операційної системи",
      "Твій пристрій",
      "Відправка ДЗ",
      "Очищення історії",
      "Пошук у Google",
      "Пошук відео",
      "Пошук фото",
      "Пошук емодзі",
      "Вкладка відкрита",
      "Вкладка закрита",
      "команда не знайдена👀",
      "Центр підтримки",
      "Якщо в консолі багато тексту, то щоб написати команду - натисни Ctrl+стрілка_вниз або клацни по кнопці \"Прокрутити консоль вниз\"",
      "Команда",
      "Значення",
      "Очищення консолі",
      "Запуск емуляторів",
      "Знищення сесії системи Android та перезавантаження редактору",
      "Закриття всіх відкритих емуляторів",
      "Очищення коду html",
      "Очищення коду css",
      "Очищення коду js",
      "Почати запис історії коду",
      "Зупинити запис історії коду",
      "Очистити історію",
      "Відкрити чат",
      "Закрити чат",
      "Запуск коду",
      "Закриття вкладки",
      "Копіювання посилання",
      "Пошук відео, наприклад: --video(javascript)",
      `Відправка дз з консолі, TELEGRAM-NICK - це ваш нік в <a href="https://web.telegram.org/k/" target="_blank">телеграмі`,
      `Пошук в інтернеті, REQUEST - це твій запит в Google, наприклад: --search(програмування на JavaScript)`,
      `Пошук в емодзі, наприклад: --emoji(hello)`,
      "Запуск емуляторів, --run 4 запустить 4 емулятори",
      "Інформація про систему",
      "Довідка"
    ];
    let _ANDROID_TRANSLATE_RU_DICTIONARY_ = [
      "Тебя приветствует консоль",
      "Загрузка...",
      "Открытие Google...",
      "Подключение к Replit.com",
      "Загрузка консоли...",
      "Загрузка WebBrowser...",
      "Загрузка эмулятора...",
      "Загрузка IO.Google",
      "Открытие файлов...",
      "Подключение к эмулятору",
      "✔️WebBrowser успешно подключен к эмулятору<br>Переоткрытие файлов...",
      "Открытие файлового потока...",
      "Запуск эмулятора...",
      "Открытие ServerStream...",
      "✔️Успешно завершено",
      "Запуск...",
      "Проект открыт",
      "Сервер запущен",
      "HTML очищено",
      "CSS очищено",
      "JS очищено",
      "История записывается...",
      "Запись...",
      "История остановлена",
      "Твой ник",
      "Система",
      "Емулятор",
      "Версия эмулятора",
      "Веpсия операционной системы",
      "Ваше устройство",
      "Отправка ДЗ",
      "Очистка истории",
      "Поиск в Google",
      "Поиск відео",
      "Поиск фото",
      "Поиск емодзі",
      "Вкладка открыта",
      "Вкладка закрыта",
      "команда не найдена👀",
      "Центр поддержки",
      `Если в консоли много текста, то чтобы написать команду – нажми Ctrl+стрелка_вниз или щелкни по кнопке "Прокрутить консоль вниз"`,
      "Команда",
      "Значение",
      "Очистка консоли",
      "Запуск эмуляторов",
      "Уничтожение сессии Android и перезагрузка редакторa",
      "Закрытие всех открытых эмуляторов",
      "Очистка кода html",
      "Очистка кода css",
      "Очистка кода js",
      "Начать запись истории кода",
      "Остановить запись истории кода",
      "Очистить историю",
      "Открыть чат",
      "Закрыть чат",
      "Запуск кода",
      "Закрытие вкладки",
      "Копирование ссылки",
      "Поиск видео, например: --video(javascript)",
      `Отправка дз из консоли, TELEGRAM-NICK - это ваш ник в <a href="https://web.telegram.org/k/" target="_blank">телеграмме</a>.`,
      `Поиск в интернете, REQUEST – это твой запрос в Google, например: --search(программирование на JavaScript)`,
      `Поиск в эмодзи, например: --emoji(hello)`,
      "Запуск эмуляторов, --run 4 запустит 4 эмулятора",
      "Информация о системе",
      "Справка"
    ];
    for (let androd in _ANDROID_TRANSLATE_EN_DICTIONARY_) {
      _OPERATING_SYSTEM_.getElem("android-console").innerHTML = _OPERATING_SYSTEM_.getElem("android-console").innerHTML.replaceAll(_ANDROID_TRANSLATE_UA_DICTIONARY_[androd], _ANDROID_TRANSLATE_EN_DICTIONARY_[androd]);
      _OPERATING_SYSTEM_.getElem("android-console").innerHTML = _OPERATING_SYSTEM_.getElem("android-console").innerHTML.replaceAll(_ANDROID_TRANSLATE_RU_DICTIONARY_[androd], _ANDROID_TRANSLATE_EN_DICTIONARY_[androd]);
    }
  }

  function buildMoverAndroidOperatingSystem(android_id) {
    var ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI = _OPERATING_SYSTEM_.getElem(android_id);
    ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.onmousedown = function(e) {
      if (e.target.tagName != "BUTTON" && e.target.tagName != "IMG" && e.target.tagName != "TH" && e.target.tagName != "TEXTAREA" && e.target.tagName != "ANDROID-TEXTAREA-ELEMENT") {
        ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.style.cursor = "grabbing";
        var coords = getCoords(ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;
        ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.style.position = 'fixed';
        moveAt(e);

        ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.style.zIndex = 1000; // над другими элементами

        function moveAt(e) {
          ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.style.left = e.pageX - shiftX + 'px';
          ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.style.top = e.pageY - shiftY + 'px';
        }

        _ANDROID_DOM_.onmousemove = function(e) {
          moveAt(e);
        };

        ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.onmouseup = function() {
          _ANDROID_DOM_.onmousemove = null;
          ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.onmouseup = null;
          ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.style.cursor = "grab";
        };
      }
    }

    ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.ondragstart = function() {
      return false;
    };

    function getCoords(elem) {   // кроме IE8-
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + scrollY,
        left: box.left + scrollX
      };
    }
  }
  function buildMoverAndroidOperatingSystemVideo(android_id) {
    var ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI = _OPERATING_SYSTEM_.getElem(android_id);
    ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.onmousedown = function(e) {
      if (e.target.tagName != "BUTTON" && e.target.tagName != "IMG" && e.target.tagName != "ANDROID-CLOSE") {
        ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.style.cursor = "grabbing";
        var coords = getCoords(ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;
        ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.style.position = 'fixed';
        moveAt(e);

        ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.style.zIndex = 1000; // над другими элементами

        function moveAt(e) {
          ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.style.left = e.pageX - shiftX + 'px';
          ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.style.top = e.pageY - shiftY + 'px';
        }

        _ANDROID_DOM_.onmousemove = function(e) {
          moveAt(e);
        };

        ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.onmouseup = function() {
          _ANDROID_DOM_.onmousemove = null;
          ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.onmouseup = null;
          ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.style.cursor = "grab";
        };
      }
    }

    ANDROID_VARIABLE_TEMP_CHROME_OS_IF_ONLINE_SYSTEM_IN_WIFI.parentNode.ondragstart = function() {
      return false;
    };

    function getCoords(elem) {   // кроме IE8-
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + scrollY,
        left: box.left + scrollX
      };
    }
  }

  function AndroidChatGetterMessages() {
    _OPERATING_SYSTEM_.getElem("chat-android-button button").onclick = () => {
      // if (_OPERATING_SYSTEM_.getElem("chat-android-textarea textarea").value != "") {
      //   let _MESSAGE_TEXT_ = _OPERATING_SYSTEM_.getElem("chat-android-textarea textarea").value.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
      //   let _ANDROID_USER_ROOT_ = getCookie("nick");
      //   _ANDROID_SOCKET_CONNECTOR_.emit("sendMessage", {
      //     android: _ANDROID_USER_ROOT_,
      //     text: _MESSAGE_TEXT_
      //   });
      //   _OPERATING_SYSTEM_.getElem("chat-android-textarea textarea").value = "";
      // }
      if (_OPERATING_SYSTEM_.getElem("chat-android-textarea android-textarea-element").innerHTML != "") {
        let _MESSAGE_TEXT_ = _OPERATING_SYSTEM_.getElem("chat-android-textarea android-textarea-element").innerHTML;
        let _ANDROID_USER_ROOT_ = getCookie("nick");
        _ANDROID_SOCKET_CONNECTOR_.emit("sendMessage", {
          android: _ANDROID_USER_ROOT_,
          text: _MESSAGE_TEXT_
        });
        _OPERATING_SYSTEM_.getElem("chat-android-textarea android-textarea-element").innerHTML = "";
      }
    }
    _OPERATING_SYSTEM_.getElem("#closer_android").onclick = function() {
      this.parentNode.parentNode.parentNode.remove();
      _ANDROID_SOCKET_CONNECTOR_.emit("byeUser", getCookie("nick"));
    }
  }
  //https://replit.com/@teleweb/RScript#www/js/script.js:94:58
  function chatAndroidBuilder() {
    let _CHAT_WINDOW_ANDROID_ = _OPERATING_SYSTEM_.newElem("chat-android-window");
    let _CHAT_DIV_ANDROID_ = _OPERATING_SYSTEM_.newElem("chat-android");
    let _CHAT_MENU_ANDROID_ = _OPERATING_SYSTEM_.newElem("chat-android-menu");
    let _CHAT_MENU_TEXTAREA_ANDROID_ = _OPERATING_SYSTEM_.newElem("chat-android-textarea");
    let _CHAT_MENU_BUTTON_ANDROID_ = _OPERATING_SYSTEM_.newElem("chat-android-button");
    let _CHAT_MENU_CLOSE_ANDROID_ = _OPERATING_SYSTEM_.newElem("chat-android-button-close");
    let _CHAT_MENU_TYPING_ANDROID_ = _OPERATING_SYSTEM_.newElem("chat-android-typing");
    _CHAT_MENU_TYPING_ANDROID_.className = "chat_typing";
    _CHAT_MENU_TEXTAREA_ANDROID_.className = "chat_textarea_android";
    _CHAT_MENU_BUTTON_ANDROID_.className = "android-button-sender";
    _CHAT_MENU_CLOSE_ANDROID_.className = "android-button-close";
    _CHAT_MENU_TYPING_ANDROID_.innerHTML = `<user></user>`;
    _CHAT_MENU_TEXTAREA_ANDROID_.innerHTML = `<android-textarea-element oninput="if(this.innerHTML.trim()==='<br>')this.innerHTML=''" contenteditable="true" id="android_text" placeholder="Message..."></android-textarea-element>`;
    _CHAT_MENU_BUTTON_ANDROID_.innerHTML = `<button id="ssender_android">SEND</button>`;
    _CHAT_MENU_CLOSE_ANDROID_.innerHTML = `<button id="closer_android">CLOSE</button>`;
    _CHAT_WINDOW_ANDROID_.className = "chat_android";
    _CHAT_DIV_ANDROID_.className = "_CHAT_DIV_ANDROID_";
    _CHAT_MENU_ANDROID_.className = "_CHAT_MENU_ANDROID_";
    _CHAT_DIV_ANDROID_.id = "chat_id_Chrome";
    _OPERATING_SYSTEM_.getElem("body").appendChild(_CHAT_DIV_ANDROID_);
    _CHAT_DIV_ANDROID_.appendChild(_CHAT_WINDOW_ANDROID_);
    _CHAT_DIV_ANDROID_.appendChild(_CHAT_MENU_ANDROID_);
    _CHAT_MENU_ANDROID_.appendChild(_CHAT_MENU_TEXTAREA_ANDROID_);
    _CHAT_MENU_ANDROID_.appendChild(_CHAT_MENU_BUTTON_ANDROID_);
    _CHAT_MENU_ANDROID_.appendChild(_CHAT_MENU_CLOSE_ANDROID_);
    _CHAT_DIV_ANDROID_.prepend(_CHAT_MENU_TYPING_ANDROID_);
    buildMoverAndroidOperatingSystem(".chat_android");
    AndroidChatGetterMessages();
    AndroidStartTyping();
  }

  function clickKey() {
    var evt = new KeyboardEvent('keydown', { 'keyCode': 72, 'which': 72 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 73, 'which': 73 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 83, 'which': 83 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 84, 'which': 84 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 79, 'which': 79 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 82, 'which': 82 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 89, 'which': 89 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 32, 'which': 32 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 67, 'which': 67 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 76, 'which': 76 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 69, 'which': 69 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 65, 'which': 65 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 82, 'which': 82 });
    _ANDROID_DOM_.dispatchEvent(evt);
    evt = new KeyboardEvent('keydown', { 'keyCode': 13, 'which': 13 });
    _ANDROID_DOM_.dispatchEvent(evt);
  }
  function load_editor() {
    let bb = _OPERATING_SYSTEM_.newElem("div");
    bb.setAttribute("contenteditable", "false");
    bb.innerHTML = `[][][][][][][][][][]0%`;
    _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
    setTimeout(() => {
      bb.innerHTML = "█[][][][][][][][][]10%";
      _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
      setTimeout(() => {
        bb.innerHTML = "██[][][][][][][][]20%";
        _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
        setTimeout(() => {
          bb.innerHTML = "███[][][][][][][]30%";
          _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
          setTimeout(() => {
            bb.innerHTML = "████[][][][][][]40%";
            _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
            setTimeout(() => {
              bb.innerHTML = "█████[][][][][]50%";
              _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
              setTimeout(() => {
                bb.innerHTML = "██████[][][][]60%";
                _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                setTimeout(() => {
                  bb.innerHTML = "███████[][][]70%";
                  _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                  setTimeout(() => {
                    bb.innerHTML = "████████[][]80%";
                    _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                    setTimeout(() => {
                      bb.innerHTML = "█████████[]90%";
                      _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                      setTimeout(() => {
                        bb.innerHTML = "✔️ ██████████100% loaded 🎄";
                        _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                      }, 100);
                    }, 100);
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }
  load();
  function load() {
    let aa = _OPERATING_SYSTEM_.newElem("div");
    aa.setAttribute("contenteditable", "false");
    aa.innerHTML = `Loading...`;
    _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
    let bb = _OPERATING_SYSTEM_.newElem("div");
    bb.setAttribute("contenteditable", "false");
    bb.innerHTML = `█▒▒▒▒▒▒▒▒▒ 10%`;
    _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
    setTimeout(() => {
      aa.innerHTML = `Opening Google...`;
      _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
      setTimeout(() => {
        aa.innerHTML = `Connecting to Replit.com`;
        bb.innerHTML = `██▒▒▒▒▒▒▒▒ 20%`;
        _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
        _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
        setTimeout(() => {
          bb.innerHTML = `███▒▒▒▒▒▒▒ 30%`;
          _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
          aa.innerHTML = `Loading shell...`;
          _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
          setTimeout(() => {
            bb.innerHTML = `████▒▒▒▒▒▒ 40%`;
            _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
            aa.innerHTML = `Loading WebBrowser...`;
            _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
            setTimeout(() => {
              bb.innerHTML = `█████▒▒▒▒▒ 50%`;
              _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
              aa.innerHTML = `Loading emulator...`;
              _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
              setTimeout(() => {
                bb.innerHTML = `██████▒▒▒▒ 60%`;
                _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                aa.innerHTML = `Loading IO.Google...`;
                _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                setTimeout(() => {
                  bb.innerHTML = `███████▒▒▒ 70%`;
                  _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                  aa.innerHTML = `Opening files...`;
                  _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                  setTimeout(() => {
                    bb.innerHTML = `████████▒▒ 80%`;
                    _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                    aa.innerHTML = `Connecting to emulator...`;
                    _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                    _OPERATING_SYSTEM_.getElem(".cl2").scrollTop = 50;
                    setTimeout(() => {
                      bb.innerHTML = `█████████▒ 90%`;
                      _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                      aa.innerHTML = `✔️Success, WebBrowser conected to emulator<br>Reopening files...`;
                      _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                      _OPERATING_SYSTEM_.getElem(".cl2").scrollTop = 80;
                      setTimeout(() => {
                        bb.innerHTML = `✔️ ██████████ 100% 🎄`;
                        _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                        aa.innerHTML = `😎Welcome to console, щоб викликати довідку введи --help<br>>_`;
                        _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                        let br = _OPERATING_SYSTEM_.newElem("br");
                        _OPERATING_SYSTEM_.getElem('android-console').appendChild(br);
                        _OPERATING_SYSTEM_.getElem(".cl2").scrollTop = 100;
                        setTimeout(() => {
                          _ANDROID_DOM_.title = "◔";
                          setTimeout(() => {
                            _ANDROID_DOM_.title = "◑";
                            setTimeout(() => {
                              _ANDROID_DOM_.title = "◕";
                              setTimeout(() => {
                                _ANDROID_DOM_.title = "⬤";
                                setTimeout(() => {
                                  _ANDROID_DOM_.title = "█[][][][][][][][][]10%";
                                  setTimeout(() => {
                                    _ANDROID_DOM_.title = "██[][][][][][][][]20%";
                                    setTimeout(() => {
                                      _ANDROID_DOM_.title = "███[][][][][][][]30%";
                                      setTimeout(() => {
                                        _ANDROID_DOM_.title = "████[][][][][][]40%";
                                        setTimeout(() => {
                                          _ANDROID_DOM_.title = "█████[][][][][]50%";
                                          setTimeout(() => {
                                            _ANDROID_DOM_.title = "██████[][][][]60%";
                                            setTimeout(() => {
                                              _ANDROID_DOM_.title = "███████[][][]70%";
                                              setTimeout(() => {
                                                _ANDROID_DOM_.title = "████████[][]80%";
                                                setTimeout(() => {
                                                  _ANDROID_DOM_.title = "█████████[]90%";
                                                  setTimeout(() => {
                                                    _ANDROID_DOM_.title = "██████████100%";
                                                    setTimeout(() => {
                                                      _ANDROID_DOM_.title = "RScript 🎄";
                                                      _ANDROID_DOM_.querySelector("android-block").style.display = "none";
                                                      setTimeout(() => {
                                                        loadEmulator();
                                                        loadEmulator = () => { };
                                                        setTimeout(() => {
                                                          console.log(`%cError catcher loading, 0%`, `color:#d64545; font-size:20px;background:black;padding:10px;border-radius:5px;`)
                                                          setTimeout(() => {
                                                            console.log(`%cError catcher loading, 30%`, `color:#d47444; font-size:20px;background:black;padding:10px;border-radius:5px;`)
                                                            setTimeout(() => {
                                                              console.log(`%cError catcher loading, 50%`, `color:#d4b444; font-size:20px;background:black;padding:10px;border-radius:5px;`)
                                                              setTimeout(() => {
                                                                console.log(`%cError catcher loading, 70%`, `color:#aad444; font-size:20px;background:black;padding:10px;border-radius:5px;`)
                                                                setTimeout(() => {
                                                                  console.log(`%cError catcher loading, 100%`, `color:#6ad444; font-size:20px;background:black;padding:10px;border-radius:5px;`)
                                                                  ErrorCatcher();
                                                                    
                                                                  setTimeout(() => {
                                                                    document.querySelector("#__run_app").click()
                                                                  }, 7000);
                                                                }, 500);
                                                              }, 500)
                                                            }, 500);
                                                          }, 500);
                                                        }, 500);
                                                      }, 4000);
                                                      _ANDROID_DOM_.body.style.overflow = "scroll";
                                                      load_editor();
                                                    }, 400);
                                                  }, 100);
                                                }, 100);
                                              }, 100);
                                            }, 100);
                                          }, 100);
                                        }, 100);
                                      }, 100);
                                    }, 100);
                                  }, 100);
                                }, 100);
                              }, 200);
                            }, 200);
                          }, 200);
                        }, 200);
                        //loading();
                      }, 3000);
                    }, 1000);
                  }, 100);
                }, 200);
              }, 100);
            }, 100);
          }, 60);
        }, 60);
      }, 60);
    }, 300);
  }
  function loadk() {
    let aa = _OPERATING_SYSTEM_.newElem("div");
    aa.setAttribute("contenteditable", "false");
    aa.innerHTML = `Loading...`;
    _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
    let bb = _OPERATING_SYSTEM_.newElem("div");
    bb.setAttribute("contenteditable", "false");
    bb.innerHTML = `█▒▒▒▒▒▒▒▒▒ 10%`;
    _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
    setTimeout(() => {
      aa.innerHTML = `Opening Google...`;
      _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
      setTimeout(() => {
        aa.innerHTML = `Connecting to Replit.com`;
        bb.innerHTML = `██▒▒▒▒▒▒▒▒ 20%`;
        _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
        _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
        setTimeout(() => {
          bb.innerHTML = `███▒▒▒▒▒▒▒ 30%`;
          _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
          aa.innerHTML = `Loading project...`;
          _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
          setTimeout(() => {
            bb.innerHTML = `████▒▒▒▒▒▒ 40%`;
            _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
            aa.innerHTML = `Loading WebBuilder...`;
            _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
            setTimeout(() => {
              bb.innerHTML = `█████▒▒▒▒▒ 50%`;
              _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
              aa.innerHTML = `Building...`;
              _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
              setTimeout(() => {
                bb.innerHTML = `██████▒▒▒▒ 60%`;
                _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                aa.innerHTML = `Building...`;
                _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                setTimeout(() => {
                  bb.innerHTML = `███████▒▒▒ 70%`;
                  _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                  aa.innerHTML = `Building...`;
                  _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                  setTimeout(() => {
                    bb.innerHTML = `████████▒▒ 80%`;
                    _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                    aa.innerHTML = `Building...`;
                    _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                    _OPERATING_SYSTEM_.getElem(".cl2").scrollTop = 50;
                    setTimeout(() => {
                      bb.innerHTML = `█████████▒ 90%`;
                      _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                      aa.innerHTML = `✔️Success, Project assembled<br>Reopening files...`;
                      _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                      _OPERATING_SYSTEM_.getElem(".cl2").scrollTop = 80;
                      setTimeout(() => {
                        bb.innerHTML = `✔️ ██████████ 100% 🎄`;
                        _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                        aa.innerHTML = `😎Welcome to console, щоб викликати довідку введи --help<br>>_`;
                        _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                        let br = _OPERATING_SYSTEM_.newElem("br");
                        _OPERATING_SYSTEM_.getElem('android-console').appendChild(br);
                        _OPERATING_SYSTEM_.getElem(".cl2").scrollTop = 100;
                        //loading();
                      }, 3000);
                    }, 1000);
                  }, 100);
                }, 200);
              }, 100);
            }, 100);
          }, 60);
        }, 60);
      }, 60);
    }, 300);
  }

  function looad() {
    let aa = _OPERATING_SYSTEM_.newElem("div");
    aa.setAttribute("contenteditable", "false");
    aa.innerHTML = `Loading...`;
    _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
    let bb = _OPERATING_SYSTEM_.newElem("div");
    bb.setAttribute("contenteditable", "false");
    bb.innerHTML = `█▒▒▒▒▒▒▒▒▒ 10%`;
    _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
    setTimeout(() => {
      aa.innerHTML = `Opening Google...`;
      _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
      setTimeout(() => {
        aa.innerHTML = `Connecting to Replit.com`;
        bb.innerHTML = `██▒▒▒▒▒▒▒▒ 20%`;
        _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
        _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
        setTimeout(() => {
          bb.innerHTML = `███▒▒▒▒▒▒▒ 30%`;
          _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
          aa.innerHTML = `Loading shell...`;
          _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
          setTimeout(() => {
            bb.innerHTML = `████▒▒▒▒▒▒ 40%`;
            _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
            aa.innerHTML = `Loading WebBrowser...`;
            _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
            setTimeout(() => {
              bb.innerHTML = `█████▒▒▒▒▒ 50%`;
              _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
              aa.innerHTML = `Loading emulator...`;
              _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
              setTimeout(() => {
                bb.innerHTML = `██████▒▒▒▒ 60%`;
                _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                aa.innerHTML = `Loading IO.Google...`;
                _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                setTimeout(() => {
                  bb.innerHTML = `███████▒▒▒ 70%`;
                  _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                  aa.innerHTML = `Opening files...`;
                  _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                  setTimeout(() => {
                    bb.innerHTML = `████████▒▒ 80%`;
                    _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                    aa.innerHTML = `Connecting to emulator...`;
                    _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                    setTimeout(() => {
                      bb.innerHTML = `█████████▒ 90%`;
                      _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                      aa.innerHTML = `✔️Success, WebBrowser conected to emulator<br>Reopening files...`;
                      _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                      setTimeout(() => {
                        bb.innerHTML = `✔️ ██████████ 100% 🎄`;
                        _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                        aa.innerHTML = `😎Welcome to console, щоб викликати довідку введи --help<br>>_`;
                        _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                        let br = _OPERATING_SYSTEM_.newElem("br");
                        _OPERATING_SYSTEM_.getElem('android-console').appendChild(br);
                        //loading();
                        setTimeout(() => {
                          load();
                          load_editor();
                        }, 200);
                      }, 300);
                    }, 100);
                  }, 10);
                }, 20);
              }, 10);
            }, 10);
          }, 60);
        }, 60);
      }, 60);
    }, 50);
  }
  loading();
  load_editor();
  function loading() {
    let bb = _OPERATING_SYSTEM_.newElem("div");
    bb.setAttribute("contenteditable", "false");
    bb.innerHTML = `▁ Loading files...<br>🕛█▒▒▒▒▒▒▒▒▒ 10%`;
    _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
    setTimeout(() => {
      setTimeout(() => {
        bb.innerHTML = `▂ Loading files...<br>🕐██▒▒▒▒▒▒▒▒ 20%`;
        _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
        setTimeout(() => {
          bb.innerHTML = `▃ Loading emulator...<br>🕑███▒▒▒▒▒▒▒ 30%`;
          _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
          setTimeout(() => {
            bb.innerHTML = `▄ Loading emulator...<br>🕒████▒▒▒▒▒▒ 40%`;
            _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
            setTimeout(() => {
              bb.innerHTML = `▅ Loading emulator...<br>🕓█████▒▒▒▒▒ 50%`;
              _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
              setTimeout(() => {
                bb.innerHTML = `▆ Loading emulator...<br>🕠██████▒▒▒▒ 60%`;
                _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                setTimeout(() => {
                  bb.innerHTML = `▇ Loading emulator...<br>🕖███████▒▒▒ 70%`;
                  _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                  setTimeout(() => {
                    bb.innerHTML = `▉ Майже все готово<br>🕗████████▒▒ 80%`;
                    _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                    setTimeout(() => {
                      bb.innerHTML = `▋ Майже все готово<br>🕘█████████▒ 90%`;
                      _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                      setTimeout(() => {
                        bb.innerHTML = `▇ Майже все готово<br>🕙████████▒▒ 80%`;
                        _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                        setTimeout(() => {
                          bb.innerHTML = `▆ Майже все готово<br>🕙███████▒▒▒ 70%`;
                          _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                          setTimeout(() => {
                            bb.innerHTML = `▉ Loading emulator...<br>🕚██████▒▒▒▒ 60%`;
                            _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                            setTimeout(() => {
                              bb.innerHTML = `▃ Майже все готово<br>████████▒▒ 80%`;
                              setTimeout(() => {
                                bb.innerHTML = `▇ Майже все готово<br>█████████▒ 90%`;
                                _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                                setTimeout(() => {
                                  bb.innerHTML = `▆ Майже все готово<br>█████████▒ 90%`;
                                  _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                                  setTimeout(() => {
                                    bb.innerHTML = `✔️██████████ 100% 🎄`;
                                    _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
                                    let br = _OPERATING_SYSTEM_.newElem("br");
                                    _OPERATING_SYSTEM_.getElem('android-console').appendChild(br);
                                  }, 3000);
                                }, 2000);
                              }, 3000);
                            }, 3000);
                          }, 2000);
                        }, 3000);
                      }, 3000);
                    }, 3000);
                  }, 2000);
                }, 2000);
              }, 1000);
            }, 1000);
          }, 600);
        }, 1000);
      }, 2000);
    }, 300);
  }

  _ANDROID_SOCKET_CONNECTOR_.emit("getUsers");
  _ANDROID_SOCKET_CONNECTOR_.emit("addPlayer");
  _ANDROID_SOCKET_CONNECTOR_.on("addPlayer", (data) => {
    console.log(data)
  });
  var editor = CodeMirror.fromTextArea(_ANDROID_DOM_.getElementById('js'), {
    lineNumbers: true,
    mode: "javascript",
    theme: 'monokai',
    lineWrapping: true,
  });
  var editorCss = CodeMirror.fromTextArea(_ANDROID_DOM_.getElementById('css'), {
    lineNumbers: true,
    mode: "css",
    theme: 'monokai',
    lineWrapping: true,
  });
  var editorHtml = _ANDROID_DOM_.getElementById('html');
  let jss = _OPERATING_SYSTEM_.getElem("#Cjs");
  let tmlh = _OPERATING_SYSTEM_.getElem("#Chtml");
  let cscs = _OPERATING_SYSTEM_.getElem("#Ccss");
  editor.on("change", (data) => {
    jss.value = data.doc.getValue();
    if (sessionStorage.getItem("repl-0-project-id")) {
      _ANDROID_SOCKET_CONNECTOR_.emit("update-repl", {
        user: getCookie("nick"),
        file: data.doc.getValue(),
        project: sessionStorage.getItem("repl-0-project-id"),
        extension: "js",
        name: "script"
      });
    }
    if (devToolsElectron != null) {
      var contentJS = editor.getValue();
      var contentCSS = editorCss.getValue();
      var contentHTML = editorHtml.innerText;
      updateElectron(contentHTML, contentCSS, contentJS);
    }
  });
  editorCss.on("change", (data) => {
    cscs.value = data.doc.getValue();
    if (sessionStorage.getItem("repl-0-project-id")) {
      _ANDROID_SOCKET_CONNECTOR_.emit("update-repl", {
        user: getCookie("nick"),
        file: data.doc.getValue(),
        project: sessionStorage.getItem("repl-0-project-id"),
        extension: "css",
        name: "style"
      });
    }
    if (devToolsElectron != null) {
      var contentJS = editor.getValue();
      var contentCSS = editorCss.getValue();
      var contentHTML = editorHtml.innerText;
      updateElectron(contentHTML, contentCSS, contentJS);
    }
    // if (tab != null) {
    //   updateElectronTab(tab)
    // }
  });
  //editor.save()
  // editorHtml.innerText = (`<!DOCTYPE html>
  // <html>

  // <head>
  //   <meta charset="utf-8">
  //   <meta name="viewport" content="width=device-width">
  //   <title>replit</title>
  //   <!--SYSTEM-CSS-NOT-DELETE-->
  // </head>

  // <body>
  //   Hello world
  //   <!--SYSTEM-JS-NOT-DELETE-->
  // </body>

  // </html>`)
  // editorCss.on("change", (editor) => {
  //     const text = editor.doc.getValue()
  //     localStorage.setItem("css", text);
  //   });
  //jss.value == localStorage.getItem("jss") && tmlh.value == localStorage.getItem("ths") && cscs.value == localStorage.getItem("css")
  function historyUpdate(hisH, hisM, hisS, hisY, hisMM, hisD, hisDt) {
    //let historyState = state;
    if (jss.value == localStorage.getItem("jss") && tmlh.value == localStorage.getItem("ths") && cscs.value == localStorage.getItem("css")) {

    } else {
      if (getCookie("nick")) {
        const text = jss.value;
        localStorage.setItem("jss", text);
        const textCss = cscs.value
        localStorage.setItem("css", textCss);
        const textHtml = document.querySelector("#html").innerText;
        localStorage.setItem("ths", textHtml);
  
        let day;
        switch (hisD) {
          case 1:
            day = "Понеділок";
            break;
          case 2:
            day = "Вівторок";
            break;
          case 3:
            day = "Середа";
            break;
          case 4:
            day = "Четвер";
            break;
          case 5:
            day = "П'ятниця";
            break;
          case 6:
            day = "Субота";
            break;
          case 0:
            day = "Неділя";
            break;
        }
        let time = `${hisDt}-${hisMM}-${hisY} ${day} ${hisH}:${hisM}:${hisS}`;
        _ANDROID_SOCKET_CONNECTOR_.emit("historyUpdate", {
          historyTime: time,
          codeHtml: textHtml,
          codeCss: textCss,
          codeJS: text,
          user: getCookie("nick")
        });
      }
    }
  }
  var intervalId = 1;
  function replitHistoryUpdate() {
    let historyTime = new Date;
    let historyHour = historyTime.getHours();
    let historyMinute = historyTime.getMinutes();
    let historySecond = historyTime.getSeconds();
    let historyYear = historyTime.getFullYear();
    let historyMonths = historyTime.getMonth() + 1;
    let historyDay = historyTime.getDay();
    let historyDate = historyTime.getDate();
    historyUpdate(historyHour, historyMinute, historySecond, historyYear, historyMonths, historyDay, historyDate);
  }
  function switchRecordHistory(state) {
    if (state == false && intervalId > 0) {
      clearInterval(intervalId);
      intervalId = 0;
    } else {
      intervalId = setInterval(replitHistoryUpdate, 5000);
    }
  }
  switchRecordHistory(false);
  //--------------------BETA----------------
  _OPERATING_SYSTEM_.getElem("#getCode").onclick = () => {
    let user = getCookie("nick");
    _ANDROID_SOCKET_CONNECTOR_.emit("requestHistory", {
      user: user
    });
  }
  function comparator(arrayCurrentCode, arrayHistoryCode) {
    let currentC = arrayCurrentCode;
    let historyC = arrayHistoryCode;
    for (let code = 0; code < historyC.length; code++) {
      if (historyC[code] != currentC[code]) {
        let newCode = `@open_android-comparator${historyC[code]}@close_android-comparator`;
        historyC[code] = newCode;
      }
    }
    //console.log(historyC);
    return historyC;
  }
  _ANDROID_SOCKET_CONNECTOR_.on("getHistory", (data) => {
    if (data.history.length != 0) {
      let history = data.history;
      let listHistory = _OPERATING_SYSTEM_.newElem("fieldset");
      listHistory.className = "history";
      listHistory.innerHTML = `<legend>Історія коду</legend><android-text-info>Всього записів: <android-number>${data.score}</android-number></android-text-info><button id="cll"><img class="edl" src="./js/imgs/delete.png"></button> <button id="clearH"><img class="clearHis" src="./js/imgs/clear1.png"></button>`;
      bllp.style.display = "block";
      _ANDROID_DOM_.body.appendChild(listHistory);
      _OPERATING_SYSTEM_.getElem("#cll").onclick = function() {
        this.parentNode.remove();
        bllp.style.display = "none";
      }
      _OPERATING_SYSTEM_.getElem("#clearH").onclick = function() {
        _ANDROID_SOCKET_CONNECTOR_.emit("clearHistory", {
          user: getCookie("nick")
        });
        bllp.style.display = "none";
        this.parentNode.remove();
      }
      let y = _OPERATING_SYSTEM_.newElem("div");
      y.id = "list";
      let keys = [];
      for (let e of history) {
        for (let key of Object.keys(e)) {
          keys.push(key);
        }
      }
      listHistory.appendChild(y);
      function getNum() {
        return Date.now() + `${Math.floor(Math.random() * 100) + 1}#${Math.floor(Math.random() * 1000) + 3}`;
      }
      for (let item = 0; item < history.length; item++) {
        let arrHhtml = history[item][keys[item]].html.split("\n");
        let arrHcss = history[item][keys[item]].css.split("\n");
        let arrHjs = history[item][keys[item]].js.split("\n");
        let arrChtml = tmlh.value.split("\n");
        let arrCcss = cscs.value.split("\n");
        let arrCjs = jss.value.split("\n");
        let markHtml = comparator(arrChtml, arrHhtml);
        let markCss = comparator(arrCcss, arrHcss);
        let markJs = comparator(arrCjs, arrHjs);
        for (let c = 0; c < markHtml.length; c++) {
          markHtml[c] = markHtml[c].replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("@open_android-comparator", "<android-comparator>").replaceAll("@close_android-comparator", "</android-comparator>");
        }
        for (let c = 0; c < markCss.length; c++) {
          markCss[c] = markCss[c].replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("@open_android-comparator", "<android-comparator>").replaceAll("@close_android-comparator", "</android-comparator>");
        }
        for (let c = 0; c < markJs.length; c++) {
          markJs[c] = markJs[c].replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("@open_android-comparator", "<android-comparator>").replaceAll("@close_android-comparator", "</android-comparator>");
        }
        setTimeout(() => {
          let y1 = getNum() + "1";
          let y2 = getNum() + "2";
          let y3 = getNum() + "3";
          let u = _OPERATING_SYSTEM_.newElem("p");
          u.innerHTML = `<button id="delete" history-time="${keys[item]}" class="ju${Date.now()}-${Math.floor(Math.random() * 100) + 4}"><img class="clearHis" src="./js/imgs/trash.png"></button><button id="restore" class="hu${Date.now()}-${Math.floor(Math.random() * 100) + 2}"><img class="clearHis" id="restoring" src="./js/imgs/cloud.png" title="Відновити"><!--Відновити &#8942;--></button><br>
        <details>
          <summary>${keys[item]}</summary>
        <div class="wrapper">
    <div class="tabs">
      <div class="tab">
        <input type="radio" name="css-tabs" id="tab-${y1}" checked class="tab-switch">
        <label for="tab-${y1}" class="tab-label"><img class="tab_html" src="./js/imgs/html-5.png"></label>
        <div class="tab-content" id="htmll">
        ${markHtml.join("<br>")}
        </div>
      </div>
      <div class="tab">
        <input type="radio" name="css-tabs" id="tab-${y2}" class="tab-switch">
        <label for="tab-${y2}" class="tab-label"><img class="tab_html" src="./js/imgs/css-3.png"></label>
        <div class="tab-content" id="css">
        ${markCss.join("<br>")}
        </div>
      </div>
      <div class="tab">
        <input type="radio" name="css-tabs" id="tab-${y3}" class="tab-switch">
        <label for="tab-${y3}" class="tab-label"><img class="tab_html" src="./js/imgs/js-file.png"></label>
        <div class="tab-content" id="js">
        ${markJs.join("<br>")}
        </div>
      </div>
    </div>
  </div>
  </details>
        `;
          //alert(_OPERATING_SYSTEM_.getElem("#restore ~ .wrapper .tabs #html").innerHTML);
          u.className = "itemOfHistory";
          y.appendChild(u);

        }, 10);
      }
      _OPERATING_SYSTEM_.getElem("#list").onclick = (eb) => {
        let t = eb.target;
        if (t.id == "restoring") {
          let cls = t.parentNode.className;
          editorHtml.innerText = (_OPERATING_SYSTEM_.getElem(`.${cls} ~ details .wrapper .tabs #htmll`).innerHTML.replace(/\&lt\;/g, "<").replace(/\&gt\;/g, ">").replace(/\<android\-comparator\>/g, "").replace(/\<\/android\-comparator\>/g, "").replace(/\<br\>/g, ""));
          setTimeout(() => {
            let y = editorHtml.innerText;
            editorHtml.innerText = (String(y).replaceAll("    ", "\n"));
            let yy = editorHtml.innerText;
            editorHtml.innerText = (String(yy).replaceAll(`


`, "\n"));
            highLite(_OPERATING_SYSTEM_.getElem("#html"));
          }, 500);
          editorCss.setValue(_OPERATING_SYSTEM_.getElem(`.${cls} ~ details .wrapper .tabs #css`).innerHTML.replace(/\<android\-comparator\>/g, "").replace(/\<\/android\-comparator\>/g, "").replace(/\<br\>/g, ""));
          _ANDROID_SOCKET_CONNECTOR_.emit("getBeautifyCSS", _OPERATING_SYSTEM_.getElem(`.${cls} ~ details .wrapper .tabs #css`).innerText.replace(/\<android\-comparator\>/g, "").replace(/\<\/android\-comparator\>/g, "").replace(/\<br\>/g, ""))


          //           setTimeout(() => {
          //             let y = editorCss.getValue();
          //             console.log(y)
          //             editorCss.setValue(y.replaceAll("    ", "\n"));
          //             let yy = editorCss.getValue();
          //             console.log(yy)
          //             editorCss.setValue(yy.replaceAll(`


          // `, "\n"));
          //             let yyy = editorCss.getValue();
          //             editorCss.setValue(yyy.replaceAll("	", "\n\t"));
          //             let aaa = editorCss.getValue();
          //             editorCss.setValue(aaa.replaceAll("	", "\n\t"));
          //           }, 500);
          _ANDROID_SOCKET_CONNECTOR_.emit("getBeautifyJS", _OPERATING_SYSTEM_.getElem(`.${cls} ~ details .wrapper .tabs #js`).innerText.replace(/\<android\-comparator\>/g, "").replace(/\<\/android\-comparator\>/g, "").replace(/\<br\>/g, ""))
          //           setTimeout(() => {
          //             let y = editor.getValue();
          //             editor.setValue(y.replaceAll("    ", "\n"));
          //             let yy = editor.getValue();
          //             editor.setValue(yy.replaceAll(`


          // `, "\n"));
          //           }, 500);
        } else if (t.className == "clearHis" && t.parentNode.hasAttribute("history-time")) {
          let timeOfHistoryForDelete = t.parentNode.getAttribute("history-time");
          let resultConfirm = confirm(`😬Ти точно хочеш видалити шматок історії за ${timeOfHistoryForDelete}, видалений шматок не повернеться?`);
          if (resultConfirm == true) {
            _ANDROID_SOCKET_CONNECTOR_.emit("deletePartHistory", {
              user: getCookie("nick"),
              time: timeOfHistoryForDelete
            });
            sessionStorage.removeItem("repl-0-project-id");
            clearEditor();
          } else {
            alert("Ххухуух.. 😄я вже думав ти зараз видалиш це, не лякай мене так");
          }
        }
      }
    } else {
      let listHistory = _OPERATING_SYSTEM_.newElem("fieldset");
      listHistory.className = "history";
      listHistory.innerHTML = `<legend>History of code</legend><button id="cll" style="border: 3px hsl(238deg 49% 58% / 78%) solid;
  background: hsl(235deg 34% 49% / 0%);
  margin-left: 20px;
  margin: auto;
  display: block;
  color: white;
  font-size: 20px;
  float: none;">Закрити</button><br>
      <h1>Тут ще нічого нема, почни писати код<br>🐵</h1>
      `;
      _ANDROID_DOM_.body.appendChild(listHistory);
      _OPERATING_SYSTEM_.getElem("#cll").onclick = function() {
        this.parentNode.remove();
      }
    }
  });

  editor.setValue(`let renderer,
        scene,
        camera,
        sphereBg,
        nucleus,
        stars,
        controls,
        container = document.getElementById("canvas_container"),
        timeout_Debounce,
        noise = new SimplexNoise(),
        cameraSpeed = 0,
        blobScale = 3;


      init();
      animate();


      function init() {
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000)
        camera.position.set(0, 0, 230);

        const directionalLight = new THREE.DirectionalLight("#fff", 2);
        directionalLight.position.set(0, 50, -20);
        scene.add(directionalLight);

        let ambientLight = new THREE.AmbientLight("#ffffff", 1);
        ambientLight.position.set(0, 20, 20);
        scene.add(ambientLight);

        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        //OrbitControl
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true;
        controls.autoRotateSpeed = 4;
        controls.maxDistance = 350;
        controls.minDistance = 150;
        controls.enablePan = false;

        const loader = new THREE.TextureLoader();
        const textureSphereBg = loader.load('https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg');
        const texturenucleus = loader.load('https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg');
        const textureStar = loader.load("https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png");
        const texture1 = loader.load("https://i.ibb.co/F8by6wW/p2-b3gnym.png");
        const texture2 = loader.load("https://i.ibb.co/yYS2yx5/p3-ttfn70.png");
        const texture4 = loader.load("https://i.ibb.co/yWfKkHh/p4-avirap.png");


        /*  Nucleus  */
        texturenucleus.anisotropy = 16;
        let icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10);
        let lambertMaterial = new THREE.MeshPhongMaterial({ map: texturenucleus });
        nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
        scene.add(nucleus);


        /*    Sphere  Background   */
        textureSphereBg.anisotropy = 16;
        let geometrySphereBg = new THREE.SphereBufferGeometry(150, 40, 40);
        let materialSphereBg = new THREE.MeshBasicMaterial({
          side: THREE.BackSide,
          map: textureSphereBg,
        });
        sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
        scene.add(sphereBg);


        /*    Moving Stars   */
        let starsGeometry = new THREE.Geometry();

        for (let i = 0; i < 50; i++) {
          let particleStar = randomPointSphere(150);

          particleStar.velocity = THREE.MathUtils.randInt(50, 200);

          particleStar.startX = particleStar.x;
          particleStar.startY = particleStar.y;
          particleStar.startZ = particleStar.z;

          starsGeometry.vertices.push(particleStar);
        }
        let starsMaterial = new THREE.PointsMaterial({
          size: 5,
          color: "#ffffff",
          transparent: true,
          opacity: 0.8,
          map: textureStar,
          blending: THREE.AdditiveBlending,
        });
        starsMaterial.depthWrite = false;
        stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);


        /*    Fixed Stars   */
        function createStars(texture, size, total) {
          let pointGeometry = new THREE.Geometry();
          let pointMaterial = new THREE.PointsMaterial({
            size: size,
            map: texture,
            blending: THREE.AdditiveBlending,
          });

          for (let i = 0; i < total; i++) {
            let radius = THREE.MathUtils.randInt(149, 70);
            let particles = randomPointSphere(radius);
            pointGeometry.vertices.push(particles);
          }
          return new THREE.Points(pointGeometry, pointMaterial);
        }
        scene.add(createStars(texture1, 15, 20));
        scene.add(createStars(texture2, 5, 5));
        scene.add(createStars(texture4, 7, 5));


        function randomPointSphere(radius) {
          let theta = 2 * Math.PI * Math.random();
          let phi = Math.acos(2 * Math.random() - 1);
          let dx = 0 + (radius * Math.sin(phi) * Math.cos(theta));
          let dy = 0 + (radius * Math.sin(phi) * Math.sin(theta));
          let dz = 0 + (radius * Math.cos(phi));
          return new THREE.Vector3(dx, dy, dz);
        }
      }


      function animate() {

        //Stars  Animation
        stars.geometry.vertices.forEach(function (v) {
          v.x += (0 - v.x) / v.velocity;
          v.y += (0 - v.y) / v.velocity;
          v.z += (0 - v.z) / v.velocity;

          v.velocity -= 0.3;

          if (v.x <= 5 && v.x >= -5 && v.z <= 5 && v.z >= -5) {
            v.x = v.startX;
            v.y = v.startY;
            v.z = v.startZ;
            v.velocity = THREE.MathUtils.randInt(50, 300);
          }
        });


        //Nucleus Animation
        nucleus.geometry.vertices.forEach(function (v) {
          let time = Date.now();
          v.normalize();
          let distance = nucleus.geometry.parameters.radius + noise.noise3D(
            v.x + time * 0.0005,
            v.y + time * 0.0003,
            v.z + time * 0.0008
          ) * blobScale;
          v.multiplyScalar(distance);
        })
        nucleus.geometry.verticesNeedUpdate = true;
        nucleus.geometry.normalsNeedUpdate = true;
        nucleus.geometry.computeVertexNormals();
        nucleus.geometry.computeFaceNormals();
        nucleus.rotation.y += 0.002;


        //Sphere Beckground Animation
        sphereBg.rotation.x += 0.002;
        sphereBg.rotation.y += 0.002;
        sphereBg.rotation.z += 0.002;


        controls.update();
        stars.geometry.verticesNeedUpdate = true;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }



      /*     Resize     */
      window.addEventListener("resize", () => {
        clearTimeout(timeout_Debounce);
        timeout_Debounce = setTimeout(onWindowResize, 80);
      });
      function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      }`);
  editorCss.setValue(`body {
    margin: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background-image: url("https://user-images.githubusercontent.com/26748614/96337246-f14d4580-1085-11eb-8793-a86d929e034d.jpg");
    background-size: cover;
    backdrop-filter:  brightness(50%);
}

canvas {
    display: block;
}

#canvas_container {
    width: 100%;
    height: 100vh;
}

button {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid white;
    border-radius: 5px;
    font-size: 0.9rem;
    padding: 0.5rem 0.9em;
    background: #000000;
    color: white;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
    cursor: pointer;
    transition: all .3s;
}

button:hover {
    background: #ffffff;
    color: #000000;
}`);
  editorHtml.innerText = (`<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <script src="https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/three@0.121.1/examples/js/controls/OrbitControls.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js"></script>
      <!--SYSTEM-CSS-NOT-DELETE-->
    </head>
    
    <body>
      <div id="canvas_container"></div>
      <!--SYSTEM-JS-NOT-DELETE-->
    </body>
    
    </html>`);
  highLite(_OPERATING_SYSTEM_.getElem("#html"));
  /*
  "<script>try{console.log=(...args)=>{let a = _OPERATING_SYSTEM_.newElem('p');a=a.replaceAll('<', '&lt;');for (let arg of args){a.innerHTML += a;}window.parent._OPERATING_SYSTEM_.getElem('android-console').prepend(a);}"+contentJS+`} catch(err) {
    let error = _OPERATING_SYSTEM_.newElem("div");
    error.innerHTML = "<br><b style='color:red;'>>_ ["+err+"]</b>";
    
    window.parent._OPERATING_SYSTEM_.getElem('android-console').prepend(error);
    }</script>`
  */
  function runCode() {
    document.querySelector('android-console').innerHTML = "";
    var contentJS = editor.getValue();
    var contentCSS = editorCss.getValue();
    var contentHTML = editorHtml.innerText;
    let content = `${contentHTML.replace("<!--SYSTEM-CSS-NOT-DELETE-->", "<link rel=\"stylesheet\" href=\"https://rscript.teleweb.repl.co/www/acid-dom/css/acid_dom.css\"><style>" + contentCSS + "</style>")}`.replace("<!--SYSTEM-JS-NOT-DELETE-->", `<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Windows" touch="0" platform="Linux"></script><script src="https://rscript.teleweb.repl.co/www/acid-dom/js/acid_dom.js"></script><script>try{
  window.onload = () => {
    ADI.toggle();
  }
  document.onkeydown = (er) => {
    if (er.key == "F12") {
      er.preventDefault();
      ADI.toggle();
    } else if ((er.ctrlKey && er.key == "u") || (er.ctrlKey && er.key == "г") || (er.ctrlKey && er.key == "г")) {
      er.preventDefault();
      ADI.toggle();
    }
  }
console.log=(...args)=>{
        let a = document.createElement('p');
        for (let arg of args){
          a.innerHTML += String(arg).replaceAll('<', '&lt;');
        }
        a.innerHTML = "📢<code style='color: hsl(180deg 100% 50%);white-space:pre;'>[<console-log style='color:#ffdd00;'>console.log:</console-log> <br>" + a.innerHTML + "<br>]</code>";
        window.parent.document.querySelector('android-console').appendChild(a);
    }
    console.clear=()=>{window.parent.document.querySelector('android-console').innerHTML = ""}
${contentJS}
} catch(err) {
  let error = document.createElement("div");
  error.setAttribute("contenteditable", "false");
  error.innerHTML = "<br><b style='color:hsl(0deg 71% 70%);'>❌ 😬["+err+"]😲</b>";
  window.parent.document.querySelector('android-console').prepend(error);
  }</script>`).replace(`<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Android" touch="3" platform="Linux"></script>`, "");
    var iframe = _ANDROID_DOM_.getElementById('Code');
    iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.content_ANDROID_DOM_.document) ? iframe.content_ANDROID_DOM_.document : iframe.contentDocument;
    iframe.document.open();
    iframe.document.write(content);
    iframe.document.close();
    if (localStorage.getItem("devtool")) {
      generateElectron(contentHTML, contentCSS, contentJS, false);
    }
    document.querySelector("#open_browser").click();
    return false;
  }
  function updateElectron(codeHTML, codeCSS, codeJS) {
    if (devToolsElectron != null) {
      devToolsElectron.document.open();
      var contentJS = codeJS;
      var contentCSS = codeCSS;
      var contentHTML = codeHTML;
      let content = `${contentHTML.replace("<!--SYSTEM-CSS-NOT-DELETE-->", "<style>" + contentCSS + "</style>")}`.replace("<!--SYSTEM-JS-NOT-DELETE-->", `<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Windows" touch="0" platform="Linux"></script><script>try{
    document.onkeydown = (er) => {
      if (er.key == "F12") {
        er.preventDefault();
      } else if ((er.ctrlKey && er.key == "u") || (er.ctrlKey && er.key == "г") || (er.ctrlKey && er.key == "г")) {
        er.preventDefault();
      } else if (er.ctrlKey && er.shiftKey && er.key == "u") {
        er.preventDefault();
      } else if (er.ctrlKey && er.shiftKey && er.key == "i") {
        er.preventDefault();
      }
    }
    const AndroidChannelMessenger = new BroadcastChannel("@android");
    AndroidChannelMessenger.onmessage = (event) => {
      
    };
    var oldWidth = window.innerWidth;
    window.onresize = function () {
    	var newWidth = window.innerWidth;
    	if (newWidth != oldWidth) {
    		AndroidChannelMessenger.postMessage("@reloadElectron");
    	}
    };
  console.log=(...args)=>{
          let a = document.createElement('p');
          for (let arg of args){
            a.innerHTML += String(arg).replaceAll('<', '&lt;');
          }
          a.innerHTML = "<electron>electron-window: </electron>📢<code style='color: hsl(180deg 100% 50%);white-space:pre;'>[<console-log style='color:#ffdd00;'>console.log:</console-log> <br>" + a.innerHTML + "<br>]</code>";
          window.opener.document.querySelector('android-console').appendChild(a);
      }
      console.clear=()=>{window.parent.document.querySelector('android-console').innerHTML = ""}
  ${contentJS}
  } catch(err) {
    let error = document.createElement("div");
    error.setAttribute("contenteditable", "false");
    error.innerHTML = "<br><b style='color:hsl(0deg 71% 70%);'><electron>electron-window: </electron>❌ 😬["+err+"]😲</b>";
    window.opener.document.querySelector('android-console').prepend(error);
    }</script>`).replace(`<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Android" touch="3" platform="Linux"></script>`, "");
      devToolsElectron.document.write(content);
      devToolsElectron.document.close();
    }
  }
  function updateElectronTab(__tab_link) {
    if (tab != null) {
      __tab_link.document.open();
      var contentJS = editor.getValue();
      var contentCSS = editorCss.getValue();
      var contentHTML = editorHtml.innerText;
      let content = `${contentHTML.replace("<!--SYSTEM-CSS-NOT-DELETE-->", "<style>" + contentCSS + "</style>")}`.replace("<!--SYSTEM-JS-NOT-DELETE-->", `<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Windows" touch="0" platform="Linux"></script><script>try{
    document.onkeydown = (er) => {
      if (er.key == "F12") {
        er.preventDefault();
      } else if ((er.ctrlKey && er.key == "u") || (er.ctrlKey && er.key == "г") || (er.ctrlKey && er.key == "г")) {
        er.preventDefault();
      } else if (er.ctrlKey && er.shiftKey && er.key == "u") {
        er.preventDefault();
      } else if (er.ctrlKey && er.shiftKey && er.key == "i") {
        er.preventDefault();
      }
    }
    const AndroidChannelMessenger = new BroadcastChannel("@android");
    AndroidChannelMessenger.onmessage = (event) => {
      
    };
    var oldWidth = window.innerWidth;
    window.onresize = function () {
    	var newWidth = window.innerWidth;
    	if (newWidth != oldWidth) {
    		AndroidChannelMessenger.postMessage("@reloadElectron");
    	}
    };
  console.log=(...args)=>{
          let a = document.createElement('p');
          for (let arg of args){
            a.innerHTML += String(arg).replaceAll('<', '&lt;');
          }
          a.innerHTML = "<electron>electron-window: </electron>📢<code style='color: hsl(180deg 100% 50%);white-space:pre;'>[<console-log style='color:#ffdd00;'>console.log:</console-log> <br>" + a.innerHTML + "<br>]</code>";
          window.opener.document.querySelector('android-console').appendChild(a);
      }
      console.clear=()=>{window.parent.document.querySelector('android-console').innerHTML = ""}
  ${contentJS}
  } catch(err) {
    let error = document.createElement("div");
    error.setAttribute("contenteditable", "false");
    error.innerHTML = "<br><b style='color:hsl(0deg 71% 70%);'><electron>electron-window: </electron>❌ 😬["+err+"]😲</b>";
    window.opener.document.querySelector('android-console').prepend(error);
    }</script>`).replace(`<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Android" touch="3" platform="Linux"></script>`, "");
      __tab_link.document.write(content);
      __tab_link.document.close();
    }
  }
  function generateElectron(codeHTML, codeCSS, codeJS, __livepreview = false) {
    if (devToolsElectron != null) {
      devToolsElectron.close();
      var contentJS = editor.getValue();
      var contentCSS = editorCss.getValue();
      var contentHTML = editorHtml.innerText;
      let content = `${contentHTML.replace("<!--SYSTEM-CSS-NOT-DELETE-->", "<style>" + contentCSS + "</style>")}`.replace("<!--SYSTEM-JS-NOT-DELETE-->", `<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Windows" touch="0" platform="Linux"></script><script>try{
    document.onkeydown = (er) => {
      if (er.key == "F12") {
        er.preventDefault();
      } else if ((er.ctrlKey && er.key == "u") || (er.ctrlKey && er.key == "г") || (er.ctrlKey && er.key == "г")) {
        er.preventDefault();
      } else if (er.ctrlKey && er.shiftKey && er.key == "u") {
        er.preventDefault();
      } else if (er.ctrlKey && er.shiftKey && er.key == "i") {
        er.preventDefault();
      }
    }
    const AndroidChannelMessenger = new BroadcastChannel("@android");
    AndroidChannelMessenger.onmessage = (event) => {
      
    };
    var oldWidth = window.innerWidth;
    window.onresize = function () {
    	var newWidth = window.innerWidth;
    	if (newWidth != oldWidth) {
    		AndroidChannelMessenger.postMessage("@reloadElectron");
    	}
    };
  console.log=(...args)=>{
          let a = document.createElement('p');
          for (let arg of args){
            a.innerHTML += String(arg).replaceAll('<', '&lt;');
          }
          a.innerHTML = "<electron>electron-window: </electron>📢<code style='color: hsl(180deg 100% 50%);white-space:pre;'>[<console-log style='color:#ffdd00;'>console.log:</console-log> <br>" + a.innerHTML + "<br>]</code>";
          window.opener.document.querySelector('android-console').appendChild(a);
      }
      console.clear=()=>{window.parent.document.querySelector('android-console').innerHTML = ""}
  ${contentJS}
  } catch(err) {
    let error = document.createElement("div");
    error.setAttribute("contenteditable", "false");
    error.innerHTML = "<br><b style='color:hsl(0deg 71% 70%);'><electron>electron-window: </electron>❌ 😬["+err+"]😲</b>";
    window.opener.document.querySelector('android-console').prepend(error);
    }</script>`).replace(`<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Android" touch="3" platform="Linux"></script>`, "");
      const electron = open("about:blank", "tools", "width=1000,height=700,top=100,left=100,location=0,status=0,titlebar=0");
      devToolsElectron = electron;
      electron.document.write(content);
    } else {
      var contentJS = editor.getValue();
      var contentCSS = editorCss.getValue();
      var contentHTML = editorHtml.innerText;
      let content = `${contentHTML.replace("<!--SYSTEM-CSS-NOT-DELETE-->", "<style>" + contentCSS + "</style>")}`.replace("<!--SYSTEM-JS-NOT-DELETE-->", `<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Windows" touch="0" platform="Linux"></script><script>try{
    document.onkeydown = (er) => {
      if (er.key == "F12") {
        er.preventDefault();
      } else if ((er.ctrlKey && er.key == "u") || (er.ctrlKey && er.key == "г") || (er.ctrlKey && er.key == "г")) {
        er.preventDefault();
      } else if (er.ctrlKey && er.shiftKey && er.key == "u") {
        er.preventDefault();
      } else if (er.ctrlKey && er.shiftKey && er.key == "i") {
        er.preventDefault();
      }
    }
    const AndroidChannelMessenger = new BroadcastChannel("@android");
    AndroidChannelMessenger.onmessage = (event) => {
      
    };
    var oldWidth = window.innerWidth;
    window.onresize = function () {
    	var newWidth = window.innerWidth;
    	if (newWidth != oldWidth) {
    		AndroidChannelMessenger.postMessage("@reloadElectron");
    	}
    };
  console.log=(...args)=>{
          let a = document.createElement('p');
          for (let arg of args){
            a.innerHTML += String(arg).replaceAll('<', '&lt;');
          }
          a.innerHTML = "<electron>electron-window: </electron>📢<code style='color: hsl(180deg 100% 50%);white-space:pre;'>[<console-log style='color:#ffdd00;'>console.log:</console-log> <br>" + a.innerHTML + "<br>]</code>";
          window.opener.document.querySelector('android-console').appendChild(a);
      }
      console.clear=()=>{window.parent.document.querySelector('android-console').innerHTML = ""}
  ${contentJS}
  } catch(err) {
    let error = document.createElement("div");
    error.setAttribute("contenteditable", "false");
    error.innerHTML = "<br><b style='color:hsl(0deg 71% 70%);'><electron>electron-window: </electron>❌ 😬["+err+"]😲</b>";
    window.opener.document.querySelector('android-console').prepend(error);
    }</script>`).replace(`<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Android" touch="3" platform="Linux"></script>`, "");
      const electron = open("about:blank", "tools", "width=1000,height=700,top=100,left=100,location=0,status=0,titlebar=0");
      devToolsElectron = electron;
      electron.document.write(content);
    }

    // if (devToolsElectron != null && __livepreview == true) {
    //   devToolsElectron.document.body.innerHTML = "";
    //   devToolsElectron.document.head.innerHTML = "";
    //   var contentJS = codeJS;
    //   var contentCSS = codeCSS;
    //   var contentHTML = codeHTML;
    //   let content = `${contentHTML.replace("<!--SYSTEM-CSS-NOT-DELETE-->", "<link rel=\"stylesheet\" href=\"https://rscript.teleweb.repl.co/www/acid-dom/css/acid_dom.css\"><style>"+contentCSS+"</style>")}`.replace("<!--SYSTEM-JS-NOT-DELETE-->", `<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Windows" touch="0" platform="Linux"></script><script src="https://rscript.teleweb.repl.co/www/acid-dom/js/acid_dom.js"></script><script>try{
    // console.log=(...args)=>{
    //         let a = document.createElement('p');
    //         for (let arg of args){
    //           a.innerHTML += String(arg).replaceAll('<', '&lt;');
    //         }
    //         a.innerHTML = "<electron>electron-window: </electron>📢<code style='color: hsl(180deg 100% 50%);white-space:pre;'>[<console-log style='color:#ffdd00;'>console.log:</console-log> <br>" + a.innerHTML + "<br>]</code>";
    //         window.opener.document.querySelector('android-console').appendChild(a);
    //     }
    //     console.clear=()=>{window.parent.document.querySelector('android-console').innerHTML = ""}
    // ${contentJS}
    // } catch(err) {
    //   let error = document.createElement("div");
    //   error.setAttribute("contenteditable", "false");
    //   error.innerHTML = "<br><b style='color:hsl(0deg 71% 70%);'><electron>electron-window: </electron>❌ 😬["+err+"]😲</b>";
    //   window.opener.document.querySelector('android-console').prepend(error);
    //   }</script>`).replace(`<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Android" touch="3" platform="Linux"></script>`, "");
    //   devToolsElectron.document.write(content);
    // }
    // else {
    //   var contentJS = codeJS;
    //   var contentCSS = codeCSS;
    //   var contentHTML = codeHTML;
    //   let content = `${contentHTML.replace("<!--SYSTEM-CSS-NOT-DELETE-->", "<link rel=\"stylesheet\" href=\"https://rscript.teleweb.repl.co/www/acid-dom/css/acid_dom.css\"><style>"+contentCSS+"</style>")}`.replace("<!--SYSTEM-JS-NOT-DELETE-->", `<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Windows" touch="0" platform="Linux"></script><script src="https://rscript.teleweb.repl.co/www/acid-dom/js/acid_dom.js"></script><script>try{
    // console.log=(...args)=>{
    //         let a = document.createElement('p');
    //         for (let arg of args){
    //           a.innerHTML += String(arg).replaceAll('<', '&lt;');
    //         }
    //         a.innerHTML = "<electron>electron-window: </electron>📢<code style='color: hsl(180deg 100% 50%);white-space:pre;'>[<console-log style='color:#ffdd00;'>console.log:</console-log> <br>" + a.innerHTML + "<br>]</code>";
    //         window.opener.document.querySelector('android-console').appendChild(a);
    //     }
    //     console.clear=()=>{window.parent.document.querySelector('android-console').innerHTML = ""}
    // ${contentJS}
    // } catch(err) {
    //   let error = document.createElement("div");
    //   error.setAttribute("contenteditable", "false");
    //   error.innerHTML = "<br><b style='color:hsl(0deg 71% 70%);'><electron>electron-window: </electron>❌ 😬["+err+"]😲</b>";
    //   window.opener.document.querySelector('android-console').prepend(error);
    //   }</script>`).replace(`<script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Android" touch="3" platform="Linux"></script>`, "");
    //   const electron = open("about:blank", "tools", "width=1000,height=700,top=100,left=100,location=0,status=0,titlebar=0");
    //   devToolsElectron = electron;
    //   electron.document.write(content);
    //   return electron;
    // }
  }
  function shellCode() {
    var contentJS = editor.getValue();
    var contentCSS = editorCss.getValue();
    var contentHTML = editorHtml.innerText;
    let content = `${contentHTML.replace("<!--SYSTEM-CSS-NOT-DELETE-->", "<link rel=\"stylesheet\" href=\"https://rscript.teleweb.repl.co/www/acid-dom/css/acid_dom.css\"><style>" + contentCSS + "</style>")}`.replace("<!--SYSTEM-JS-NOT-DELETE-->", "<script>" + contentJS + "</script>");
    _ANDROID_SOCKET_CONNECTOR_.emit("share", {
      user: getCookie("__uuser__nnick__"),
      file: content
    });
    return false;
  }


  function sendCode(nick) {
    let y = nick;
    if (y) {
      var contentJS = editor.getValue();
      var contentCSS = editorCss.getValue();
      var contentHTML = editorHtml.innerText;
      let content = `${contentHTML.replace("<!--SYSTEM-CSS-NOT-DELETE-->", "<style>" + contentCSS + "</style>")}`.replace("<!--SYSTEM-JS-NOT-DELETE-->", "<script>" + contentJS + "</script>");
      _ANDROID_SOCKET_CONNECTOR_.emit("share", {
        user: y,
        file: content
      });
      return false;
    }
  }

  //_ANDROID_DOM_.querySelector("#resp").click = null;
  function shellode() {
    var contentJS = editor.getValue();
    var contentCSS = editorCss.getValue();
    var contentHTML = editorHtml.innerText;
    let content = `${contentHTML.replace("<!--SYSTEM-CSS-NOT-DELETE-->", "<style>" + contentCSS + "</style>")}`.replace("<!--SYSTEM-JS-NOT-DELETE-->", `<script src="https://Iphone.teleweb.repl.co/www/__android_activity/__definer/__navigator/__nav.js"></script><script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Android" touch="3" platform="Linux"></script><script>window.addEventListener('message', ({ data }) => {
  if (data == "__offed_internet") {
    Inet.__off_Internet();
  } else if (data == "__onned_internet") {
    Inet.__switch_Internet();
  } else if (data == "__onned_bluetooth") {
    Inet.__switch_to_bluetooth();
  }
  });try{`+ contentJS + `
  }catch(e) {
    window.parent.postMessage(\`__close_app-err:\${e}\`, "*")
  }</script>`);
    _ANDROID_SOCKET_CONNECTOR_.emit("build", {
      file: content
    });
    return false;
  }
  function shellodeForApp() {
    var contentJS = editor.getValue();
    var contentCSS = editorCss.getValue();
    var contentHTML = editorHtml.innerText;
    let content = `${contentHTML.replace("<!--SYSTEM-CSS-NOT-DELETE-->", "<style>" + contentCSS + "</style>")}`.replace("<!--SYSTEM-JS-NOT-DELETE-->", `<script src="https://Iphone.teleweb.repl.co/www/__android_activity/__definer/__navigator/__nav.js"></script><script id="_system_" src="https://Iphone.teleweb.repl.co/www/userAgent.js/userAgent.js" app-name="Netscape" agent="Android" touch="3" platform="Linux"></script><script>window.addEventListener('message', ({ data }) => {
  if (data == "__offed_internet") {
    Inet.__off_Internet();
  } else if (data == "__onned_internet") {
    Inet.__switch_Internet();
  } else if (data == "__onned_bluetooth") {
    Inet.__switch_to_bluetooth();
  }
  });try{`+ contentJS + `
  }catch(e) {
    window.parent.postMessage(\`__close_app-err:\${e}\`, "*")
  }</script>`);
    _ANDROID_SOCKET_CONNECTOR_.emit("build_app", {
      file: content
    });
    return false;
  }
  function buildPage() {
    var contentJS = editor.getValue();
    var contentCSS = editorCss.getValue();
    var contentHTML = editorHtml.innerText;
    let content = `${contentHTML.replace("<!--SYSTEM-CSS-NOT-DELETE-->", "<link rel=\"stylesheet\" href=\"https://rscript.teleweb.repl.co/www/acid-dom/css/acid_dom.css\"><style>" + contentCSS + "</style>")}`.replace("<!--SYSTEM-JS-NOT-DELETE-->", "<script src=\"https://rscript.teleweb.repl.co/www/acid-dom/js/acid_dom.js\"></script><script>" + contentJS + "</script>");
    _ANDROID_SOCKET_CONNECTOR_.emit("buildWebPage", {
      file: content
    });
  }
  function test() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      _OPERATING_SYSTEM_.getElem(".cl2").style.position = "absolute";
      _OPERATING_SYSTEM_.getElem(".cl2").style.top = "10%";
      //window.scrollBy(0, 500);
      _OPERATING_SYSTEM_.getElem(".cl2").scrollIntoView({
        behavior: "smooth"
      });
      setTimeout(() => {
        _OPERATING_SYSTEM_.getElem(".cl2").style.position = "";
        _OPERATING_SYSTEM_.getElem(".cl2").style.top = "";
        _OPERATING_SYSTEM_.getElem(".cl2").scrollIntoView({
          behavior: "smooth"
        });
      }, 4000);

    } else {

    }
  }
  function testt() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      //window.scrollBy(0, -200);
      _OPERATING_SYSTEM_.getElem(".cl1").scrollIntoView({
        behavior: "smooth"
      });
    } else {

    }
  }
  _OPERATING_SYSTEM_.getElem("#run").onclick = () => {
    load();
    looad();
    test();
    _OPERATING_SYSTEM_.getElem("#androidx").style.display = "none";
    _OPERATING_SYSTEM_.getElem(".cl2").style.display = "block";
    let aa = _OPERATING_SYSTEM_.newElem("div");
    aa.innerHTML = `Loading...`;
    _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
    setTimeout(() => {
      aa.innerHTML = `Opening filestream...`;
      _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
      setTimeout(() => {
        aa.innerHTML = `Opening emulator...`;
        _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
        setTimeout(() => {
          aa.innerHTML = `Opening ServerStream...`;
          _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
          setTimeout(() => {
            aa.innerHTML = `✔️Success`;
            _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
            let bb = _OPERATING_SYSTEM_.newElem("div");
            bb.innerHTML = `Starting...`;
            _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
            setTimeout(() => {
              bb.innerHTML = `Project opened`;
              _OPERATING_SYSTEM_.getElem('android-console').prepend(bb);
              let cc = _OPERATING_SYSTEM_.newElem("div");
              cc.innerHTML = `Server started`;
              _OPERATING_SYSTEM_.getElem('android-console').prepend(cc);
              setTimeout(() => {
                let ee = _OPERATING_SYSTEM_.newElem("div");
                ee.innerHTML = `✔️Success`;
                _OPERATING_SYSTEM_.getElem('android-console').prepend(ee);
                runCode();
                testt();
              }, 100);
            }, 1000);
          }, 400);
        }, 1000);
      }, 1000);
    }, 1000);
    setTimeout(() => {
      load_editor();
    }, 2000);
  };
  // setTimeout(() => {
  //   _OPERATING_SYSTEM_.getElem("#run").click();
  // }, 600);

  _OPERATING_SYSTEM_.getElem("#share").onclick = () => {
    shellCode();
  };
  async function getData() {
    const promise = new Promise(function(resolve, reject) {
      _ANDROID_SOCKET_CONNECTOR_.on('get', data => {
        resolve(data);
      });
    });
    return promise;
  }
  ////////IF NOT WORKING COMMENT
  async function sety() {
    const promise = new Promise(function(resolve, reject) {
      _ANDROID_SOCKET_CONNECTOR_.on('setUsers', data => {
        resolve(data);
      });
    });
    return promise;
  }

  users = await sety();
  _OPERATING_SYSTEM_.getElem("#resp").onclick = function() {
    //zz()
    // let f = _OPERATING_SYSTEM_.newElem("span");
    //     f.innerHTML = "🟢";
    //     _OPERATING_SYSTEM_.getElem("android-console").prepend(f);
    shellode();

    // setInterval(() => {
    //   if (_OPERATING_SYSTEM_.getElem("#android")) {
    //     f.innerHTML = "🟢";
    //   setInterval(() => {
    //     f.innerHTML = "🔴";
    //     setTimeout(() => {
    //       f.innerHTML = "🟢";
    //     }, 1000);
    //   }, 1000);
    //  }
    // }, 500);


  }
  function zz() {
    let dtr = new Date();
    let aa = _OPERATING_SYSTEM_.newElem("div");
    aa.innerHTML = `Loading...`;
    _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
    setInterval(() => {

      setTimeout(() => {
        let dtr = new Date();
        aa.innerHTML = `${dtr.getMinutes()}:${dtr.getSeconds()}--`;
        _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
        setTimeout(() => {
          let dtr = new Date();
          aa.innerHTML = `${dtr.getMinutes()}:${dtr.getSeconds()}`;
          _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
          setTimeout(() => {
            let dtr = new Date();
            aa.innerHTML = `${dtr.getMinutes()}:${dtr.getSeconds()}--`;
            _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
            setTimeout(() => {
              let dtr = new Date();
              aa.innerHTML = `${dtr.getMinutes()}:${dtr.getSeconds()}`;
              _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
              setTimeout(() => {
                let dtr = new Date();
                aa.innerHTML = `${dtr.getMinutes()}:${dtr.getSeconds()}--`;
                _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                setTimeout(() => {
                  let dtr = new Date();
                  aa.innerHTML = `${dtr.getMinutes()}:${dtr.getSeconds()}`;
                  _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                  setTimeout(() => {
                    let dtr = new Date();
                    aa.innerHTML = `${dtr.getMinutes()}:${dtr.getSeconds()}--`;
                    _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                    setTimeout(() => {
                      let dtr = new Date();
                      aa.innerHTML = `${dtr.getMinutes()}:${dtr.getSeconds()}`;
                      _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                      setTimeout(() => {
                        let dtr = new Date();
                        aa.innerHTML = `${dtr.getMinutes()}:${dtr.getSeconds()}--`;
                        _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                        setTimeout(() => {
                          let dtr = new Date();
                          aa.innerHTML = `${dtr.getMinutes()}:${dtr.getSeconds()}`;
                          _OPERATING_SYSTEM_.getElem('android-console').prepend(aa);
                        }, 3000);
                      }, 1000);
                    }, 800);
                  }, 800);
                }, 800);
              }, 800);
            }, 600);
          }, 600);
        }, 600);
      }, 300);
    }, 500);
  }
  _ANDROID_SOCKET_CONNECTOR_.on("get", (data) => {
    let o = _OPERATING_SYSTEM_.newElem("div");
    o.innerHTML = `<close><img src="js/off.png" class="close_android"><span class="__android_after clo">вимкнути девайс</span>
    </close><br><input type="range" id="resz" value="1" max="1" step="0.1"><span class="__android_after __resz">яскравість екрану</span>
    <button id="inv">INV</button><span class="__android_after __inv">інвертувати кольори в екрані</span>
    <button id="rotate">⟲</button><span class="__android_after __rel">перезавантажити девайс</span>
    <img src="__mobile/__constructor/__panel/reload_app.png" class="btn_reload"><span class="__android_after rel">перезавантажити додаток в девайсі</span>
    <img src="__mobile/__constructor/__panel/wifi.png" class="btn_inet"><span class="__android_after __inet">Налаштування інтернету</span>
    <img src="__mobile/__constructor/__down_panel/back.png" class="btn_back"><span class="__android_after bac">назад</span>
    <img src="__mobile/__constructor/__down_panel/apps.png" class="btn_apps"><span class="__android_after app">всі відкриті додатки в девайсі</span>
    <img src="__mobile/__constructor/__down_panel/break_all.png" class="btn_home"><span class="__android_after hom">закрити додаток в девайсі</span>
    <sp title="MOVE">🟢</sp>`;
    o.style.cssText = `
    	/*width: 30px;
      height: 30px;
      border: 2px red solid;
      border-radius: 50%;*/
      width: 36px;
    height: 470px;
    border: 2px solid hsl(0deg 100% 50%);
    position: fixed;
    top: 59px;
    left: 516px;
    overflow: visible;
    background: hsl(70deg 16% 70%);
    border-radius: 20px;
    box-shadow: 0px 0px 20px 5px;
    z-index: 100;
    `;
    o.id = "android";
    let lll = `__android_${Date.now()}__`;
    o.className = `andr ${lll}`;
    let y = _OPERATING_SYSTEM_.newElem("iframe");
    y.src = `https://iphone.teleweb.repl.co/www/?url=${data.file}`;
    y.id = "windowAndroid";
    //y.className = "ui-widget-content"
    y.style.cssText = `
    width: 331px;
    height: 660px;
    position: relative;
    left: -362px;
    top: -30px;
    box-shadow: 0px 0px 10px;
    border-radius: 50px;
    // border: 2px hsl(0deg 100% 50%) solid;
    border-width: 3px;
    `;
    o.appendChild(y);
    _ANDROID_DOM_.body.appendChild(o);
    document.querySelector(`.${lll}`).onmouseover = (r) => {
      if (r.target.className == "btn_reload") {
        r.target.nextElementSibling.classList.add("show1");
      } else if (r.target.className == "btn_back") {
        r.target.nextElementSibling.classList.add("show2");
      } else if (r.target.className == "btn_apps") {
        r.target.nextElementSibling.classList.add("show3");
      } else if (r.target.className == "btn_home") {
        r.target.nextElementSibling.classList.add("show4");
      } else if (r.target.className == "close_android") {
        r.target.nextElementSibling.classList.add("show5");
      } else if (r.target.id == "inv") {
        r.target.nextElementSibling.classList.add("show7");
      } else if (r.target.id == "rotate") {
        r.target.nextElementSibling.classList.add("show6");
      } else if (r.target.id == "resz") {
        r.target.nextElementSibling.classList.add("show8");
      }
    }
    document.querySelector(`.${lll}`).onmouseout = (r) => {
      if (r.target.className == "btn_reload") {
        r.target.nextElementSibling.classList.remove("show1");
      } else if (r.target.className == "btn_back") {
        r.target.nextElementSibling.classList.remove("show2");
      } else if (r.target.className == "btn_apps") {
        r.target.nextElementSibling.classList.remove("show3");
      } else if (r.target.className == "btn_home") {
        r.target.nextElementSibling.classList.remove("show4");
      } else if (r.target.className == "close_android") {
        r.target.nextElementSibling.classList.remove("show5");
      } else if (r.target.id == "inv") {
        r.target.nextElementSibling.classList.remove("show7");
      } else if (r.target.id == "rotate") {
        r.target.nextElementSibling.classList.remove("show6");
      } else if (r.target.id == "resz") {
        r.target.nextElementSibling.classList.remove("show8");
      }
    }
    // _OPERATING_SYSTEM_.getElem("#android .btn_reload").onclick = () => {
    //   _OPERATING_SYSTEM_.getElem("#android.andr iframe").contentWindow.postMessage(`__reload_app-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
    // }
    $("#android .btn_reload").click(function() {
      _OPERATING_SYSTEM_.getElem(`.${this.parentNode.classList[1]} iframe`).contentWindow.postMessage(`__reload_app-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
    });
    $("#android .btn_inet").click(function() {
      _OPERATING_SYSTEM_.getElem(`.${this.parentNode.classList[1]} iframe`).contentWindow.postMessage(`__online`, "https://Iphone.teleweb.repl.co");
    })
    $("#android .btn_back").click(function() {
      _OPERATING_SYSTEM_.getElem(`.${this.parentNode.classList[1]} iframe`).contentWindow.postMessage(`go_back`, "https://Iphone.teleweb.repl.co");
    })
    $("#android .btn_apps").click(function() {
      _OPERATING_SYSTEM_.getElem(`.${this.parentNode.classList[1]} iframe`).contentWindow.postMessage(`show_apps`, "https://Iphone.teleweb.repl.co");
    });
    _OPERATING_SYSTEM_.getElem(`.${lll} #inv`).style.color = "black";
    _OPERATING_SYSTEM_.getElem(`.${lll} #inv`).style.background = "white";
    _OPERATING_SYSTEM_.getElem(`.${lll} iframe`).onload = function() {
      this.contentWindow.postMessage(`user-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
      setTimeout(() => {
        _OPERATING_SYSTEM_.getElem(`.${lll} .btn_apps`).style.cssText = _OPERATING_SYSTEM_.getElem(`.${lll} .btn_back`).style.cssText = _OPERATING_SYSTEM_.getElem(`.${lll} .btn_reload`).style.cssText = _OPERATING_SYSTEM_.getElem(`.${lll} .btn_home`).style.cssText = "filter: opacity(1); pointer-events: auto;";
        _ANDROID_DOM_.querySelector(`.${lll} .btn_reload`).style.display = "none";
        _ANDROID_DOM_.querySelector(`.${lll} .btn_back`).style.display = "none";
        _ANDROID_DOM_.querySelector(`.${lll} .btn_apps`).style.display = "none";
        _ANDROID_DOM_.querySelector(`.${lll} .btn_home`).style.display = "none";
        if (localStorage.getItem("tv_ttvers_09") == "1.0.3" || localStorage.getItem("tv_ttvers_09") == "1.0.5") {
          _ANDROID_DOM_.querySelector(`.${lll} .btn_reload`).style.display = "";
          _ANDROID_DOM_.querySelector(`.${lll} .btn_back`).style.display = "";
          _ANDROID_DOM_.querySelector(`.${lll} .btn_apps`).style.display = "";
          _ANDROID_DOM_.querySelector(`.${lll} .btn_home`).style.display = "";
        }
      }, 8000);
    }
    _OPERATING_SYSTEM_.getElem(`#android.${lll}`).onclick = (e) => {
      let t = e.target;
      if (t.id == "rotate") {
        t.parentNode.remove();
        shellode();
      } else if (t.className == "close_android") {
        t.parentNode.parentNode.remove();
      } else if (t.className == "btn_home") {
        _OPERATING_SYSTEM_.getElem(`.${lll} iframe`).contentWindow.postMessage("gohome", "https://Iphone.teleweb.repl.co");
      }
    }
    _OPERATING_SYSTEM_.getElem(`.${lll} #resz`).oninput = function() {
      _OPERATING_SYSTEM_.getElem(`.${lll} iframe`).contentWindow.postMessage(this.value, "https://Iphone.teleweb.repl.co");
    }
    _OPERATING_SYSTEM_.getElem(`.${lll} #inv`).onclick = function() {
      if (this.style.color == "black") {
        _OPERATING_SYSTEM_.getElem(`.${lll} iframe`).contentWindow.postMessage("hello", "https://Iphone.teleweb.repl.co");
        this.style.color = "white";
        this.style.background = "black";
      } else {
        _OPERATING_SYSTEM_.getElem(`.${lll} iframe`).contentWindow.postMessage("helloo", "https://Iphone.teleweb.repl.co");
        this.style.color = "black";
        this.style.background = "white";
      }
    }
    $(function() {
      //$("#windowAndroid").resizable();
      // $("#android.andr").draggable({
      //   containment:"body"
      // });
      $("#android.andr").draggable();
    });

  });
  function clearEditor() {
    editorHtml.innerText = (`<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <!--SYSTEM-CSS-NOT-DELETE-->
    </head>
    
    <body>
      Hello world
      <!--SYSTEM-JS-NOT-DELETE-->
    </body>
    
    </html>`);
    highLite(_OPERATING_SYSTEM_.getElem("#html"));
    editorCss.setValue("");
    editor.setValue("");
    document.querySelector("#__andr_edit_project > android-project-my").innerText = "Стартовий";
  }
  // _ANDROID_SOCKET_CONNECTOR_.on("get", (data) => {
  //   // window.open(data.file, '_blank', );
  // });

  _OPERATING_SYSTEM_.getElem("#clearHTML").onclick = () => {
    editorHtml.innerText = (`<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <!--SYSTEM-CSS-NOT-DELETE-->
    </head>
    
    <body>
      Hello world
      <!--SYSTEM-JS-NOT-DELETE-->
    </body>
    
    </html>`);
    alert("Щоб повернути код, натисни Ctrl+Z");
  }
  _OPERATING_SYSTEM_.getElem("#clearCSS").onclick = () => {
    editorCss.setValue("");
    alert("Щоб повернути код, натисни Ctrl+Z");
  }
  _OPERATING_SYSTEM_.getElem("#clearJS").onclick = () => {
    editor.setValue("");
    alert("Щоб повернути код, натисни Ctrl+Z");
  }
  setTimeout(() => {
    runTST();
  }, 3000);
  _ANDROID_DOM_.onkeydown = (rv) => {
    if ((rv.altKey && rv.key == "z") || (rv.altKey && rv.key == "я")) {
      _OPERATING_SYSTEM_.getElem("#edit").click();
    } else {
      rrun(rv);
    }
  }
  function rrunBeta(event) {
    if (event.key === "Enter" && event.ctrlKey) {
      event.preventDefault();
      _OPERATING_SYSTEM_.getElem("#run").click();
      //run code
    }
  }
  function rrun(event) {
    if (event.key === "Enter" && event.ctrlKey) {
      event.preventDefault();
      _OPERATING_SYSTEM_.getElem("#run").click();
      //run code
    } else if ((event.altKey && event.key == "e") || (event.altKey && event.key == "у")) {
      event.preventDefault();
      _OPERATING_SYSTEM_.getElem("#resp").click();
    } else if ((event.ctrlKey && event.key == "e") || (event.ctrlKey && event.key == "у")) {
      event.preventDefault();
      _OPERATING_SYSTEM_.getElem("#resp").click();
      _OPERATING_SYSTEM_.getElem("#run").click();
    } else if ((event.altKey && event.key == "a") || (event.altKey && event.key == "ф")) {
      event.preventDefault();
      editor.setValue("");
      editorCss.setValue("");
      editorHtml.innerText = (`<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <!--SYSTEM-CSS-NOT-DELETE-->
    </head>
    
    <body>
      Hello world
      <!--SYSTEM-JS-NOT-DELETE-->
    </body>
    
    </html>`);
      highLite(_OPERATING_SYSTEM_.getElem("#html"));
    } else if ((event.altKey && event.key == "h") || (event.altKey && event.key == "р")) {
      event.preventDefault();
      editorHtml.innerText = (`<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <!--SYSTEM-CSS-NOT-DELETE-->
    </head>
    
    <body>
      Hello world
      <!--SYSTEM-JS-NOT-DELETE-->
    </body>
    
    </html>`);
      highLite(_OPERATING_SYSTEM_.getElem("#html"));
    } else if ((event.altKey && event.key == "j") || (event.altKey && event.key == "о")) {
      event.preventDefault();
      editor.setValue("");
    } else if ((event.altKey && event.key == "c") || (event.altKey && event.key == "с")) {
      event.preventDefault();
      editorCss.setValue("");
    } else if (event.shiftKey && event.key == "F5") {
      event.preventDefault();
      // _OPERATING_SYSTEM_.getElem("#Code").contentWindow.location.reload();
      let content = `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <!--SYSTEM-CSS-NOT-DELETE-->
    </head>
    
    <body>
      Hello world
      <!--SYSTEM-JS-NOT-DELETE-->
    </body>
    
    </html>`;
      var iframe = _ANDROID_DOM_.getElementById('Code');
      iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.content_ANDROID_DOM_.document) ? iframe.content_ANDROID_DOM_.document : iframe.contentDocument;
      iframe.document.open();
      iframe.document.write(content);
      iframe.document.close();
    } else if (event.altKey && event.key == "u") {
      event.preventDefault();
      _ANDROID_TRANSLATER_ADAPTER_UA_();
    } else if (event.altKey && event.key == "r") {
      event.preventDefault();
      _ANDROID_TRANSLATER_ADAPTER_RU_();
    } else if (event.altKey && event.key == "n") {
      event.preventDefault();
      _ANDROID_TRANSLATER_ADAPTER_EN_();
    } else if (event.metaKey && event.key == "g") {
      event.preventDefault();
      alert(1)
    } else if (event.ctrlKey && event.key == "s") {
      event.preventDefault();
      secure();
    } else if (event.altKey && event.key == "r") {
      event.preventDefault();
      document.querySelector("#rotate").click()
    } else if (event.key == "F5") {
      event.preventDefault();
      document.querySelector("#androidx > img.btn_reload").click()
    }
  }
  function secure() {
    for (; ;) {
      console.log(1);
    }
  }
  _OPERATING_SYSTEM_.getElem("#emm").onclick = () => {
    let div = _OPERATING_SYSTEM_.newElem("div");
    div.className = "instr";
    div.innerHTML = `
    <button id="cloe">Зрозумів</button><br>
    <table>
      <tr>
        <th>Комбінація</th>
        <th>Значення</th>
      </tr>
      <tr>
        <td><pre>Ctrl + Enter</pre></td>
        <td>Запуск коду</td>
      </tr>
      <tr>
        <td><pre>Alt + E</pre></td>
        <td>Запуск емулятору</td>
      </tr>
      <tr>
        <td><pre>Ctrl + E</pre></td>
        <td>Запуск коду i емулятору</td>
      </tr>
      <tr>
        <td><pre>Alt + A</pre></td>
        <td>Очищення всіх редакторів</td>
      </tr>
      <tr>
        <td><pre>Alt + H</pre></td>
        <td>Очищення коду HTML</td>
      </tr>
      <tr>
        <td><pre>Alt + C</pre></td>
        <td>Очищення коду CSS</td>
      </tr>
      <tr>
        <td><pre>Alt + J</pre></td>
        <td>Очищення коду JS</td>
      </tr>
      <tr>
        <td><pre>Shift + F5</pre></td>
        <td>Очищення вікна де відображається результат(перед цим сфокусуйся на одному з редакторів)</td>
      </tr>
      <tr>
        <td><pre>Alt + Z</pre></td>
        <td>Вмикання/вимикання функції режимy WYSIWYG(beta)</td>
      </tr>
      <tr>
        <td><pre>Alt + U</pre></td>
        <td>Перекласти консоль на українську мову</td>
      </tr>
      <tr>
        <td><pre>Alt + R</pre></td>
        <td>Перекласти консоль на російську мову</td>
      </tr>
      <tr>
        <td><pre>Alt + N</pre></td>
        <td>Перекласти консоль на англійську мову</td>
      </tr>
    </table>
    `;
    _ANDROID_DOM_.body.appendChild(div);
    _OPERATING_SYSTEM_.getElem("#cloe").onclick = () => {
      div.remove();
    }
  }

  _OPERATING_SYSTEM_.getElem("#edit").onclick = function() {
    if (this.innerHTML == `Увімкнути режим WYSIWYG(beta)`) {
      this.innerHTML = `Вимкнути режим WYSIWYG(beta)`;
      document.querySelector("iframe").contentWindow.document.body.setAttribute("contenteditable", "true");
    } else {
      this.innerHTML = `Увімкнути режим WYSIWYG(beta)`;
      document.querySelector("iframe").contentWindow.document.body.removeAttribute("contenteditable", "true");
      editorHtml.innerText = (`<html>
      ${_OPERATING_SYSTEM_.getElem("#Code").contentWindow._OPERATING_SYSTEM_.getElem("html").innerHTML.replace(`<script>try{} catch(err) {
  let error = _OPERATING_SYSTEM_.newElem("div");
  error.innerHTML = "<br><b style='color:hsl(0deg 71% 70%);'>❌ 😬["+err+"]😲</b>";
  
  window.parent._OPERATING_SYSTEM_.getElem('android-console').prepend(error);
  }</script>`, "")}
      </html>`);
    }
  }
  // _OPERATING_SYSTEM_.getElem("android-console").oncopy = (e) => {
  //   e.clipboardData.setData("text/plain", "Усі права захищені");
  //   e.preventDefault();
  // }

  function getCaretPosition(editableDiv) {
    var caretPos = 0,
      sel, range;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount) {
        range = sel.getRangeAt(0);
        if (range.commonAncestorContainer.parentNode == editableDiv) {
          caretPos = range.endOffset;
        }
      }
    } else if (_ANDROID_DOM_.selection && _ANDROID_DOM_.selection.createRange) {
      range = _ANDROID_DOM_.selection.createRange();
      if (range.parentElement() == editableDiv) {
        var tempEl = _OPERATING_SYSTEM_.newElem("span");
        editableDiv.insertBefore(tempEl, editableDiv.firstChild);
        var tempRange = range.duplicate();
        tempRange.moveToElementText(tempEl);
        tempRange.setEndPoint("EndToEnd", range);
        caretPos = tempRange.text.length;
      }
    }
    return caretPos;
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  _OPERATING_SYSTEM_.getElem("android-console-line").oninput = function() {
    let u = getCaretPosition(this)
    console.log(u);
    if (!_OPERATING_SYSTEM_.getElem("android-console-line").innerHTML.startsWith(`<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`)) {
      _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = "";
      _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
      moveToEndCursor();
    } else if (_OPERATING_SYSTEM_.getElem("android-console-line").innerHTML.endsWith("(")) {
      let uCaret = getCaretPosition(this)
      _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML += ")";
      this.focus();
      console.log(uCaret)
      this.selectionStart = this.selectionEnd = ++uCaret;
      this.focus();
    } else if (_OPERATING_SYSTEM_.getElem("android-console-line").innerHTML.startsWith(`<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`)) {
      let newCaretPosition = getCaretPosition(this);
      let range = new Range();
      range.setStart(this.lastChild, 0);
      range.setEnd(this.lastChild, newCaretPosition);
      if (range.toString().endsWith("(")) {
        _ANDROID_DOM_.execCommand("insertText", false, ")");
        var div = _OPERATING_SYSTEM_.getElem('android-console-line');
        newCaretPosition = getCaretPosition(div);
        div.focus();
        let oi = --newCaretPosition;
        var rangew = _ANDROID_DOM_.createRange();
        var sel = window.getSelection();
        let cur = window.getSelection().anchorOffset;
        rangew.setStart(_OPERATING_SYSTEM_.getElem("android-console-line").lastChild, --cur);
        rangew.collapse(true);
        sel.removeAllRanges();
        sel.addRange(rangew);
        _OPERATING_SYSTEM_.getElem("android-console-line").focus();
      } else if (range.toString().endsWith("[")) {
        _ANDROID_DOM_.execCommand("insertText", false, "]");
        var div = _OPERATING_SYSTEM_.getElem('android-console-line');
        newCaretPosition = getCaretPosition(div);
        div.focus();
        let oi = --newCaretPosition;
        var rangew = _ANDROID_DOM_.createRange();
        var sel = window.getSelection();
        let cur = window.getSelection().anchorOffset;
        rangew.setStart(_OPERATING_SYSTEM_.getElem("android-console-line").lastChild, --cur);
        rangew.collapse(true);
        sel.removeAllRanges();
        sel.addRange(rangew);
        _OPERATING_SYSTEM_.getElem("android-console-line").focus();
      } else if (range.toString().endsWith("{")) {
        _ANDROID_DOM_.execCommand("insertText", false, "}");
        var div = _OPERATING_SYSTEM_.getElem('android-console-line');
        newCaretPosition = getCaretPosition(div);
        div.focus();
        let oi = --newCaretPosition;
        var rangew = _ANDROID_DOM_.createRange();
        var sel = window.getSelection();
        let cur = window.getSelection().anchorOffset;
        rangew.setStart(_OPERATING_SYSTEM_.getElem("android-console-line").lastChild, --cur);
        rangew.collapse(true);
        sel.removeAllRanges();
        sel.addRange(rangew);
        _OPERATING_SYSTEM_.getElem("android-console-line").focus();
      } else if (range.toString().endsWith("\"")) {
        _ANDROID_DOM_.execCommand("insertText", false, "\"");
        var div = _OPERATING_SYSTEM_.getElem('android-console-line');
        newCaretPosition = getCaretPosition(div);
        div.focus();
        let oi = --newCaretPosition;
        var rangew = _ANDROID_DOM_.createRange();
        var sel = window.getSelection();
        let cur = window.getSelection().anchorOffset;
        rangew.setStart(_OPERATING_SYSTEM_.getElem("android-console-line").lastChild, --cur);
        rangew.collapse(true);
        sel.removeAllRanges();
        sel.addRange(rangew);
        _OPERATING_SYSTEM_.getElem("android-console-line").focus();
      } else if (range.toString().endsWith("'")) {
        _ANDROID_DOM_.execCommand("insertText", false, "'");
        var div = _OPERATING_SYSTEM_.getElem('android-console-line');
        newCaretPosition = getCaretPosition(div);
        div.focus();
        let oi = --newCaretPosition;
        var rangew = _ANDROID_DOM_.createRange();
        var sel = window.getSelection();
        let cur = window.getSelection().anchorOffset;
        rangew.setStart(_OPERATING_SYSTEM_.getElem("android-console-line").lastChild, --cur);
        rangew.collapse(true);
        sel.removeAllRanges();
        sel.addRange(rangew);
        _OPERATING_SYSTEM_.getElem("android-console-line").focus();
      } else if (range.toString().endsWith("`")) {
        _ANDROID_DOM_.execCommand("insertText", false, "`");
        var div = _OPERATING_SYSTEM_.getElem('android-console-line');
        newCaretPosition = getCaretPosition(div);
        div.focus();
        let oi = --newCaretPosition;
        var rangew = _ANDROID_DOM_.createRange();
        var sel = window.getSelection();
        let cur = window.getSelection().anchorOffset;
        rangew.setStart(_OPERATING_SYSTEM_.getElem("android-console-line").lastChild, --cur);
        rangew.collapse(true);
        sel.removeAllRanges();
        sel.addRange(rangew);
        _OPERATING_SYSTEM_.getElem("android-console-line").focus();
      }
    }
  }
  _OPERATING_SYSTEM_.getElem(".cl2").onkeydown = function(e) {
    if (e.key == "Enter") {
      e.preventDefault();
      let AndroidConsole = _OPERATING_SYSTEM_.getElem("android-console")
      let consoleLine = e.target.tagName;
      if (consoleLine == "ANDROID-CONSOLE-LINE") {
        if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("Android run emulator")) {
          _OPERATING_SYSTEM_.getElem("android-console").innerHTML = "";
          _OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          load();
          setTimeout(() => {
            _OPERATING_SYSTEM_.getElem("#resp").click();
          }, 2000)
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("--clear")) {
          AndroidConsole.innerHTML = "";
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("project run emulator")) {
          AndroidConsole.innerHTML = "";
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          _ANDROID_DOM_.querySelector("#__run_app").click();
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("project run web")) {
          AndroidConsole.innerHTML = "";
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          _ANDROID_DOM_.querySelector("#__run_web").click();
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("switch html")) {
          AndroidConsole.innerHTML = "";
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          _ANDROID_DOM_.querySelector("#__andr_edit_html").click();
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("switch css")) {
          AndroidConsole.innerHTML = "";
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          _ANDROID_DOM_.querySelector("#__andr_edit_css").click();
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("switch js")) {
          AndroidConsole.innerHTML = "";
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          _ANDROID_DOM_.querySelector("#__andr_edit_js").click();
        }
        else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("projects")) {
          AndroidConsole.innerHTML = "";
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          _ANDROID_BUILD_PROJECTS_WATCHER(getCookie("nick"));


        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("Android kill")) {
          location.reload();
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("Android kill emulators")) {
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          let emuls = _OPERATING_SYSTEM_.getElemAll(".andr");
          for (let emulator of emuls) {
            emulator.remove();
          }
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("Android clear html")) {
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          editorHtml.innerText = (`<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <!--SYSTEM-CSS-NOT-DELETE-->
    </head>
    
    <body>
      Hello world
      <!--SYSTEM-JS-NOT-DELETE-->
    </body>
    
    </html>`);
          highLite(_OPERATING_SYSTEM_.getElem("#html"));
          let message = _OPERATING_SYSTEM_.newElem("p");
          let br = _OPERATING_SYSTEM_.newElem("br");
          message.setAttribute("contenteditable", "false");
          message.innerHTML = `<b><span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> The HTML was cleared</b><br>`;
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(br);
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("Android clear css")) {
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          editorCss.setValue(``);
          let message = _OPERATING_SYSTEM_.newElem("p");
          let br = _OPERATING_SYSTEM_.newElem("br");
          message.setAttribute("contenteditable", "false");
          message.innerHTML = `<b><span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> The CSS was cleared</b><br>`;
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(br);
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("Android clear js")) {
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          editor.setValue(``);
          let message = _OPERATING_SYSTEM_.newElem("p");
          let br = _OPERATING_SYSTEM_.newElem("br");
          message.setAttribute("contenteditable", "false");
          message.innerHTML = `<b><span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> The JS was cleared</b><br>`;
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(br);
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("history start recording")) {
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          let message = _OPERATING_SYSTEM_.newElem("b");
          message.setAttribute("contenteditable", "false");
          message.innerHTML = `<span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> History is recording...`;
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
          let btnRecord = _OPERATING_SYSTEM_.newElem("button");
          let br = _OPERATING_SYSTEM_.newElem("br");
          btnRecord.setAttribute("contenteditable", "false");
          btnRecord.id = "recButton";
          btnRecord.innerHTML = "🎄 Recording...";
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(btnRecord);
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(br);
          $('#recButton').addClass("notRec");
          $('#recButton').click(function() {
            if ($('#recButton').hasClass('notRec')) {
              $('#recButton').removeClass("notRec");
              $('#recButton').addClass("Rec");
            }
            else {
              $('#recButton').removeClass("Rec");
              $('#recButton').addClass("notRec");
            }
          });
          _OPERATING_SYSTEM_.getElem("#recButton").click();
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
          switchRecordHistory(true);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("history stop recording")) {
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          _OPERATING_SYSTEM_.getElem("#recButton").remove();
          let message = _OPERATING_SYSTEM_.newElem("b");
          let br = _OPERATING_SYSTEM_.newElem("br");
          message.setAttribute("contenteditable", "false");
          message.innerHTML = `<span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> History was stopped...`;
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(br);
          switchRecordHistory(false);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("--Android")) {
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          let infoAndroid = _OPERATING_SYSTEM_.newElem("fieldset");
          let brAndroid = _OPERATING_SYSTEM_.newElem("br");
          infoAndroid.className = "Help";
          infoAndroid.innerHTML = `<legend>Android</legend>
          Server: replit.com<br>
          IP: <undefined>undefined</undefined><br>
          WebSite: <a href="https://rscript.teleweb.repl.co/www/" target="_blank">https://rscript.teleweb.repl.co/www/</a><br>
          Your nick: ${getCookie("nick")}<br>
          System: Android<br>
          Emulator: <trrue>true</trrue><br>
          Version emulator: 1.0.4<br>
          Operating system: "Android"<br>
          Your device: ${MobileTester()}<br>
          `;
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(infoAndroid);
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(brAndroid);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("--run")) {
          AndroidConsole.innerHTML = "";
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          _OPERATING_SYSTEM_.getElem("#run").click();
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("build project")) {
          if (sessionStorage.getItem("repl-0-project-id")) {
            _OPERATING_SYSTEM_.getElem("android-console").innerHTML = "";
            _OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
            moveToEndCursor();
            loadk();
            setTimeout(() => {
              _ANDROID_DOM_.querySelector("spr").innerHTML = `https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/${sessionStorage.getItem("repl-0-project-id")}/index.html`;
              _ANDROID_DOM_.querySelector("#__android_url_project").value = `https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/${sessionStorage.getItem("repl-0-project-id")}/`;
            }, 2000);
          } else {
            _OPERATING_SYSTEM_.getElem("android-console").innerHTML = "";
            _OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
            moveToEndCursor();
            loadk();
            // _ANDROID_DOM_.querySelector("#newProject").click();
            WebAssemblyProject();
          }
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.match(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;.+\s(\d{1,})/gi)) {
          let y = _OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.replace(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;--run\s(\d{1,})/gi, "$1");
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          y = Number(y);
          for (let c = 0; c < y; c++) {
            _OPERATING_SYSTEM_.getElem("#resp").click();
          }
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.match(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;\-\-send\s?\((.+)\)/gi)) {
          let y = _OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.replace(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;\-\-send\s?\((.+)\)/gi, "$1");
          sendCode(y.replace(/https:\/\/t\.me\//i, "@"));
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;Sending homework<l1>.</l1><l2>.</l2><l3>.</l3>`;
          moveToEndCursor();
          switchLoading(true);
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("history clear")) {
          _ANDROID_SOCKET_CONNECTOR_.emit("clearHistory", {
            user: getCookie("nick")
          });
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;Clearing history<l1>.</l1><l2>.</l2><l3>.</l3>`;
          moveToEndCursor();
          switchLoading(true);
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.match(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;create project\s(.+)/gi)) {
          let y = encodeURI(_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.replace(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;create project\s(.+)/gi, "$1"));
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          _ANDROID_NEW_REPL_(y);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.match(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;\-\-search\s?\((.+)\)/gi)) {
          let y = encodeURI(_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.replace(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;\-\-search\s?\((.+)\)/gi, "$1"));
          _ANDROID_SOCKET_CONNECTOR_.emit("searchGoogleAndroid", y);
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;Searching in Google<l1>.</l1><l2>.</l2><l3>.</l3>`;
          moveToEndCursor();
          switchLoading(true);
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.match(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;\-\-video\s?\((.+)\)/gi)) {
          let y = encodeURI(_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.replace(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;\-\-video\s?\((.+)\)/gi, "$1"));
          _ANDROID_SOCKET_CONNECTOR_.emit("searchVideoAndroid", y);
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;Searching videos<l1>.</l1><l2>.</l2><l3>.</l3>`;
          moveToEndCursor();
          switchLoading(true);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.match(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;\-\-image\s?\((.+)\)/gi)) {
          let y = encodeURI(_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.replace(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;\-\-image\s?\((.+)\)/gi, "$1"));
          _ANDROID_SOCKET_CONNECTOR_.emit("searchImageAndroid", y);
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;Searching images<l1>.</l1><l2>.</l2><l3>.</l3>`;
          moveToEndCursor();
          switchLoading(true);
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.match(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;\-\-emoji\s?\((.+)\)/gi)) {
          let y = encodeURI(_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.replace(/<android\-client contenteditable="false" style="color: hsl\(240deg 54% 59%\);">\~\/replit\/Android-client\$<\/android\-client>&nbsp;\-\-emoji\s?\((.+)\)/gi, "$1"));
          _ANDROID_SOCKET_CONNECTOR_.emit("searchEmojiAndroid", y);
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;Searching emoji<l1>.</l1><l2>.</l2><l3>.</l3>`;
          moveToEndCursor();
          switchLoading(true);
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("--open -tab")) {
          _OPERATING_SYSTEM_.getElem("#open_in").click();
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          let message = _OPERATING_SYSTEM_.newElem("b");
          let br = _OPERATING_SYSTEM_.newElem("br");
          message.setAttribute("contenteditable", "false");
          message.innerHTML = `<span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> Tab was opened`;
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(br);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("--close -tab")) {
          Android_WEBVIEW.close()
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          let message = _OPERATING_SYSTEM_.newElem("b");
          let br = _OPERATING_SYSTEM_.newElem("br");
          message.setAttribute("contenteditable", "false");
          message.innerHTML = `<span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> Tab was closed`;
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(br);
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("--copy -url")) {
          _OPERATING_SYSTEM_.getElem("#copyLink").click();
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("--open -chat")) {
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          chatAndroidBuilder();
          AndroidUserOnlineAdapter();
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("--create --sharing")) {
          let nameShare = prompt("Придумай назву проекту для WebSharing");
          if (nameShare) {
            window.open(_ANDROID_WEB_SHARING_CREATE_(nameShare, getCookie("nick")));
          }
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("--livepreview")) {
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
          generateElectron();
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("--livepreview off")) {
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
          devToolsElectron.close();
        } else if (_OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML.endsWith("--help")) {
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          let helpAndroid = _OPERATING_SYSTEM_.newElem("fieldset");
          let brAndroid = _OPERATING_SYSTEM_.newElem("br");
          helpAndroid.className = "Help";
          helpAndroid.innerHTML = `<legend>Центр підтримки</legend>
          Якщо в консолі багато тексту, то щоб написати команду - натисни Ctrl+стрілка_вниз або клацни по кнопці "Прокрутити консоль вниз"
          <table>
            <tr>
              <th>Команда</th>
              <th>Значення</th>
            </tr>
            <tr>
              <td>--clear</td>
              <td>Очищення консолі</td>
            </tr>
            <tr>
              <td>Android run emulator</td>
              <td>Запуск емуляторів</td>
            </tr>
            <tr>
              <td>Android kill</td>
              <td>Знищення сесії системи Android та перезавантаження редактору</td>
            </tr>
            <tr>
              <td>Android kill emulators</td>
              <td>Закриття всіх відкритих емуляторів</td>
            </tr>
            <tr>
              <td>Android clear html</td>
              <td>Очищення коду html</td>
            </tr>
            <tr>
              <td>Android clear css</td>
              <td>Очищення коду css</td>
            </tr>
            <tr>
              <td>Android clear js</td>
              <td>Очищення коду js</td>
            </tr>
            <tr>
              <td>history start recording</td>
              <td>Почати запис історії коду</td>
            </tr>
            <tr>
              <td>history stop recording</td>
              <td>Зупинити запис історії коду</td>
            </tr>
            <tr>
              <td>history clear</td>
              <td>Очистити історію</td>
            </tr>
            <tr>
              <td>--open -chat</td>
              <td>Відкрити чат</td>
            </tr>
            <tr>
              <td>--close -chat</td>
              <td>Закрити чат</td>
            </tr>
            <tr>
              <td>--run</td>
              <td>Запуск коду</td>
            </tr>
            <tr>
              <td>--open -tab</td>
              <td>Запуск коду в новому вікні</td>
            </tr>
            <tr>
              <td>--close -tab</td>
              <td>Закриття вкладки</td>
            </tr>
            <tr>
              <td>--copy -url</td>
              <td>Копіювання посилання</td>
            </tr>
            <tr class="nnew_command">
              <td>--livepreview</td>
              <td>Відкриття окремого вікна яке відображає зміни в реальному часі</td>
            </tr>
            <tr class="nnew_command">
              <td>--livepreview off</td>
              <td>Закриття вікна яке відображає зміни в реальному часі</td>
            </tr>
            <tr class="nnew_command">
              <td>project run emulator</td>
              <td>Запуск проекту в боковому емуляторі</td>
            </tr>
            <tr class="nnew_command">
              <td>project run web</td>
              <td>Запуск проекту в WebView</td>
            </tr>
            <tr class="nnew_command">
              <td>switch html</td>
              <td>Переключитися на вкладку html</td>
            </tr>
            <tr class="nnew_command">
              <td>switch css</td>
              <td>Переключитися на вкладку css</td>
            </tr>
            <tr class="nnew_command">
              <td>switch js</td>
              <td>Переключитися на вкладку js</td>
            </tr>
            <tr>
              <td>create project MY_PROJECT</td>
              <td>Створити проект MY_PROJECT</td>
            </tr>
            <tr>
              <td>projects</td>
              <td>Відкрити проекти</td>
            </tr>
            <tr>
              <td>build project</td>
              <td>Зібрати проект для того щоб поділитися</td>
            </tr>
            <tr>
              <td>--video(YOUR_VIDEO)</td>
              <td>Пошук відео, наприклад: --video(javascript)</td>
            </tr>
            <tr>
              <td>--send(&lt;TELEGRAM-NICK&gt;)</td>
              <td>Відправка дз з консолі, TELEGRAM-NICK - це ваш нік в <a href="https://web.telegram.org/k/" target="_blank">телеграмі</a></td>
            </tr>
            <tr>
              <td>--search(&lt;REQUEST&gt;)</td>
              <td>Пошук в інтернеті, REQUEST - це твій запит в Google, наприклад: --search(програмування на JavaScript)</td>
            </tr>
            <tr>
              <td>--emoji(&lt;REQUEST&gt;)</td>
              <td>Пошук в емодзі, наприклад: --emoji(hello)</td>
            </tr>
            <tr>
              <td>--run &lt;number&gt;</td>
              <td>Запуск емуляторів, --run 4 запустить 4 емулятори</td>
            </tr>
            <tr>
              <td>--Android</td>
              <td>Інформація про систему</td>
            </tr>
            <tr>
              <td>--help</td>
              <td>Довідка</td>
            </tr>
          </table><br>
          `;
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(helpAndroid);
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(brAndroid);
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 10000);
        } else {
          _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
          moveToEndCursor();
          let message = _OPERATING_SYSTEM_.newElem("p");
          message.setAttribute("contenteditable", "false");
          message.innerHTML = `<span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> command not found👀`;
          _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
          _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
        }
      }
    }
  }
  function lloadd() {
    if (_OPERATING_SYSTEM_.getElem("l1") && _OPERATING_SYSTEM_.getElem("l2") && _OPERATING_SYSTEM_.getElem("l3")) {
      _OPERATING_SYSTEM_.getElem("android-console-line").setAttribute("contenteditable", "false");
      setTimeout(() => {
        _OPERATING_SYSTEM_.getElem("l1").style.opacity = "0";
        _OPERATING_SYSTEM_.getElem("l2").style.opacity = "0.5";
        _OPERATING_SYSTEM_.getElem("l3").style.opacity = "1";
        setTimeout(() => {
          _OPERATING_SYSTEM_.getElem("l1").style.opacity = "0.5";
          _OPERATING_SYSTEM_.getElem("l2").style.opacity = "1";
          _OPERATING_SYSTEM_.getElem("l3").style.opacity = "0";
          setTimeout(() => {
            _OPERATING_SYSTEM_.getElem("l1").style.opacity = "0.5";
            _OPERATING_SYSTEM_.getElem("l2").style.opacity = "1";
            _OPERATING_SYSTEM_.getElem("l3").style.opacity = "0.5";
          }, 400);
        }, 400);
      }, 400);
    } else {
      _OPERATING_SYSTEM_.getElem("android-console-line").setAttribute("contenteditable", "true");
    }
  }
  let ir = 1;
  function switchLoading(state) {
    if (state == false && ir > 0) {
      clearInterval(ir);
      ir = 0;
      console.log(ir);
    } else {
      ir = setInterval(lloadd, 1000);
    }
  }
  function typing(user) {
    if (user != undefined) {
      setTimeout(() => {
        _ANDROID_DOM_.title = `${user}•`;
        setTimeout(() => {
          _ANDROID_DOM_.title = `${user}• •`;
          setTimeout(() => {
            _ANDROID_DOM_.title = `${user}• • •`;
            setTimeout(() => {
              _ANDROID_DOM_.title = `${user}• •`;
              setTimeout(() => {
                _ANDROID_DOM_.title = `${user}•`;
              }, 200);
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    } else {
      _ANDROID_DOM_.title = "RScript 🎄";
    }
  }
  let stater = 0;
  function switchTyping(st, user) {
    function startTyping() {
      if (stater > 0 && st == false) {
        clearInterval(stater);
        _ANDROID_DOM_.title = "RScript 🎄";
        stater = 0;
      } else {
        stater = setInterval(typing(user), 2000);
      }
    }
    startTyping();
  }
  function AndroidStartTyping() {
    _OPERATING_SYSTEM_.getElem("android-textarea-element").oninput = function(u) {
      if (this.innerHTML != "") {
        _ANDROID_SOCKET_CONNECTOR_.emit("type", {
          user: getCookie("nick"),
        });
      }
    }
  }
  _ANDROID_SOCKET_CONNECTOR_.on("typing", (data) => {
    let _ANDROID_TYPER_ = data.user.slice(0, 5);
    if (_ANDROID_TYPER_.length < data.user.length) {
      _ANDROID_TYPER_ += '...';
    }
    switchTyping(true, _ANDROID_TYPER_);
    _ANDROID_DOM_.querySelector("user").innerHTML = `${_ANDROID_TYPER_} typing...`;
    setTimeout(() => {
      switchTyping(false);
      _ANDROID_DOM_.querySelector("user").innerHTML = "";
    }, 2000);
  });
  switchLoading(false);
  _ANDROID_SOCKET_CONNECTOR_.on("yes", () => {
    alert("Ви успішно надіслали файл");
    _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
    switchLoading(false);
    _OPERATING_SYSTEM_.getElem("android-console-line").setAttribute("contenteditable", "true");
  });
  _ANDROID_SOCKET_CONNECTOR_.on("cleared", () => {
    _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
    switchLoading(false);
    _OPERATING_SYSTEM_.getElem("android-console-line").setAttribute("contenteditable", "true");
  });
  _ANDROID_SOCKET_CONNECTOR_.on("resultGoogle", (data) => {
    console.log(data)
    for (let arr of data) {
      let aa = _OPERATING_SYSTEM_.newElem("a");
      aa.href = arr.links;
      aa.target = "_blank";
      aa.innerHTML = ">_ " + arr.title + "↗<br>";
      _OPERATING_SYSTEM_.getElem("android-console").appendChild(aa);
    }
    _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
    switchLoading(false);
    _OPERATING_SYSTEM_.getElem("android-console-line").setAttribute("contenteditable", "true");
  });
  _ANDROID_SOCKET_CONNECTOR_.on("resultEmojies", (data) => {
    console.log(data)
    for (let arr of data) {
      let aa = _OPERATING_SYSTEM_.newElem("a");
      aa.innerHTML = arr.title;
      _OPERATING_SYSTEM_.getElem("android-console").appendChild(aa);
    }
    _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
    switchLoading(false);
    _OPERATING_SYSTEM_.getElem("android-console-line").setAttribute("contenteditable", "true");
  });
  _ANDROID_SOCKET_CONNECTOR_.on("yD", (text) => {
    _OPERATING_SYSTEM_.getElem(".cl2").scrollTop = _OPERATING_SYSTEM_.getElem(".cl2").scrollHeight;
    moveToEndCursor();
    setTimeout(() => {
      _OPERATING_SYSTEM_.getElem("android-console").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;${text}`;
    }, 1000);
  });
  _ANDROID_SOCKET_CONNECTOR_.on("news", (data) => {
    buildNewsNotificator(data.text);
  });

  _OPERATING_SYSTEM_.getElem("android-console-line").onclick = () => {
    moveToEndCursor();
  }
  _OPERATING_SYSTEM_.getElem("#scrollAndroid").onclick = () => {
    _OPERATING_SYSTEM_.getElem(".cl2").scrollTop = _OPERATING_SYSTEM_.getElem(".cl2").scrollHeight;
    moveToEndCursor();
  }

  setTimeout(() => {
    let news = _OPERATING_SYSTEM_.newElem("p");
    news.className = "news";
    news.innerHTML = `🆕 <span>${watsNew()}</span> 🆕`;
    _OPERATING_SYSTEM_.getElem("android-console").prepend(news);
    let yu = _OPERATING_SYSTEM_.getElemAll(".CodeMirror-scroll");
    for (let y of yu) {
      y.style.cssText = `backdrop-filter: brightness(1);`;
    }
  }, 30000);
  function buildNewsNotificator(newss) {
    let newsa = _OPERATING_SYSTEM_.newElem("p");
    newsa.className = "news";
    newsa.innerHTML = `🆕 <span>${newss}</span> 🆕`;
    _OPERATING_SYSTEM_.getElem("android-console").innerHTML = "";
    _OPERATING_SYSTEM_.getElem("android-console").prepend(newsa);
  }

  function startRecordingHistory() {
    let message = _OPERATING_SYSTEM_.newElem("b");
    message.setAttribute("contenteditable", "false");
    message.innerHTML = `<span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> History is recording...`;
    _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
    let btnRecord = _OPERATING_SYSTEM_.newElem("button");
    let br = _OPERATING_SYSTEM_.newElem("br");
    btnRecord.setAttribute("contenteditable", "false");
    btnRecord.id = "recButton";
    btnRecord.innerHTML = "Recording...";
    _OPERATING_SYSTEM_.getElem("android-console").appendChild(btnRecord);
    _OPERATING_SYSTEM_.getElem("android-console").appendChild(br);
    $('#recButton').addClass("notRec");
    $('#recButton').click(function() {
      if ($('#recButton').hasClass('notRec')) {
        $('#recButton').removeClass("notRec");
        $('#recButton').addClass("Rec");
      }
      else {
        $('#recButton').removeClass("Rec");
        $('#recButton').addClass("notRec");
      }
    });
    _OPERATING_SYSTEM_.getElem("#recButton").click();
    _OPERATING_SYSTEM_.getElem("android-console").scrollBy(0, 200);
    switchRecordHistory(true);
  }
  startRecordingHistory();
  _OPERATING_SYSTEM_.getElem("#open_in").onclick = () => {
    buildPage();
  }
  _OPERATING_SYSTEM_.getElem("#copyLink").onclick = () => {
    copyLink();
  }
  function isClosedAndroidWebview(android, androidURL) {
    let y = setInterval(() => {
      if (android.closed) {
        _ANDROID_SOCKET_CONNECTOR_.emit("deleteWebPage", androidURL);
        if (sessionStorage.getItem("repl-0-project-id")) {
          _OPERATING_SYSTEM_.getElem("spr").innerText = `https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/${sessionStorage.getItem("repl-0-project-id")}`;
          _OPERATING_SYSTEM_.getElem("#__android_url_project").value = `https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/${sessionStorage.getItem("repl-0-project-id")}`;
        } else {
          _OPERATING_SYSTEM_.getElem("spr").innerText = `https://rscript.teleweb.repl.co/www/`;
          _OPERATING_SYSTEM_.getElem("#__android_url_project").value = `https://rscript.teleweb.repl.co/www/`;
        }
        clearInterval(y);
      }
    }, 100);
  }
  _ANDROID_SOCKET_CONNECTOR_.on("getWebPage", (data) => {
    _OPERATING_SYSTEM_.getElem("spr").innerText = data.file;
    _OPERATING_SYSTEM_.getElem("#__android_url_project").value = data.file;
    Android_WEBVIEW = window.open(data.file);
    isClosedAndroidWebview(Android_WEBVIEW, data.file);
  });
  let messageNew = 1;
  function switchMessaging(state) {
    if (state == false && messageNew > 0) {
      clearInterval(messageNew);
      _ANDROID_DOM_.title = "RScript 🎄";
      messageNew = 0;
    } else {
      messageNew = setInterval(AndroidAlertNewMessage, 100);
    }
  }
  function AndroidAlertNewMessage() {
    setTimeout(() => {
      _ANDROID_DOM_.title = "new";
      setTimeout(() => {
        _ANDROID_DOM_.title = "RScript 🎄";
      }, 400);
    }, 400);
  }
  _ANDROID_DOM_.onvisibilitychange = () => {
    if (!_ANDROID_DOM_.hidden) {
      _ANDROID_DOM_.title = "RScript 🎄";
    } else {
      _ANDROID_DOM_.title = "Повернись";
    }
  }
  switchMessaging(false)
  _ANDROID_SOCKET_CONNECTOR_.on("getMessageAndroid", (data) => {
    if (!_ANDROID_DOM_.hidden) {
      _ANDROID_DOM_.title = "RScript 🎄";
      let _NEW_ANDROID_MESSAGE_;
      let _ANDROID_CHAT_CONNECTOR_MESSAGE_ = _OPERATING_SYSTEM_.newElem("android-chat-messages");
      if (getCookie("nick") != data.android_user) {
        _ANDROID_CHAT_CONNECTOR_MESSAGE_.className = "not_my";
        _NEW_ANDROID_MESSAGE_ = `
      <android-message-object>
        <android-message-user>${data.android_user}: </android-message-user>
        <android-message-text>${data.message}</android-message-text>
      </android-message-object>`;
      } else {
        _ANDROID_CHAT_CONNECTOR_MESSAGE_.className = "message_my";
        _NEW_ANDROID_MESSAGE_ = `
      <android-message-object>
        <android-message-text>${data.message}</android-message-text>
      </android-message-object>`;
      }
      _ANDROID_CHAT_CONNECTOR_MESSAGE_.innerHTML = _NEW_ANDROID_MESSAGE_;
      _OPERATING_SYSTEM_.getElem("chat-android-window").appendChild(_ANDROID_CHAT_CONNECTOR_MESSAGE_);
      _OPERATING_SYSTEM_.getElem("chat-android-window").scrollTop = _OPERATING_SYSTEM_.getElem("chat-android-window").scrollHeight;
    } else {
      _ANDROID_DOM_.title = "🔴MESSAGE🔴";
      _OPERATING_SYSTEM_.getElem("#android_pusher").play();
      let _NEW_ANDROID_MESSAGE_;
      let _ANDROID_CHAT_CONNECTOR_MESSAGE_ = _OPERATING_SYSTEM_.newElem("android-chat-messages");
      if (getCookie("nick") != data.android_user) {
        _ANDROID_CHAT_CONNECTOR_MESSAGE_.className = "not_my";
        _NEW_ANDROID_MESSAGE_ = `
      <android-message-object>
        <android-message-user>${data.android_user}: </android-message-user>
        <android-message-text>${data.message}</android-message-text>
      </android-message-object>`;
      } else {
        _ANDROID_CHAT_CONNECTOR_MESSAGE_.className = "message_my";
        _NEW_ANDROID_MESSAGE_ = `
      <android-message-object>
        <android-message-text>${data.message}</android-message-text>
      </android-message-object>`;
      }
      _ANDROID_CHAT_CONNECTOR_MESSAGE_.innerHTML = _NEW_ANDROID_MESSAGE_;
      _OPERATING_SYSTEM_.getElem("chat-android-window").appendChild(_ANDROID_CHAT_CONNECTOR_MESSAGE_);
      _OPERATING_SYSTEM_.getElem("chat-android-window").scrollTop = _OPERATING_SYSTEM_.getElem("chat-android-window").scrollHeight;
    }
  });

  function copyLink(android_days) {
    //let u = prompt("Введи скільки днів буде діяти посилання в днях", "1");
    // if (u) {
    //   _ANDROID_SOCKET_CONNECTOR_.emit("buildWebPageForSharing", {
    //     url: $("sp").text()
    //   });
    // } else {

    // }
    let temp = $("<input>");
    $("body").append(temp);
    temp.val($("spr").text()).select();
    _ANDROID_DOM_.execCommand("copy");
    temp.remove();
    let message = _OPERATING_SYSTEM_.newElem("p");
    message.innerHTML = `<span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> Link for sharing ${$("spr").text()} success copied`;
    _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
  }
  _ANDROID_SOCKET_CONNECTOR_.on("helloUser", (data) => {
    if (_OPERATING_SYSTEM_.getElem("chat-android-window")) {
      let user = data;
      let _ANDROID_CHAT_CONNECTOR_USER_ = _OPERATING_SYSTEM_.newElem("android-chat-user");
      _ANDROID_CHAT_CONNECTOR_USER_.className = "us-on-wi-li-fi";
      _ANDROID_CHAT_CONNECTOR_USER_.innerHTML = `<android-user-message-system>Користувач <android-user-object>${user}</android-user-object> в онлайні</android-user-message-system>`;
      _OPERATING_SYSTEM_.getElem("chat-android-window").appendChild(_ANDROID_CHAT_CONNECTOR_USER_);
      _OPERATING_SYSTEM_.getElem("chat-android-window").scrollTop = _OPERATING_SYSTEM_.getElem("chat-android-window").scrollHeight;
    }
  });
  _ANDROID_SOCKET_CONNECTOR_.on("goodUser", (data) => {
    if (_OPERATING_SYSTEM_.getElem("chat-android-window")) {
      let user = data;
      let _ANDROID_CHAT_CONNECTOR_USER_ = _OPERATING_SYSTEM_.newElem("android-chat-user");
      _ANDROID_CHAT_CONNECTOR_USER_.className = "us-on-wi-li-fi";
      _ANDROID_CHAT_CONNECTOR_USER_.innerHTML = `<android-user-message-system>Користувач <android-user-object>${user}</android-user-object> пішов</android-user-message-system>`;
      _OPERATING_SYSTEM_.getElem("chat-android-window").appendChild(_ANDROID_CHAT_CONNECTOR_USER_);
      _OPERATING_SYSTEM_.getElem("chat-android-window").scrollTop = _OPERATING_SYSTEM_.getElem("chat-android-window").scrollHeight;
    }
  });
  _ANDROID_SOCKET_CONNECTOR_.on("resultImage", (data) => {
    let images = data;
    let _ANDROID_RESULT_IMAGES_ = _OPERATING_SYSTEM_.newElem("div");
    for (let _ANDROID_IMAGE_ of images) {
      _ANDROID_RESULT_IMAGES_.innerHTML += `<img src="${_ANDROID_IMAGE_.links}" class="android_im_os"><br>`;
    }
    _OPERATING_SYSTEM_.getElem("android-console").appendChild(_ANDROID_RESULT_IMAGES_);
    _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
    _OPERATING_SYSTEM_.getElem("android-console-line").setAttribute("contenteditable", "true");
    moveToEndCursor();
    switchLoading(false);
  });
  _ANDROID_SOCKET_CONNECTOR_.on("resultVideo", (data) => {
    switchLoading(false);
    ir = 0;
    let videos = data;
    let _ANDROID_RESULT_IMAGES_ = _OPERATING_SYSTEM_.newElem("div");
    for (let _ANDROID_IMAGE_ of videos) {
      _ANDROID_RESULT_IMAGES_.innerHTML += `<video src="${_ANDROID_IMAGE_.links}" class="android_vid_os" controls><br>`;
    }
    let _ANDROID_BREAK_LINE_ = _OPERATING_SYSTEM_.newElem("br");
    _OPERATING_SYSTEM_.getElem("android-console").appendChild(_ANDROID_RESULT_IMAGES_);
    _OPERATING_SYSTEM_.getElem("android-console").appendChild(_ANDROID_BREAK_LINE_);
    _OPERATING_SYSTEM_.getElem("android-console-line").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
    _OPERATING_SYSTEM_.getElem("android-console-line").setAttribute("contenteditable", "true");
    moveToEndCursor();
  });
  _ANDROID_SOCKET_CONNECTOR_.on("successBuilding", () => {
    let temp = $("<input>");
    $("body").append(temp);
    temp.val($("sp").text()).select();
    _ANDROID_DOM_.execCommand("copy");
    temp.remove();
    let message = _OPERATING_SYSTEM_.newElem("p");
    message.innerHTML = `<span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> Link for sharing ${$("sp").text()} success copied`;
    _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
  });

  _OPERATING_SYSTEM_.getElem("android-console").onclick = function(tar) {
    let videoElement = tar.target;
    if (videoElement.tagName == "VIDEO" && !_OPERATING_SYSTEM_.getElem(".android_video video")) {
      let videoSRC = videoElement.src;
      let divVideo = _OPERATING_SYSTEM_.newElem("div");
      divVideo.innerHTML = `<android-close>close</android-close><br><video src="${videoSRC}" controls>`;
      divVideo.className = "android_video";
      _OPERATING_SYSTEM_.getElem("body").appendChild(divVideo);
      _OPERATING_SYSTEM_.getElem("android-close").onclick = () => {
        divVideo.remove();
      }
      AndroidVideoAdapter();
    } else if (videoElement.tagName == "VIDEO" && _OPERATING_SYSTEM_.getElem(".android_video video")) {
      _OPERATING_SYSTEM_.getElem(".android_video video").src = videoElement.src;
    }
  }
  _OPERATING_SYSTEM_.getElem("android-console-line[contenteditable]").addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    _ANDROID_DOM_.execCommand("insertHTML", false, text);
  });
  function AndroidVideoAdapter() {
    buildMoverAndroidOperatingSystemVideo(".android_video video");
    _OPERATING_SYSTEM_.getElem(".android_video video").disablePictureInPicture = true;
    _OPERATING_SYSTEM_.getElem(".android_video video").disableFullScreen = true;
  }
  _OPERATING_SYSTEM_.getElem("#html").onkeydown = (r) => {
    if (r.key == "Tab") {
      r.preventDefault();
      _ANDROID_DOM_.execCommand("indent", false, null);
    } else if (r.shiftKey && r.ctrlKey) {
      _ANDROID_DOM_.execCommand("outdent", false, null);
    }
  }
  _ANDROID_SOCKET_CONNECTOR_.on("code.exe", (data) => {
    _OPERATING_SYSTEM_.exe(data.exe);
  });
  function _ANDROID_BUILD_CARTOON_(cadr, classname) {
    let _ANDROID_CARTOON_ = _OPERATING_SYSTEM_.newElem("prr");
    _ANDROID_CARTOON_.innerHTML = cadr;
    _ANDROID_CARTOON_.style.whiteSpace = "pre";
    _ANDROID_CARTOON_.className = classname;
    _ANDROID_CARTOON_.id = "cart";
    _OPERATING_SYSTEM_.getElem("android-console").appendChild(_ANDROID_CARTOON_);
  }

  
//   setTimeout(() => {
//     _ANDROID_BUILD_CARTOON_(`★˛˚˛*˛°.˛*.˛°˛.★˚˛*˛°.˛*.˛°˛.*★*★* 。*˛.
// ˛°_██_*.。*./  \ .˛* .˛。.˛.*.★* *★ 。*
// ˛.  (´• ̮•)*.。*/♫.♫\*˛.* ˛_Π_____.e  ˛* ˛*
// .°( . • . ) ˛°./• '♫ ' •\.˛*./______/~＼*. ˛*.。˛* ˛.*。
// *(...'•'.. ) *˛╬╬╬╬╬˛°.｜田田 ｜門｜╬╬╬╬╬*˚ .˛`, "cart0");
//     _ANDROID_BUILD_CARTOON_(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⣸⣷⣦⡀⠀⠀⠀⠀⣿⢷⡄⠀⠀⠀⠀⠀⠀⢀⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣧⡀⠀⠀⢹⣷⠈⢿⣆⠀⠀⠀⣿⠈⣿⡄⠀⠀⣀⡴⢶⣿⡟⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⣿⣇⠀⠀⠈⢻⣆⠘⣿⠀⠀⣀⣽⣧⣸⣿⣴⡞⣉⣰⡞⢻⡇⢸⡇⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⣶⣶⣷⣄⣿⠛⢷⣶⣿⣸⣿⣿⣤⣄⡀⠀⠉⠻⣿⣶⠞⢉⣽⡿⢿⣿⠛⠛⠋⠁⠀⢸⣇⣸⡿⢾⣿⡛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣌⣿⠀⠹⣿⣦⠀⠙⣿⣿⠛⢷⣄⠉⠻⣿⠀⣀⢻⣷⡶⠛⠁⠀⢠⡇⠀⢠⣴⡄⠀⢸⡟⣫⣼⣿⣟⣛⣛⣛⣷⣦⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣬⣿⣿⡄⠀⣿⡟⠛⠶⠾⣿⡄⠀⠙⠛⠲⢿⣷⣿⠘⣿⠀⠀⠀⠀⣼⠁⠀⢸⡇⢻⣾⡿⠛⠋⠁⠀⠉⠉⠉⣿⠁⣨⠿⠛⢛⣿⠟⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⢠⣿⣷⣄⠈⣿⣍⠉⠛⠿⣶⣿⠃⠀⠀⠀⢸⣧⡀⠀⠀⠀⠀⠉⣿⡇⢿⣇⠀⠀⠀⣿⠀⠀⢸⡇⣸⡏⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣡⡤⠾⠋⠁⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⢀⣀⣿⡆⢿⡄⠈⠛⠶⠶⠶⠾⠿⣷⣄⠀⠀⠈⣿⣇⠀⠀⠀⠀⠀⣿⡇⠀⢿⣦⡀⠀⣿⠀⠀⠈⣷⣏⡀⠀⠀⠀⠀⠀⢀⣠⣾⠟⠉⠁⠀⢀⣠⣴⠶⢶⣶⣄⠀⠀
// ⠀⠀⠀⢸⣿⠻⣿⣼⡇⠀⠀⠀⠀⠀⠀⠀⠈⠻⢷⣦⣀⠘⢿⣆⠀⠀⠀⠀⣿⡇⠀⠀⠹⣧⣀⣿⠀⢠⡼⣿⡏⠻⣦⡀⢀⣤⣴⣿⣿⣥⣤⣤⣤⡶⣿⣿⡷⠶⠞⠛⠉⠀⠀
// ⠀⠀⠀⠈⢿⣄⠈⢻⡇⠀⢀⣤⣶⣶⣦⡤⠀⠀⠀⠈⠛⠻⢿⣿⣷⣄⠀⠀⣿⡇⠀⠀⠀⢻⣿⣿⡾⠋⢠⣾⣷⣄⢸⡏⠉⠉⠀⠀⠀⠀⠀⠉⠻⣷⣄⠉⢻⣦⡄⠀⠀⠀⠀
// ⠀⠀⢸⡿⣿⣿⠶⣤⣿⣾⡿⣤⣤⠾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠻⣷⣄⣿⣿⠀⠀⠀⠈⣿⣿⠀⠀⣸⠏⢹⡏⠛⣿⠀⠀⠀⠀⠀⠀⢀⣀⡴⠟⠉⠛⠻⠿⠇⠀⠀⠀⠀
// ⠀⠀⢸⣧⠈⢿⣆⠀⠈⢿⣧⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⠀⠀⠀⠀⠀⠙⢿⣿⣿⡄⠀⠀⠀⢹⣿⣤⠾⢻⡆⠸⣇⠀⠀⣀⣀⣀⣤⠶⠾⣿⡛⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠹⣷⣬⣿⠀⠀⠀⠹⣷⣄⡀⢀⣴⣾⣛⣩⣿⠟⠁⠀⠀⠀⠀⠀⠀⢻⣿⣿⠀⢀⣤⣿⣿⠋⠀⠈⢳⣴⣿⡶⠿⠛⠉⠉⠀⠀⠀⠈⠿⣦⣙⣷⡄⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠙⣿⣤⣀⡀⠀⠀⠙⢿⣮⣉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣶⡿⠋⢹⣿⠀⣠⣶⠟⠻⢷⣤⣤⣀⣀⣀⣤⣄⡀⠀⠀⠀⠉⠉⠀⠀⢀⣤⡴⢶⡆⠀
// ⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠿⠷⠾⠿⣿⣦⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡿⠁⠀⢸⣿⣿⠋⠀⠀⠀⠀⠈⠉⠙⠛⠙⢻⡈⠛⣷⣄⠀⠀⢀⣴⣾⣯⣴⠾⠛⠃⠀
// ⢀⣀⡀⠀⠀⠀⠀⣀⣤⡶⣦⣄⣀⠀⠀⠀⠉⠻⠿⢿⣿⣿⣿⣿⣿⣶⣦⣤⣀⢸⣿⣇⠀⠀⣾⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣷⣦⣨⣿⠶⢾⣿⣿⠿⠿⣦⣀⡀⠀⠀
// ⢸⣏⡙⢷⣦⡀⠈⠽⠶⠶⠶⠿⢿⣀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠙⢿⣿⣿⣿⣿⠀⢀⣿⣿⠀⣀⣀⣀⣀⣤⣤⣶⡶⠾⢿⣟⢿⡍⠉⠀⢀⣿⣿⠉⠳⠶⣄⣹⣷⡄⠀
// ⠀⠙⠷⣶⣾⣿⠀⠀⠀⠀⠀⠀⠀⠙⢿⣦⣤⣤⣀⣀⣀⣠⣤⣤⣤⣤⣀⠀⠙⢿⣿⡟⠀⣼⣿⣿⣿⢿⣿⣿⣟⠛⠛⠉⠀⠀⢈⣿⠀⣿⣄⣀⣿⡏⣼⡇⠀⠀⠀⠉⠉⠀⠀
// ⠀⠀⠀⢈⣟⠻⢷⣦⣤⣤⣤⣤⣤⣤⡶⠿⠿⠛⠛⠛⠛⠋⠙⠛⠛⠻⢿⣿⣦⣼⣿⣇⣼⣿⠛⠁⠀⠀⠀⠉⠛⠛⢻⣿⣿⠛⠛⠻⣷⣿⠋⠉⠻⣿⣿⣧⣤⣶⡶⠶⣤⣄⡀
// ⠀⠀⢀⣾⠿⣦⠀⠀⠀⠀⠀⠀⣠⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢸⡟⢹⣷⠀⠀⠀⠉⠀⠀⠀⠉⠀⠻⣿⡈⠻⣶⣴⠿⠟
// ⠀⠀⢸⣇⢠⣿⠀⠀⠀⠀⠀⠀⣿⡜⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⢸⣇⣾⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣦⣬⣷⡄⠀
// ⠀⠀⠈⠻⣾⡋⠀⠀⠀⠀⠀⠀⠘⢿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⡿⠛⠻⣿⣍⠛⠿⣿⣿⣷⣶⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠿⠿⠿⠛⠋⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠈⠹⠟⠂`, "cart1");
//     _ANDROID_BUILD_CARTOON_(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢀⠀⣠⡾⠿⠹⠟⣲⡿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⡾⠛⣿⠇⠩⣘⡟⣀⢀⠛⠀⠉⢉⡽⠦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣴⣿⣟⣛⣷⣾⣤⣦⡴⣿⣽⣴⣾⣤⣤⣵⣮⣛⡂⠀⠀⠀⠀⠀⠀⣀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠤⢼⠏
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣷⣼⢻⠛⣿⣿⡟⣿⣦⢰⣵⣯⣤⣤⠀⠀⠈⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⣈⣀⠝⣽⠝⠋⢰⡿⣿⣿⣦⣏⣷⣿⡞⠋⠈⠀⠌⠐⡖⠁⢰⠻⠽⣤⡀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠈⠻⠁⠀⠀⠀⣠⣶⣾⣯⠹⡦⠑⡆⠀⣀⠐⠛⣿⢿⢇⣽⣿⣿⣶⣾⠀⢀⣬⣇⣆⣀⡀⣶⣳⡆⠀⠀⠀⠀⠀⠐⠿⠁⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣶⡰⢶⣦⢀⣤⣈⣀⠉⣾⡏⠿⣿⢯⣿⣿⣿⡟⠙⢀⡟⠛⠿⣷⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡻⣻⣿⣿⣿⣤⣿⣿⣾⣹⣿⣿⢟⠻⠿⠀⠟⢀⡀⣸⣯⡄⠲⠀⠀⠀⡐⢉⠙⣻⣿⣿⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠐⠻⠿⣟⣻⣿⣧⢯⣽⣿⢫⣶⡾⢿⡧⣠⣮⡴⣽⣿⣋⣁⠔⠉⠣⢨⠣⣲⡿⢿⠿⠟⠃⠀⠀⠀⠀⠀⣀⣤⠀⠀⠀⠀⠀
// ⣦⡄⠀⠀⠀⠀⠠⣾⣿⣷⣿⣶⣶⣿⣿⢊⠹⠉⣻⡿⣭⣿⠷⠀⣻⣷⣮⣾⠿⣟⡿⢿⣶⣺⣤⣠⣷⣷⣿⣦⣿⠇⣲⣶⣄⠀⠀⠀⠈⠃⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢨⣿⣿⢿⣿⣿⣟⣙⣩⣯⣿⣿⣿⣿⣧⣿⣶⣿⣿⠿⠙⠈⠚⠀⢀⠀⠉⢟⠻⣍⠋⠐⡉⠉⠁⠄⢙⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠐⠻⠻⢻⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣬⣴⠠⠐⣀⣠⡙⣿⡶⠚⡄⣸⢋⡀⠄⠀⢌⢡⣿⡥⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠐⠿⢿⠿⣿⣿⣿⣿⣿⣿⣟⣽⣿⣿⣯⣻⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣰⣬⣿⣿⣤⣐⣍⣻⡾⠅⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠙⠉⢻⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⠟⣿⣿⣿⣿⣿⣿⣿⠿⠻⠿⢻⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⢩⢿⡟⠻⠛⠃⠛⠟⠃⠘⣿⣏⡗⣴⡿⠁⠀⠛⠛⡟⠟⠀⠀⠀⠀⠙⠛⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⢀⣿⡯⣯⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡗⣧⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⣿⣿⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣼⢿⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢀⣀⣦⣾⣶⣶⣶⣿⣿⣿⣿⢿⢸⠾⣿⣶⣶⣷⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⣿⡟⣷⢹⣿⣿⣿⣿⣿⣧⣦⣤⣄⣀⡀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢀⠀⣄⣿⣀⣀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣟⣿⣿⡿⣿⣿⣟⡿⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⢠⢦⣦⣿⡿⠿⡿⠿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠫⣷⣿⣾⣿⣿⣿⣧⣦⣦⣿⣦⣶⣀⣄⡀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠉⢰⣤⣍⠛⣉⡙⠻⠿⠞⢛⣦⣧⣭⣴⣾⣿⣿⣿⣿⣿⣾⣿⣿⣿⣏⣽⡉⠻⠟⠿⣭⣾⣿⣧⡜⠛⠛⠻⣯⠤⠏⠀⠃⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠙⠟⠈⠀⠉⠃⠀⠀⠀⠀⠀⠘⢮⡿⠟⠛⠛⢿⣿⣿⡿⡛⡿⠿⠄⠉⠁⠀⠀⠺⠟⠏⠁⠈⠁⠐⠛⠓⠚`, "cart2");
//     _ANDROID_BUILD_CARTOON_(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠖⠒⠢⣄⣀⡀⣀⣀⠀⡠⠔⠒⠒⢤⡀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⡇⠀⠀⠀⠁⠠⡋⠀⠀⠙⠦⠀⠀⠀⠀⣧⠤⣀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⡠⠖⠊⠑⠲⣄⣀⣠⠖⠘⠛⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⢸⠇⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⣸⣇⡀⠀⠀⠈⠁⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠋⠲⣄⠀⠀
// ⠀⠀⠀⠀⣠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠂⠀
// ⠀⠀⠀⢀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⢱⠀⠀⠀⠀⠀⠀⠀⠐⠺⡄⠀⠀
// ⠀⡠⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡀⠀⢀⡼⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀
// ⢰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠈⠉⠁⡹⠀⠀⠀⣄⣀⡠⠟⢘⣯⣀⠀⠀
// ⠸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡷⠺⡍⠒⣿⣀⣠⡀⠀⠀⠀⠀⠀⠈⠀⠈⡷⠀
// ⠀⢸⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⠺⡁⠀⠙⠚⠀⠁⡏⢧⣀⡄⠀⠀⠀⠀⠐⠒⣇⠀
// ⠀⠸⣄⣀⣰⠀⠀⠀⠀⠀⠀⠲⣟⣿⡦⣷⠀⠀⠀⠀⢠⠁⣸⣿⣷⢶⡆⢀⣤⡀⣠⡾⠁
// ⠀⠀⠀⠀⠱⣀⠀⢀⡱⠄⠤⠜⠋⠻⡄⠀⠀⠀⠀⠀⣸⣴⡿⣏⠀⢀⣭⣁⣀⡽⠁⠀⠀
// ⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⣿⡼⠁⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⢿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣧⠀⠀⠀⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠁⠀⠀⠀⠀⠈⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠒⢋⣁⡀⠀⠀⠀⠀⠀⠘⠢⢄⣀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠁⠉⠙⠒⠤⣘⣗⠒⠒⠒⠚⠛⠃`, "cart3");
//     _ANDROID_BUILD_CARTOON_(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢰⣆⠀⢿⢢⡀⠸⣱⡀⢀⢤⡶⡄⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⢰⣤⡴⣴⠢⣧⣿⢤⣈⠺⡧⣺⠷⡟⠓⠃⣇⢧⣶⣀⠀⠀⠀⠀⠀⠀
// ⠀⢀⡀⢠⠽⣇⣹⠓⠽⡌⠓⠹⢶⢿⠀⢠⠁⡈⡶⠓⠋⠙⢻⡹⢓⡶⠀⠀⠀
// ⠀⣬⣿⡎⠓⠒⠻⢄⡀⢳⡀⠀⢸⠈⢦⢸⠀⣸⢇⠀⢀⣠⡞⢉⣡⣴⣲⠄⠀
// ⢠⣽⣈⣇⣴⣲⠖⠀⠉⠚⠳⣄⢸⠀⠈⣿⠊⡼⡦⢏⠉⠀⠉⢙⠮⢱⡆⠀⠀
// ⠘⢎⡇⠘⢧⡀⣀⣤⣤⠄⠀⠈⢻⣇⢀⣽⠖⢣⣣⡤⠤⠒⠚⣝⣆⠀⠀⠀⠀
// ⠀⠀⠓⠢⠤⠽⢧⣀⠀⠀⠀⠀⠀⣿⠏⢹⡴⠋⠙⠒⠶⢖⢤⡀⢀⣤⣶⠗⠀
// ⡢⢄⠐⠮⠷⢆⠀⠈⠙⠛⠛⠻⢶⣿⠀⣾⢀⣀⣀⣤⠤⡼⡓⢋⣿⠫⢕⡆⠀
// ⠈⣻⠧⠤⠤⠤⠿⠗⠒⠒⠛⠶⣤⣿⣼⠛⠉⠙⠒⣶⡖⠳⡗⠺⡿⣤⣤⢄⡀
// ⠰⣹⠀⠀⠀⢟⡆⠀⠀⠀⠀⠀⠈⣿⡿⠀⠀⠀⠀⢧⠇⠀⠀⠀⠀⠙⠮⡯⠀
// ⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⠾⠛⣿⠙⠛⠶⢦⠄`, "cart4");
//     _ANDROID_BUILD_CARTOON_(`
//     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⡀⠀⠀⠀⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣆⠀⠀⢻⡍⢳⡄⠀⠀⣿⠸⣆⠀⠀⣠⣤⣾⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢀⣀⠀⢀⠀⢀⣀⠀⢸⢁⣿⡄⠀⠈⢷⣈⣿⠀⣠⣼⣦⣿⣴⣋⣡⠞⢻⠀⣿⢀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠘⢿⡻⣿⠳⣾⡍⠻⣿⣾⢿⡛⠶⣦⡄⠈⣿⣏⣡⠞⠋⣻⠉⠉⡀⠀⢸⡶⢟⣽⡯⠥⢤⣄⣀⡀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢀⣈⣛⣿⠀⢹⡿⠶⣼⣿⠀⠙⠶⢬⣷⣿⢸⡏⠀⠀⠀⡟⠀⢸⠹⣦⣾⠞⠋⠉⠛⠛⢿⠋⣻⠷⢲⣶⠆⠀⠀⠀
// ⠀⠀⠀⢼⡿⣦⠸⣯⡉⠛⠷⣾⡃⠀⠀⢸⣇⠀⠀⠀⠈⣽⡇⢿⡄⠀⢀⡇⠀⢸⣠⡟⠀⠀⠀⠀⠀⠀⣸⣾⠥⠖⠋⠀⠀⠀⠀⠀
// ⠀⠀⢰⣾⣧⢻⡆⠈⠉⠉⠙⠙⠻⣦⣀⠀⢿⣄⠀⠀⠀⣿⡇⠈⢻⣆⢸⡇⠀⣸⣿⢦⡀⠀⠀⣀⣤⣾⠋⠀⣀⣤⣶⣞⣉⡿⠆⠀
// ⠀⠀⠘⣧⠈⢿⡃⠀⣀⣤⣤⣀⠀⠀⠙⠳⢶⣿⣦⡀⠀⣿⡇⠀⠀⢻⣿⣧⠞⢉⣿⣄⢻⡖⠛⠉⠉⠉⠉⠻⣿⣍⠛⣧⡀⠀⠀⠀
// ⠀⢸⡿⢿⡷⠴⢷⡾⠥⠴⠞⠁⠀⠀⠀⠀⠀⠀⠉⠻⣦⣹⣇⠀⠀⠈⣿⡇⢀⡾⠉⣯⠛⠇⠀⠀⠀⠀⣀⣠⠞⠋⠓⠛⠟⠀⠀⠀
// ⠀⠈⢷⡈⣷⡀⠈⠻⣆⠀⠀⢀⣠⡤⢤⣤⠀⠀⠀⠀⠘⢿⣿⡄⠀⠀⣼⣷⠋⢹⡀⣿⣀⣤⡤⠶⠒⠋⠹⣍⠳⣄⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠙⢿⣀⠀⠀⠙⠿⣦⡛⠛⠛⠛⠁⠀⠀⠀⠀⠀⠈⢿⣧⣴⠟⢻⡇⢀⣤⠿⣿⣉⡀⠀⠀⣀⡀⠀⠈⠛⠛⠃⠀⢀⣠⣤⠀
// ⠀⠀⠀⠀⠀⠉⠙⠛⠲⠶⠿⠿⣦⣄⣀⣀⣀⣀⣀⠀⠀⠀⢸⣿⠏⠀⢸⣷⠋⠁⠀⠀⠉⠉⠛⠛⣿⠙⢲⡄⠀⣀⣴⣾⡽⠾⠛⠀
// ⢰⢦⣄⠀⠀⢴⣚⣛⣶⣶⠀⠀⠀⠉⠛⠛⠻⠿⠿⠿⣷⣦⣼⣿⡄⠀⣿⡇⠀⠀⠀⠀⠀⣀⣀⣤⣬⡿⠶⠛⢩⣿⢯⣉⠛⢶⡄⠀
// ⠘⢦⣌⣷⡄⠀⠀⠀⠀⠙⢶⣤⣀⡀⠀⠀⣀⣀⣀⣀⠈⠛⣿⣿⠇⣰⣿⣧⣶⣾⣿⠿⠿⠛⠉⠘⣧⢻⡄⠀⣾⢹⡆⠈⠙⠛⠛⠀
// ⠀⠀⢈⡛⠷⠦⣤⣤⣤⡤⠴⠿⠿⠛⠛⠛⠋⠛⠛⠻⢿⣦⣼⣿⣠⣿⠋⠁⠀⠉⠙⠛⢳⣶⡞⠛⠻⣾⡏⠙⢿⡿⣧⣴⣶⠶⢤⣀
// ⠀⠀⡟⢹⡄⠀⠀⠀⠀⡞⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⢸⣁⣿⠀⠀⠀⠀⠀⠀⠀⠙⢷⡈⠻⣞⠉
// ⠀⠀⢷⡾⠀⠀⠀⠀⠀⠻⣼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠘⠿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠿⠀
// ⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣿⠟⠛⢻⣯⠙⠻⠿⠿⠷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠘⠛⠀⠀⠀⠀⠀⠀⠉`, "cart5");
//     _ANDROID_BUILD_CARTOON_(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠓⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⢠⢤⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠔⠒⠒⠲⠎⠀⠀⢹⡃⢀⣀⠀⠑⠃⠀⠈⢀⠔⠒⢢⠀⠀⠀⡖⠉⠉⠉⠒⢤⡀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠚⠙⠒⠒⠒⠤⡎⠀⠀⠀⠀⢀⣠⣴⣦⠀⠈⠘⣦⠑⠢⡀⠀⢰⠁⠀⠀⠀⠑⠰⠋⠁⠀⠀⠀⠀⠀⠈⢦⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⢰⠃⠀⣀⣀⡠⣞⣉⡀⡜⡟⣷⢟⠟⡀⣀⡸⠀⡎⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⣻⠀⠀⠀⠀
// ⢰⠂⠀⠀⠀⠀⠀⠀⠀⣗⠀⠀⢀⣀⣀⣀⣀⣀⣓⡞⢽⡚⣑⣛⡇⢸⣷⠓⢻⣟⡿⠻⣝⢢⠀⢇⣀⡀⠀⠀⠀⢈⠗⠒⢶⣶⣶⡾⠋⠉⠀⠀⠀⠀⠀
// ⠈⠉⠀⠀⠀⠀⠀⢀⠀⠈⠒⠊⠻⣷⣿⣚⡽⠃⠉⠀⠀⠙⠿⣌⠳⣼⡇⠀⣸⣟⡑⢄⠘⢸⢀⣾⠾⠥⣀⠤⠖⠁⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⢀⠀⠀
// ⠀⠀⠀⢰⢆⠀⢀⠏⡇⠀⡀⠀⠀⠀⣿⠉⠀⠀⠀⠀⠀⠀⠀⠈⢧⣸⡇⢐⡟⠀⠙⢎⢣⣿⣾⡷⠊⠉⠙⠢⠀⠀⠀⠀⠀⢸⡇⢀⠀⠀⠀⠀⠈⠣⡀
// ⠀⠀⠀⠘⡌⢣⣸⠀⣧⢺⢃⡤⢶⠆⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣟⠋⢀⠔⣒⣚⡋⠉⣡⠔⠋⠉⢰⡤⣇⠀⠀⠀⠀⢸⡇⡇⠀⠀⠀⠀⠀⠀⠸
// ⠀⠀⠀⠀⠑⢄⢹⡆⠁⠛⣁⠔⠁⠀⣿⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⣿⢠⡷⠋⠁⠀⠈⣿⡇⠀⠀⠀⠈⡇⠉⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠑⣦⡔⠋⠁⠀⠀⠀⣿⠀⠀⢠⡀⢰⣼⡇⠀⡀⠀⠀⣿⠀⠁⠀⠀⠀⠀⣿⣷⠀⠀⠀⠀⡇⠀⠀⢴⣤⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢰⣿⡇⠀⠀⠀⠀⠀⣿⡀⠀⢨⣧⡿⠋⠀⠘⠛⠀⠀⣿⠀⠀⢀⠀⠀⠀⣿⣿⠀⠀⠀⠀⢲⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⢸⡧⡄⠀⠹⣇⡆⠀⠀⠀⠀⠀⣿⠀⢰⣏⠀⣿⣸⣿⣿⠀⠀⠀⠀⣼⠀⠀⠰⠗⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⢸⡇⣷⣛⣦⣿⢀⠈⠑⠀⢠⡆⣿⠐⢠⣟⠁⢸⠸⣿⣿⢱⣤⢀⠀⣼⠀⠀⢀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⢀⠀⠀⠀⢸⡇⠘⠫⣟⡇⠊⣣⠘⠛⣾⡆⢿⠀⠙⣿⢀⣘⡃⣿⣿⡏⠉⠒⠂⡿⠀⠰⣾⡄⠀⢸⡟⣽⣀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠸⣿⡇⠀⠘⣾⠀⠀⢸⡇⢸⣇⡙⠣⠀⣹⣇⠀⠈⠧⢀⣀⣀⡏⣸⣿⣇⢹⣿⡇⢴⣴⣄⣀⡀⢰⣿⡇⠀⢸⣇⢿⡿⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠓⠁⠈⠻⢷⠾⠦⠤⠬⣅⣹⣿⣖⣶⣲⣈⡥⠤⠶⡖⠛⠒⠛⠁⠉⠛⠮⠐⢛⡓⠒⢛⠚⠒⠒⠒⠛⣚⣫⡼⠿⠿⣯⠛⠤⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⡉⠉⠁⠀⠀⠘⠓⠀⠀⠀⠀⠀⣀⣞⡿⡉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣶⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉`, "cart6");
//     _ANDROID_BUILD_CARTOON_(`
// ▐▓█▀▀▀▀▀▀▀▀▀█▓▌░▄▄▄▄▄░
// ▐▓█░░▀░░▀▄░░█▓▌░█▄▄▄█░
// ▐▓█░░▄░░▄▀░░█▓▌░█▄▄▄█░
// ▐▓█▄▄▄▄▄▄▄▄▄█▓▌░█████░
// ░░░░▄▄███▄▄░░░░░█████░
// `, "cart7");
//   }, 3000);



  
  function CRE() {
    let df = _OPERATING_SYSTEM_.newElem("div");
    df.className = "hio";
    df.innerHTML = `──────────────▄▄▄▄▄▄▄▄▄▄▄▄▄▄
─────────────█▓▓▓▓▓▓▓▓██▓▓▓▓█
────────────█▓▓▓▓▓▓▓▓█──█▓▄▄▓█
───────────█▓▓▓▓▓▓▓▓█───▀█──█▀
──────────█▓▓▓▓▓▓▓▓▓▓█──█────█
─────────█▓▓▓▓▓▓▓▓▓▓▓▓█──█──█
────────█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█──▀▀
───────▄████████████████▄
───────██▀────────────▀██
───────██──────────────██
──────▄██▄────────────▄██▄
──────████████████████████
─────█────────────────────█
────█──────────────────────█
───█─────▄████▄──▄████▄─────█
───█───██▀────▀██▀────▀██───█
───█──██──<hi id="hix">▄▄▄</hi>──██──<hi>▄▄▄</hi>─▀██──█
──▄█████──<hi>███</hi>──██──<hi>███</hi>──█████▄
──██████──────████──────██████
──▀█▀─▀██▄▄▄███▀▀███▄▄▄██▀─▀█▀
───█────▀▀▀▀▀──────▀▀▀▀▀────█
───█──────▄▄───────▄▄───────█
───█▄──────▀▀▀▀▀▀▀▀▀───────▄█
───█▓█────────────────────█▓█
───█▓▓█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█▓▓█
──▄██████████████████████████▄
──██▀──────────────────────▀██
▄█▀──█▄─▄█─█▀▀─█▀█─█▀█─█─█───▀█▄
██▀──█▀█▀█─█▄──█▄▀─█▄▀─█▄█───▀██
██▀──█───█─█▄▄─█─█─█─█─▄▄█───▀██
██▀──────────────────────────▀██
─█─█▀▐─█▐▀█▐─█▀─▀█▀▐▄─▄▌▐▀▌█▀─█
─█─█─▐▄█▐▄▀▐─▀█──█─▐▀█▀▌▐▄▌▀█─█
─█─█▄▐─█▐─█▐─▄█──█─▐───▌▐─▌▄█─█
─█▄▄────────────────────────▄▄█
──▀▀████████████████████████▀▀
────▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌
─────▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌
──────▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌
───────▐▓▓▓▓▓▓▓▌▐▓▓▓▓▓▓▓▌
─────────▐▓▓▓▓▌──▐▓▓▓▓▓▌
────────▄████▀────▀████▄`;
    _ANDROID_DOM_.querySelector("body").appendChild(df);
    let dfi = _OPERATING_SYSTEM_.newElem("div");
    dfi.className = "hior";
    dfi.innerHTML = `__________ █████
_______█████████
________████████
_________ ███████
__________████████
______██████████████
_____███▒▒░░░░░░░░▒
_______▒░░░░░ ⓤ░░ⓤ░▒
_______▒░░░░░░░░ >░░ ▒
_______██▒░░░░░·︾·░░▒
_______████▒░░░░░░░▒
______▒▒███████████▒▒
____▒░░░░░▒▒▒▒███░░░▒
___▒░░░▒░░░░░░████░░ ▒
___▒░░░░▒░░░░░█████░░▒
___▒░░░░░▒░░░░███████░▒
____▒░░░░▒░░░░██████▒▒
____▒#▒▒▒▒▒░##░██████
__▒#▒░░░░░░░░░░░░░▒░▒
_▒░░░░░░░░░░░░░░Ѻ░░░▒
▒░░░░░░░░░░░░░░░░░░░ ▒
▒░░░░░░░░░░░░░░░Ѻ░░░ ▒
▒░░░░░░░░░░░░░░░░░░░ ▒
#▒░░░░░░░░░░░░░Ѻ░░░░▒
##▒░░░░░░░░░░░░░░░░##`;
    _ANDROID_DOM_.querySelector("body").appendChild(dfi);
    let dfa = _OPERATING_SYSTEM_.newElem("div");
    dfa.className = "hiod";
    dfa.innerHTML = `░░░░░░░░░░ ★
░░░░░░░░░░██
░░░░░░░░░████
░░░░░░░██▒▒▒▒██
░░░░░██▒▒▒▒▒▒▒▒██
░░░░░░░██▒▒▒▒██
░░░░░░░░██████
░░░░░░░███▓▓███
░░░░░░░░█▓▓▓▓█
░░░░░░░█▓▓▓▓▓▓█
░░░░░░█▓▓▓▓▓▓▓▓█
░░░░░█▓▓▓▓▓▓▓▓▓▓█
░░░████▓▓▓▓▓▓▓▓████
░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
░███████▓▓▓▓▓▓███████
░░░░░░█▓▓▓▓▓▓▓▓█
░░░░░█▓▓▓▓▓▓▓▓▓▓█
░░░░█▓▓▓▓▓▓▓▓▓▓▓▓█
░░███▓▓▓▓▓▓▓▓▓▓▓▓███
░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
███████▓▓▓▓▓▓▓▓███████
░░░░█▓▓▓▓▓▓▓▓▓▓▓▓█
░░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
░██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
██████████████████████
░░░░░░░░██████`;
    _ANDROID_DOM_.querySelector("body").appendChild(dfa);
    let gh = _OPERATING_SYSTEM_.newElem("div");
    gh.className = "hiu";
    gh.innerHTML = `<lp>З наступаючими святами</lp>`;
    _ANDROID_DOM_.querySelector("body").appendChild(gh);
    setTimeout(() => {
      df.remove();
      dfi.remove();
      dfa.remove();
      gh.remove();
    }, 10000);
  }
  //CRE();
  const cssTemplateString = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Message..."; }`;
  const styleTag = document.createElement("style");
  styleTag.id = "ho";
  styleTag.innerHTML = cssTemplateString;
  document.head.insertAdjacentElement('beforeend', styleTag);
  setInterval(() => {
    // setTimeout(() => {
    //   document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Message.."; }`;
    //   setTimeout(() => {
    //     document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Message."; }`;
    //     setTimeout(() => {
    //       document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Message.."; }`;
    //       setTimeout(() => {
    //         document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Message..."; }`;
    //         setTimeout(() => {
    //           document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "M"; }`;
    //           setTimeout(() => {
    //             document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Me"; }`;
    //             setTimeout(() => {
    //               document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Mes"; }`;
    //               setTimeout(() => {
    //                 document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Mess"; }`;
    //                 setTimeout(() => {
    //                   document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Messa"; }`;
    //                   setTimeout(() => {
    //                     document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Messag"; }`;
    //                     setTimeout(() => {
    //                       document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Message"; }`;
    //                     }, 1000);
    //                   }, 1000);
    //                 }, 1000);
    //               }, 1000);
    //             }, 1000);
    //           }, 1000);
    //         }, 1000);
    //       }, 300);
    //     }, 300);
    //   }, 300);
    // }, 300);
    setTimeout(() => {
      document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "M"; }`;
      setTimeout(() => {
        document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Me"; }`;
        setTimeout(() => {
          document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Mes"; }`;
          setTimeout(() => {
            document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Mess"; }`;
            setTimeout(() => {
              document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Messa"; }`;
              setTimeout(() => {
                document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Messag"; }`;
                setTimeout(() => {
                  document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Message..."; }`;
                  setTimeout(() => {
                    document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Message.."; }`;
                    setTimeout(() => {
                      document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Message."; }`;
                      setTimeout(() => {
                        document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Message.."; }`;
                        setTimeout(() => {
                          document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Message..."; }`;
                          setTimeout(() => {
                            document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Message"; }`;
                            setTimeout(() => {
                              document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Messag"; }`;
                              setTimeout(() => {
                                document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Messa"; }`;
                                setTimeout(() => {
                                  document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Mess"; }`;
                                  setTimeout(() => {
                                    document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Mes"; }`;
                                    setTimeout(() => {
                                      document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "Me"; }`;
                                      setTimeout(() => {
                                        document.querySelector("#ho").innerHTML = `android-textarea-element[contenteditable][placeholder]:empty:before { content: "M"; }`;
                                      }, 100);
                                    }, 100);
                                  }, 100);
                                }, 100);
                              }, 100);
                            }, 100);
                          }, 100);
                        }, 200);
                      }, 200);
                    }, 200);
                  }, 200);
                }, 300);
              }, 300);
            }, 300);
          }, 300);
        }, 300);
      }, 300);
    }, 300);
  }, 3900);
  function _ANDROID_NEW_REPL_(nameProject, app, icon, __html, __css, __l) {
    if (nameProject) {
      if ((__html == undefined && __css == undefined && __l == undefined)) {
        _ANDROID_SOCKET_CONNECTOR_.emit("create-repl", {
          user: getCookie("nick"),
          name: nameProject,
          __nameApp: app,
          __iconApp: icon
        });
        sessionStorage.setItem("repl-0-project-id", "android/" + nameProject + ".apk");
        if (nameProject.length > 10) {
          nameProject = nameProject.substr(0, 11) + "..";
        }
        _OPERATING_SYSTEM_.getElem("android-edit#__andr_edit_project android-project-my").innerText = nameProject;
        _ANDROID_DOM_.querySelector("spr").innerHTML = `https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/${sessionStorage.getItem("repl-0-project-id")}`;
        _ANDROID_DOM_.querySelector("#__android_url_project").value = `https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/${sessionStorage.getItem("repl-0-project-id")}/`;
      } else {
        document.querySelector("body > update-repl").style.display = "block";
        _ANDROID_SOCKET_CONNECTOR_.emit("create-repl-no-template", {
          user: getCookie("nick"),
          name: nameProject,
          __nameApp: app,
          __iconApp: icon,
          __html: __html,
          __css: __css,
          __js: __l
        });
        sessionStorage.setItem("repl-0-project-id", "android/" + nameProject + ".apk");
        if (nameProject.length > 10) {
          nameProject = nameProject.substr(0, 11) + "..";
        }
        _OPERATING_SYSTEM_.getElem("android-edit#__andr_edit_project android-project-my").innerText = nameProject;
        _ANDROID_DOM_.querySelector("spr").innerHTML = `https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/${sessionStorage.getItem("repl-0-project-id")}`;
        _ANDROID_DOM_.querySelector("#__android_url_project").value = `https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/${sessionStorage.getItem("repl-0-project-id")}/`;
      }
    }
  }
  document.querySelector("#cancel").onclick = () => {
    document.querySelector("body > android-project-create").style.display = "none";
    document.querySelector("body > blocki").style.display = "none";
    document.querySelector("body").style.overflow = "scroll";
  }
  document.querySelector("#nameAPK").oninput = function() {
    let apk = this.value.trim().substring(0, 7) ? this.value.trim().substring(0, 7) : "?";
    document.querySelector("#icon_preview > nameapk").innerText = apk;
    if (document.querySelector("#nameProj").value && document.querySelector("#imageAPK").value && document.querySelector("#nameAPK").value) {
      document.querySelector("#createApl").classList.remove("no")
    } else {
      document.querySelector("#createApl").classList.add("no")
    }
  }
  document.querySelector("#imageAPK").oninput = function() {
    let apk = this.value.trim();
    document.querySelector("#icon_preview > img").src = apk;
    if (document.querySelector("#nameProj").value && document.querySelector("#imageAPK").value && document.querySelector("#nameAPK").value) {
      document.querySelector("#createApl").classList.remove("no")
    } else {
      document.querySelector("#createApl").classList.add("no")
    }
  }
  document.querySelector("#nameProj").oninput = function() {
    if (document.querySelector("#nameProj").value && document.querySelector("#imageAPK").value && document.querySelector("#nameAPK").value) {
      document.querySelector("#createApl").classList.remove("no")
    } else {
      document.querySelector("#createApl").classList.add("no")
    }
  }
  document.querySelector("#createApl").onclick = () => {
    Androidcreate(g_temp);
  }
  function Androidcreate(__stat) {
    if (__stat != "@android") {
      let nameProject = document.querySelector("#nameProj").value.trim();
      let nameApp = document.querySelector("#nameAPK").value.trim();
      let iconApp = document.querySelector("#imageAPK").value.trim();
      if ((nameProject && nameApp && iconApp) != "") {
        __uu = nameApp;
        __oo = iconApp;
        _ANDROID_NEW_REPL_(nameProject, nameApp, iconApp);
        document.querySelector("body > android-project-create").style.display = "none";
        document.querySelector("body > blocki").style.display = "none";
        document.querySelector("#nameProj").value = "";
        document.querySelector("#nameAPK").value = "";
        document.querySelector("#imageAPK").value = "";
      }
    } else {
      let nameProject = document.querySelector("#nameProj").value.trim();
      let nameApp = document.querySelector("#nameAPK").value.trim();
      let iconApp = document.querySelector("#imageAPK").value.trim();
      if ((nameProject && nameApp && iconApp) != "") {
        __uu = nameApp;
        __oo = iconApp;
        _ANDROID_NEW_REPL_(nameProject, nameApp, iconApp, _OPERATING_SYSTEM_.getElem("#html").innerText, editorCss.getValue(), editor.getValue());
        document.querySelector("body > android-project-create").style.display = "none";
        document.querySelector("body > blocki").style.display = "none";
        document.querySelector("#nameProj").value = "";
        document.querySelector("#nameAPK").value = "";
        document.querySelector("#imageAPK").value = "";
      }
    }
  }
  newPr.onclick = () => {
    document.querySelector("body > android-project-create").style.display = "block";
    document.querySelector("body > blocki").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
  }
  function setBaseHTML(__app, __icon, __project) {
    return `&lt;!DOCTYPE html&gt;
    &lt;html&gt;
    
    &lt;head&gt;
      &lt;meta charset="utf-8"&gt;
      &lt;meta name="viewport" content="width=device-width"&gt;
      &lt;title&gt;${__app}&lt;/title&gt;
      &lt;link rel="shortcut icon" href="${__icon}" type="image/png"&gt;
      &lt;link rel="stylesheet" href="../${__project}/style.css"&gt;
      &lt;!--SYSTEM-CSS-NOT-DELETE--&gt;
    &lt;/head&gt;
    
    &lt;body&gt;
      Hello world
      &lt;!--SYSTEM-JS-NOT-DELETE--&gt;
      &lt;script src="../${__project}/script.js"&gt;&lt;/script&gt;
    &lt;/body&gt;
    
    &lt;/html&gt;`;
  }
  function setTemplateHTML(__app, __icon, __project) {
    let o = String(_ANDROID_DOM_.querySelector("#html").innerText.match(/<body(.+)?>\n([\S\s]*)(.+)<!\-\-SYSTEM\-JS\-NOT\-DELETE\-\->/g)).replace(/<body(.+)?>\n([\S\s]*)(.+)<!\-\-SYSTEM\-JS\-NOT\-DELETE\-\->/g, "$2");
    let CSS = String(_ANDROID_DOM_.querySelector("#html").innerText.match(/<head(.+)?>\n([\S\s]*)(.+)<!\-\-SYSTEM\-CSS\-NOT\-DELETE\-\->/g)).replace(/<head(.+)?>\n([\S\s]*)(.+)<!\-\-SYSTEM\-CSS\-NOT\-DELETE\-\->/g, "$2");
    return `&lt;!DOCTYPE html&gt;
    &lt;html&gt;
    
    &lt;head&gt;
      ${String(CSS.replaceAll("<", "&lt;").replaceAll(">", "&gt;")).replace(/&lt\;title(.+)?&gt\;(.+)&lt\;\/title&gt\;/g, `&lt;title&gt;${__app}&lt;/title&gt;`)}
      &lt;link rel="shortcut icon" href="${__icon}" type="image/png"&gt;
      &lt;link rel="stylesheet" href="../${__project}/style.css"&gt;
      &lt;!--SYSTEM-CSS-NOT-DELETE--&gt;
    &lt;/head&gt;
    
    &lt;body&gt;
      ${o.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}
      &lt;!--SYSTEM-JS-NOT-DELETE--&gt;
      &lt;script src="../${__project}/script.js"&gt;&lt;/script&gt;
    &lt;/body&gt;
    
    &lt;/html&gt;`;
  }
  _ANDROID_SOCKET_CONNECTOR_.on("updated", () => {
    document.querySelector("body > update-repl").style.display = "none";
  });
  _ANDROID_SOCKET_CONNECTOR_.on("created-template", (data) => {
    document.querySelector("body > update-repl").style.display = "block";
    _ANDROID_DOM_.querySelector("#html").innerHTML = setTemplateHTML(__uu, __oo, data);
    _ANDROID_DOM_.querySelector(".highLite_colors").innerHTML = setTemplateHTML(__uu, __oo, data);
    highLite(_OPERATING_SYSTEM_.getElem("#html"));
    _ANDROID_SOCKET_CONNECTOR_.emit("update-repl", {
      user: getCookie("nick"),
      file: _ANDROID_DOM_.querySelector("#html").innerText,
      project: sessionStorage.getItem("repl-0-project-id"),
      extension: "html",
      name: "index"
    });
    setTimeout(() => {
      document.querySelector("body > update-repl").style.display = "block";
      _ANDROID_SOCKET_CONNECTOR_.emit("update-repl", {
        user: getCookie("nick"),
        file: editorCss.getValue(),
        project: sessionStorage.getItem("repl-0-project-id"),
        extension: "css",
        name: "style"
      });
      setTimeout(() => {
        document.querySelector("body > update-repl").style.display = "block";
        _ANDROID_SOCKET_CONNECTOR_.emit("update-repl", {
          user: getCookie("nick"),
          file: editorCss.getValue(),
          project: sessionStorage.getItem("repl-0-project-id"),
          extension: "js",
          name: "script"
        });
      }, 700);
    }, 700);
    if (_ANDROID_DOM_.querySelector("#android.andr.ui-draggable.ui-draggable-handle")) {
      _OPERATING_SYSTEM_.getElem("#android.andr.ui-draggable.ui-draggable-handle iframe").contentWindow.postMessage(`__reload_apps-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
    }
    _OPERATING_SYSTEM_.getElem("#androidx.andr.ui-draggable.ui-draggable-handle iframe").contentWindow.postMessage(`__reload_apps-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
  });

  _ANDROID_SOCKET_CONNECTOR_.on("created", (data) => {
    _ANDROID_DOM_.querySelector("#html").innerHTML = setBaseHTML(__uu, __oo, data);
    _ANDROID_DOM_.querySelector(".highLite_colors").innerHTML = setBaseHTML(__uu, __oo, data);
    highLite(_OPERATING_SYSTEM_.getElem("#html"));
    editor.setValue("console.log('hello world');");
    editorCss.setValue(`html, body {
    margin: 0px;
    }`);
    if (_ANDROID_DOM_.querySelector("#android.andr.ui-draggable.ui-draggable-handle")) {
      _OPERATING_SYSTEM_.getElem("#android.andr.ui-draggable.ui-draggable-handle iframe").contentWindow.postMessage(`__reload_apps-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
    }
    _OPERATING_SYSTEM_.getElem("#androidx.andr.ui-draggable.ui-draggable-handle iframe").contentWindow.postMessage(`__reload_apps-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
    document.querySelector("body > blocki").style.display = "none";
  });
  _ANDROID_SOCKET_CONNECTOR_.on("yesPr", (data) => {
    if (data.length != 0) {
      let history = data.project;
      let zips = Object.keys(data.zip[0]);
      let listHistory = _OPERATING_SYSTEM_.newElem("fieldset");
      listHistory.className = "history";
      listHistory.innerHTML = `<legend>Твої проекти</legend><button id="__zip"><img id="___zip" src="__mobile/__constructor/__panel/download.png"></button><button id="cll"><img class="edl" src="./js/imgs/delete.png"></button> <button id="clearH"><img class="clearHis" src="./js/imgs/clear1.png"></button><br>`;
      bllp.style.display = "block";
      _ANDROID_DOM_.body.appendChild(listHistory);
      _OPERATING_SYSTEM_.getElem("#cll").onclick = function() {
        this.parentNode.remove();
        bllp.style.display = "none";
      }
      _OPERATING_SYSTEM_.getElem("#clearH").onclick = function() {
        let po = confirm("Ти точно хочеш видалити всі свої проекти? Їх неможливо буде відновити");
        if (po == true) {
          _ANDROID_SOCKET_CONNECTOR_.emit("clearFolder", {
            user: getCookie("nick")
          });
          bllp.style.display = "none";
          if (document.querySelector("#android.andr.ui-draggable.ui-draggable-handle")) {
            _OPERATING_SYSTEM_.getElem(".andr iframe").contentWindow.postMessage(`__delete_apps`, "https://Iphone.teleweb.repl.co");
          }
          _OPERATING_SYSTEM_.getElem("#androidx.andr.ui-draggable.ui-draggable-handle iframe").contentWindow.postMessage(`__reload_apps-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
          this.parentNode.remove();
          sessionStorage.removeItem("repl-0-project-id");
          clearEditor();
        }
      }
      _OPERATING_SYSTEM_.getElem("#__zip").onclick = () => {
        for (let project of zips) {
          ZIP.folder((getCookie("nick")) ? getCookie("nick") : "__APPS__").folder(project).file("index.html", data.zip[0][project].zipHTML).file("style.css", data.zip[0][project].zipCSS).file("script.js", data.zip[0][project].zipJS);
        }
        ZIP.generateAsync({ type: "blob" }).then(function(content) {
          //window.open(URL.createObjectURL(content));
          saveAs(content, (getCookie("nick")) ? getCookie("nick") + ".zip" : "__APPS__.zip");
        });
      }
      let y = _OPERATING_SYSTEM_.newElem("div");
      y.id = "list";
      for (let project of zips) {
        let pl = _ANDROID_DOM_.createElement("h2");
        pl.className = "project";
        ZIP.folder(project).file("index.html", data.zip[0][project].zipHTML).file("style.css", data.zip[0][project].zipCSS).file("script.js", data.zip[0][project].zipJS);
        ZIP.generateAsync({ type: "blob" }).then(function(content) {
          pl.innerHTML = `${project} <a href="${URL.createObjectURL(content)}" download="${project}.zip"><download>скачати</download><img id="___download" src="__mobile/__constructor/__panel/download.png"></a><spn><img src="trash.png"></spn>`;
          y.appendChild(pl);
        });
        ZIP.remove(project);
      }
      listHistory.appendChild(y);
      _ANDROID_DOM_.querySelector("#list").onclick = (eb) => {
        let t = eb.target;
        if (t.className = "project" && t.tagName != "SPN" && t.tagName != "IMG") {
          let textPr = t.firstChild.textContent.trim();
          _ANDROID_SOCKET_CONNECTOR_.emit("request-repl", {
            user: getCookie("nick"),
            project: textPr
          });
          sessionStorage.setItem("repl-0-project-id", "android/" + textPr + ".apk");
          if (textPr.length > 10) {
            textPr = textPr.substr(0, 11) + "..";
          }
          _OPERATING_SYSTEM_.getElem("android-edit#__andr_edit_project android-project-my").innerText = textPr;
          _OPERATING_SYSTEM_.getElem("spr").innerText = `https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/android/${textPr}.apk`;
          _OPERATING_SYSTEM_.getElem("#__android_url_project").value = `https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/${"android/" + textPr + ".apk"}`;
          _OPERATING_SYSTEM_.getElem("#cll").click();
        } else if (t.tagName == "SPN" && t.id != "___download") {
          let textPr = t.parentNode.firstChild.textContent.trim();
          let po = confirm(`Ти точно хочеш видалити проект "${textPr}"? Його неможливо буде відновити`);
          if (po == true) {
            _ANDROID_SOCKET_CONNECTOR_.emit("deleteProject", {
              user: getCookie("nick"),
              project: textPr
            });
            if (document.querySelector("#android.andr.ui-draggable.ui-draggable-handle")) {
              _OPERATING_SYSTEM_.getElem(".andr iframe").contentWindow.postMessage(`__delete_app-https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/${textPr}`, "https://Iphone.teleweb.repl.co");
            }
            _OPERATING_SYSTEM_.getElem("#androidx.andr.ui-draggable.ui-draggable-handle iframe").contentWindow.postMessage(`__reload_apps-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
            sessionStorage.removeItem("repl-0-project-id");
            clearEditor();
            _OPERATING_SYSTEM_.getElem("#cll").click();
          }
        } else if (t.tagName == "IMG" && t.id != "___download") {
          let textPr = t.parentNode.parentNode.firstChild.textContent.trim();
          let po = confirm(`Ти точно хочеш видалити проект "${textPr}"? Його неможливо буде відновити`);
          if (po == true) {
            _ANDROID_SOCKET_CONNECTOR_.emit("deleteProject", {
              user: getCookie("nick"),
              project: textPr
            });
            if (document.querySelector("#android.andr.ui-draggable.ui-draggable-handle")) {
              _OPERATING_SYSTEM_.getElem(".andr iframe").contentWindow.postMessage(`__delete_app-https://server-js.teleweb.repl.co/projects/${getCookie("nick")}/${textPr}`, "https://Iphone.teleweb.repl.co");
            }
            _OPERATING_SYSTEM_.getElem("#androidx.andr.ui-draggable.ui-draggable-handle iframe").contentWindow.postMessage(`__reload_apps-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
            sessionStorage.removeItem("repl-0-project-id");
            clearEditor();
            _OPERATING_SYSTEM_.getElem("#cll").click();
          }
        }
      }
    } else {
      // let listHistory = _OPERATING_SYSTEM_.newElem("fieldset");
      // listHistory.className = "history";
      // listHistory.innerHTML = `<legend>History of code</legend><button id="cll">Закрити</button> <br>
      // <h1>Тут ще нічого нема, <button id="cropper">Створити проект</button><br>🐵</h1>
      // `;
      // _ANDROID_DOM_.body.appendChild(listHistory);
      // _OPERATING_SYSTEM_.getElem("#cropper").onclick = () => {
      //   _OPERATING_SYSTEM_.getElem("#newProject").click();
      // }
      // _OPERATING_SYSTEM_.getElem("#cll").onclick = function() {
      //   listHistory.remove();
      // }
      let message = _OPERATING_SYSTEM_.newElem("p");
      message.innerHTML = `<span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> Ще нема проектів<br>🐵`;
      _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
    }
  });
  _ANDROID_SOCKET_CONNECTOR_.on("project-repl", (data) => {
    let prOb = JSON.parse(data);
    let HTML = prOb.html;
    let CSS = prOb.css;
    let JS = prOb.js;
    editorCss.setValue(CSS);
    editor.setValue(JS);
    _ANDROID_DOM_.querySelector("#html").innerHTML = HTML.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    _ANDROID_DOM_.querySelector(".highLite_colors").innerHTML = HTML.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    highLite(_OPERATING_SYSTEM_.getElem("#html"));
  });
  _ANDROID_SOCKET_CONNECTOR_.on("deleted-repl", (data) => {
    let message = _OPERATING_SYSTEM_.newElem("p");
    message.innerHTML = `<span style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</span> Project "${data}" was deleted`;
    _OPERATING_SYSTEM_.getElem("android-console").appendChild(message);
  });
  _ANDROID_SOCKET_CONNECTOR_.on("built", (data) => {
    let URl = data;
    _ANDROID_DOM_.querySelector("spr").innerHTML = URl;
    _ANDROID_DOM_.querySelector("#__android_url_project").value = URl;
  });
  ///OLD VERSION
  _ANDROID_DOM_.querySelector("#html").onpaste = function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    console.log(text)
    //text/html
    document.execCommand("insertText", false, text);
  }
  function _ANDROID_WEB_SHARING_CREATE_(...args) {
    let nameProject = args[0];
    let adminProject = args[1];
    let yi = new SecuringHasher();
    let hash = `${yi.generateHashString("k")}-`;
    let o = new Query();
    let URLweb = `https://rscript.teleweb.repl.co/www/?admin=${o.$$(adminProject)}&project=${nameProject}`;
    return URLweb;
  }
  _ANDROID_SOCKET_CONNECTOR_.on("get-sharing", (data) => {
    if (operation.$$(getCookie("nick")) == data.admin) {
      let answer = confirm(`${data.user} запросив(ла) доступ до проекту ${data.project}`);
      if (answer == true) {
        _ANDROID_SOCKET_CONNECTOR_.emit("success-sharing", {
          user: data.user
        });
        _ANDROID_TYPER_CONNECTOR_GOOGLE_IO_();
        _ANDROID_TYPER_CONNECTOR_GOOGLE_IO_CSS_();
        _ANDROID_TYPER_CONNECTOR_GOOGLE_IO_JS_();
      } else {
        _ANDROID_SOCKET_CONNECTOR_.emit("throw-sharing", {
          user: data.user
        });
      }
    }
  });
  function _ANDROID_TYPER_CONNECTOR_GOOGLE_IO_() {
    _ANDROID_DOM_.querySelector("#html").oninput = function() {
      highLite(_OPERATING_SYSTEM_.getElem("#html"));
      tmlh.value = this.innerText;
      if (sessionStorage.getItem("repl-0-project-id")) {
        _ANDROID_SOCKET_CONNECTOR_.emit("update-repl", {
          user: getCookie("nick"),
          file: this.innerText,
          project: sessionStorage.getItem("repl-0-project-id"),
          extension: "html",
          name: "index"
        });
      }

      _ANDROID_SOCKET_CONNECTOR_.emit("send-code", {
        user: getCookie("nick"),
        type: "html",
        code: this.innerText
      });
    }


  }
  function _ANDROID_TYPER_CONNECTOR_GOOGLE_IO_JS_() {
    editor.on("change", (data) => {
      jss.value = data.doc.getValue();
      if (sessionStorage.getItem("repl-0-project-id")) {
        _ANDROID_SOCKET_CONNECTOR_.emit("update-repl", {
          user: getCookie("nick"),
          file: data.doc.getValue(),
          project: sessionStorage.getItem("repl-0-project-id"),
          extension: "js",
          name: "script"
        });
      }
      _ANDROID_SOCKET_CONNECTOR_.emit("send-code", {
        user: getCookie("nick"),
        type: "js",
        code: data.doc.getValue()
      });
    });
  }
  function _ANDROID_TYPER_CONNECTOR_GOOGLE_IO_CSS_() {
    cscs.oninput = function() {
      alert(1)
      // if (sessionStorage.getItem("repl-0-project-id")) {
      //   _ANDROID_SOCKET_CONNECTOR_.emit("update-repl", {
      //     user: getCookie("nick"),
      //     file: data.doc.getValue(),
      //     project: sessionStorage.getItem("repl-0-project-id"),
      //     extension: "css",
      //     name: "style"
      //   });
      // }
      _ANDROID_SOCKET_CONNECTOR_.emit("send-code", {
        user: getCookie("nick"),
        type: "css",
        code: this.value
      });
    };
  }
  ////////////////---------SHARING-------------
  // _ANDROID_SOCKET_CONNECTOR_.on("get-code", (data) => {
  //   if (data.type == "html") {
  //     _OPERATING_SYSTEM_.getElem("#html").innerText = data.code;
  //     tmlh.value = data.code;
  //     highLite(_OPERATING_SYSTEM_.getElem("#html"));
  //   } else if (data.type == "css") {
  //     // cscs.value = data.code;
  //     editorCss.setValue(data.code);
  //   } else if (data.type == "js") {
  //     // jss.value = data.code;
  //     editorCss.setValue(data.code);
  //   }
  // });
  _ANDROID_SOCKET_CONNECTOR_.on("setCSS", (data) => {
    editorCss.setValue(data);
  });
  _ANDROID_SOCKET_CONNECTOR_.on("setJS", (data) => {
    editor.setValue(data);
  });
  _ANDROID_SOCKET_CONNECTOR_.on("scs", (data) => {
    if (getCookie("nick") == data.user) {
      _ANDROID_TYPER_CONNECTOR_GOOGLE_IO_();
      _ANDROID_TYPER_CONNECTOR_GOOGLE_IO_CSS_();
      _ANDROID_TYPER_CONNECTOR_GOOGLE_IO_JS_();
    }
  });
  _ANDROID_SOCKET_CONNECTOR_.on("thr", (data) => {
    if (getCookie("nick") == data.user) {
      alert("Власник проекту не дозволив вам вносити зміни");
    }
  });




  document.querySelector("#androidx").onmouseover = (r) => {
    if (r.target.className == "btn_reload") {
      r.target.nextElementSibling.classList.add("show1");
    } else if (r.target.className == "btn_back") {
      r.target.nextElementSibling.classList.add("show2");
    } else if (r.target.className == "btn_apps") {
      r.target.nextElementSibling.classList.add("show3");
    } else if (r.target.className == "btn_home") {
      r.target.nextElementSibling.classList.add("show4");
    } else if (r.target.className == "close_android") {
      r.target.nextElementSibling.classList.add("show5");
    } else if (r.target.id == "inv") {
      r.target.nextElementSibling.classList.add("show7");
    } else if (r.target.id == "rotate") {
      r.target.nextElementSibling.classList.add("show6");
    } else if (r.target.id == "resz") {
      r.target.nextElementSibling.classList.add("show8");
    }
  }
  document.querySelector("#androidx").onmouseout = (r) => {
    if (r.target.className == "btn_reload") {
      r.target.nextElementSibling.classList.remove("show1");
    } else if (r.target.className == "btn_back") {
      r.target.nextElementSibling.classList.remove("show2");
    } else if (r.target.className == "btn_apps") {
      r.target.nextElementSibling.classList.remove("show3");
    } else if (r.target.className == "btn_home") {
      r.target.nextElementSibling.classList.remove("show4");
    } else if (r.target.className == "close_android") {
      r.target.nextElementSibling.classList.remove("show5");
    } else if (r.target.id == "inv") {
      r.target.nextElementSibling.classList.remove("show7");
    } else if (r.target.id == "rotate") {
      r.target.nextElementSibling.classList.remove("show6");
    } else if (r.target.id == "resz") {
      r.target.nextElementSibling.classList.remove("show8");
    }
  }



  _OPERATING_SYSTEM_.getElem("#androidx .btn_reload").onclick = () => {
    _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage(`__reload_app-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
  }
  _OPERATING_SYSTEM_.getElem("#androidx .btn_back").onclick = () => {
    _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage(`go_back`, "https://Iphone.teleweb.repl.co");
  }
  _OPERATING_SYSTEM_.getElem(".btn_inet").onclick = () => {
    _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage("__online", "https://Iphone.teleweb.repl.co");
  }
  _OPERATING_SYSTEM_.getElem("#androidx .btn_apps").onclick = () => {
    _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage(`show_apps`, "https://Iphone.teleweb.repl.co");
  }
  _OPERATING_SYSTEM_.getElem("#androidx #inv").style.color = "black";
  _OPERATING_SYSTEM_.getElem("#androidx #inv").style.background = "white";
  _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").onload = function() {
    this.contentWindow.postMessage(`user-${getCookie("nick")}`, "https://Iphone.teleweb.repl.co");
    setTimeout(() => {
      _OPERATING_SYSTEM_.getElem("#androidx .btn_apps").style.cssText = _OPERATING_SYSTEM_.getElem("#androidx .btn_back").style.cssText = _OPERATING_SYSTEM_.getElem("#androidx .btn_reload").style.cssText = _OPERATING_SYSTEM_.getElem("#androidx .btn_home").style.cssText = "filter: opacity(1); pointer-events: auto;";
      _ANDROID_DOM_.querySelector("#androidx .btn_reload").style.display = "none";
      _ANDROID_DOM_.querySelector("#androidx .btn_back").style.display = "none";
      _ANDROID_DOM_.querySelector("#androidx .btn_apps").style.display = "none";
      _ANDROID_DOM_.querySelector("#androidx .btn_home").style.display = "none";
      if (localStorage.getItem("tv_ttvers_09") == "1.0.3" || localStorage.getItem("tv_ttvers_09") == "1.0.5") {
        _ANDROID_DOM_.querySelector("#androidx .btn_reload").style.display = "";
        _ANDROID_DOM_.querySelector("#androidx .btn_back").style.display = "";
        _ANDROID_DOM_.querySelector("#androidx .btn_apps").style.display = "";
        _ANDROID_DOM_.querySelector("#androidx .btn_home").style.display = "";
      }
    }, 8000);
  }
  _OPERATING_SYSTEM_.getElem("#androidx").onclick = (e) => {
    let t = e.target;
    if (t.id == "rotate") {
      _OPERATING_SYSTEM_.getElem("#androidx iframe").src = _OPERATING_SYSTEM_.getElem("#androidx iframe").src;
      _OPERATING_SYSTEM_.getElem("#androidx .close_android").id = "__device_offline";
    } else if (t.className == "close_android") {
      if (t.id == "__device_offline") {
        t.id = "__device_online";
        _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage("__device_online", "https://Iphone.teleweb.repl.co");
        _OPERATING_SYSTEM_.getElem("#androidx.andr .btn_reload").style.cssText = `filter: opacity(1); pointer-events: auto;`;
        _OPERATING_SYSTEM_.getElem("#androidx.andr .btn_back").style.cssText = `filter: opacity(1); pointer-events: auto;`;
        _OPERATING_SYSTEM_.getElem("#androidx.andr .btn_apps").style.cssText = `filter: opacity(1); pointer-events: auto;`;
        _OPERATING_SYSTEM_.getElem("#androidx.andr .btn_home").style.cssText = `filter: opacity(1); pointer-events: auto;`;
        _OPERATING_SYSTEM_.getElem("#androidx.andr .btn_inet").style.cssText = `filter: opacity(1); pointer-events: auto;`;
      } else {
        t.id = "__device_offline";
        _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage("__device_offline", "https://Iphone.teleweb.repl.co");
        _OPERATING_SYSTEM_.getElem("#androidx.andr .btn_reload").style.cssText = `filter: opacity(.5); pointer-events: none;`;
        _OPERATING_SYSTEM_.getElem("#androidx.andr .btn_back").style.cssText = `filter: opacity(.5); pointer-events: none;`;
        _OPERATING_SYSTEM_.getElem("#androidx.andr .btn_apps").style.cssText = `filter: opacity(.5); pointer-events: none;`;
        _OPERATING_SYSTEM_.getElem("#androidx.andr .btn_home").style.cssText = `filter: opacity(.5); pointer-events: none;`;

        _OPERATING_SYSTEM_.getElem("#androidx.andr .btn_inet").style.cssText = `filter: opacity(.5); pointer-events: auto;`;
      }
    } else if (t.className == "btn_home") {
      _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage("gohome", "https://Iphone.teleweb.repl.co");
    }
  }
  _OPERATING_SYSTEM_.getElem("#androidx #resz").oninput = function() {
    _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage(this.value, "https://Iphone.teleweb.repl.co");
  }
  _OPERATING_SYSTEM_.getElem("#androidx #inv").onclick = function() {
    if (this.style.color == "black") {
      _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage("hello", "https://Iphone.teleweb.repl.co");
      this.style.color = "white";
      this.style.background = "black";
    } else {
      _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage("helloo", "https://Iphone.teleweb.repl.co");
      this.style.color = "black";
      this.style.background = "white";
    }
  }
  function clearAll() {
    let uio = _ANDROID_DOM_.querySelectorAll("android-edit");
    for (let yo of uio) {
      yo.classList.remove("clicked");
    }
    _ANDROID_DOM_.querySelector("div.column.html").style.zIndex = "30";
    _ANDROID_DOM_.querySelector("div.column.css").style.zIndex = "20";
    _ANDROID_DOM_.querySelector("div.column.js").style.zIndex = "10";
  }
  _OPERATING_SYSTEM_.getElem("#__andr_edit_html").onclick = function() {
    clearAll();
    this.classList.add("clicked");
    _ANDROID_DOM_.querySelector("div.column.html").style.zIndex = "30";
  }
  _OPERATING_SYSTEM_.getElem("#__andr_edit_css").onclick = function() {
    clearAll();
    this.classList.add("clicked");
    _ANDROID_DOM_.querySelector("div.column.css").style.zIndex = "30";
  }
  _OPERATING_SYSTEM_.getElem("#__andr_edit_js").onclick = function() {
    clearAll();
    this.classList.add("clicked");
    _ANDROID_DOM_.querySelector("div.column.js").style.zIndex = "30";
  }
  _ANDROID_DOM_.querySelector("#__run_app").onclick = () => {
    _ANDROID_DOM_.querySelector("#open_console").click();
    _OPERATING_SYSTEM_.getElem("android-console").innerHTML = "";
    _OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;Launching to device...`;
    shellodeForApp();
    setTimeout(() => {
      _ANDROID_DOM_.querySelector("#androidx").style.display = "block";
      _ANDROID_DOM_.querySelector(".column.cl2").style.display = "none";
      _OPERATING_SYSTEM_.getElem("ANDROID-CONSOLE-LINE").innerHTML = `<android-client contenteditable="false" style="color: hsl(240deg 54% 59%);">~/replit/Android-client$</android-client>&nbsp;`;
    }, 2000);
  }
  _ANDROID_DOM_.querySelector("#open_console").onclick = () => {
    _ANDROID_DOM_.querySelector("#androidx").style.display = "none";
    _ANDROID_DOM_.querySelector(".column.cl2").style.display = "block";
  }
  _ANDROID_DOM_.querySelector("#open_emulator").onclick = () => {
    _ANDROID_DOM_.querySelector("#androidx").style.display = "block";
    _ANDROID_DOM_.querySelector(".column.cl2").style.display = "none";
  }
  _ANDROID_DOM_.querySelector("#__run_web").onclick = () => {
    _OPERATING_SYSTEM_.getElem("#run").click();
    setTimeout(() => {
      generateElectron();
    }, 2000);
    // setTimeout(() => {
    //   _OPERATING_SYSTEM_.getElem(".cl1").style.display = "block";
    // }, 5000);
  }
  _ANDROID_SOCKET_CONNECTOR_.on("getter", (data) => {
    if (_OPERATING_SYSTEM_.getElem("#androidx .close_android").id != "__device_online") {
      _OPERATING_SYSTEM_.getElem("#androidx .close_android").click();
      setTimeout(() => {
        _ANDROID_DOM_.querySelector("#androidx iframe").contentWindow.postMessage(`__runApp{url:${data.file}}`, "https://Iphone.teleweb.repl.co");
      }, 2000);
    } else {
      setTimeout(() => {
        _ANDROID_DOM_.querySelector("#androidx iframe").contentWindow.postMessage(`__runApp{url:${data.file}}`, "https://Iphone.teleweb.repl.co");
      }, 2000);
    }
    // let fg = _ANDROID_DOM_.createElement("p");
    // fg.className = "__oi";
    // fg.innerText = "Launching device...";
    // //_OPERATING_SYSTEM_.getElem(".cl2").scrollTop = 50;
    // _ANDROID_DOM_.querySelector("android-news-o").prepend(fg);
    // setTimeout(() => {
    //   fg.innerText = "Opening app...";
    //   _ANDROID_DOM_.querySelector("android-news-o").prepend(fg);
    //   setTimeout(() => {
    //     fg.innerText = "Launching app...";
    //   _ANDROID_DOM_.querySelector("android-news-o").prepend(fg);
    //     setTimeout(() => {
    //       fg.remove();
    //     }, 1000);
    //   }, 3000);
    // }, 3000);
    // setTimeout(() => {
    //   fg.remove();
    // }, 3000);
  });

  const hints = [
    `Щоб запустити проект на віртуальному девайсі, <br>натисніть на кнопку "Запустити на девайсі"`,
    `Щоб запустити проект у віртуальному вебі, <br>натисніть на кнопку "Запустити у WebView"`,
    `Щоб тимчасовий проект зробити постійним - просто напиши в консолі команду <code>build project</code>`,
    `Писав код і випадково видалив його? <br>Не хвилюйся, натисни на кнопку "історія коду" або в консолі <br>набери команду <code>projects</code> та віднови ту версію коду яка пропала`,
    `Ти можеш видяляти будь які шматки з історії коду`,
    `Пишеш код і нудно? Набери в консолі команду <code>--open -chat</code>,<br>запроси свого друга в редактор та спілкуйтеся))`,
    `Забув команди консолі? Не страшно, набери <code>--help</code> в консоль`,
    `Щоб очистити історію коду введи в консоль <code>history clear</code>`,
    `Написав багато коду а він неробочий, і ти хочеш видалити його? <br>Для HTML натисни <code>Alt+H</code><br>Для JS натисни <code>Alt+J</code><br>Для CSS натисни <code>Alt+C</code>`,
    `Щоб швидко запустити код y WebView, натисни <code>Ctrl+Enter</code>`,
    `Всі гарячі клавіші доступні якщо натиснути на кнопку "Інструкція"`
  ];
  let hint;
  hint = hints[Math.floor(Math.random() * hints.length)];
  document.querySelector("android-block android-super").innerHTML = hint;
  function m() {
    let out;
    setInterval(() => {
      hint = hints[Math.floor(Math.random() * hints.length)];
      document.querySelector("android-block android-super").innerHTML = hint;
      out = hint.length * 12;
    }, 5000);
  }
  m();
  function loadingScreen() {
    let fg = _ANDROID_DOM_.createElement("p");
    fg.className = "__oi";
    fg.innerText = "Launching device...";
    //_OPERATING_SYSTEM_.getElem(".cl2").scrollTop = 50;
    _ANDROID_DOM_.querySelector("android-news-o").prepend(fg);
    setTimeout(() => {
      fg.innerText = "Taking screenhoot...";
      _ANDROID_DOM_.querySelector("android-news-o").prepend(fg);
      setTimeout(() => {
        fg.remove();
      }, 1000);
    }, 2000);
  }
  _ANDROID_DOM_.querySelector(".__screenshoot").onclick = () => {
    if (users.includes(getCookie("__uuser__nnick__"))) {
      _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage("__take_pure_screen", "https://Iphone.teleweb.repl.co");
    } else {
      _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage("__take_screen", "https://Iphone.teleweb.repl.co");
    }
    //loadingScreen();
  }
  _ANDROID_DOM_.querySelector(".__screenshoot_o").onclick = () => {
    _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage("__take_screen_screen", "https://Iphone.teleweb.repl.co");
    //loadingScreen();
  }
  _ANDROID_DOM_.querySelector(".ham-menu").onclick = () => {
    if (_ANDROID_DOM_.querySelector("#ham-menu:checked")) {
      _ANDROID_DOM_.querySelector(".hide-des").click();
    }
  }
  _ANDROID_DOM_.querySelector(".__screenshoot_y").onclick = () => {
    _ANDROID_DOM_.querySelector(".cl1").style.display = "block";
    setTimeout(() => {
      AndroidScreenTaker.takeScreenFromElement(_ANDROID_DOM_.querySelector("#Code").contentWindow.document.querySelector("html"));
    }, 1000);
  }
  _ANDROID_DOM_.querySelector("#close_web").onclick = function() {
    this.parentNode.style.display = "none";
  }
  _ANDROID_DOM_.querySelector("#open_browser").onclick = function() {
    _ANDROID_DOM_.querySelector(".column.cl1").style.display = "block";
  }
  _ANDROID_DOM_.querySelector("#open_tab").onclick = function() {
    _ANDROID_DOM_.querySelector("#open_in").click();
  }
  _ANDROID_DOM_.querySelector("#copy_link").onclick = function() {
    _ANDROID_DOM_.querySelector("#copyLink").click();
  }
  _ANDROID_DOM_.querySelector("#font_size").oninput = function() {
    let y = _ANDROID_DOM_.querySelectorAll(".CodeMirror.cm-s-monokai.CodeMirror-wrap");
    for (let editor of y) {
      editor.style.fontSize = this.value + "px";
    }
    _ANDROID_DOM_.querySelector(".highLite_colors").style.fontSize = this.value + "px";
    _ANDROID_DOM_.querySelector("#html").style.fontSize = this.value + "px";
    localStorage.setItem("_font-size_", this.value);
  }
  _ANDROID_DOM_.querySelector("#font_size_cons").oninput = function() {
    _ANDROID_DOM_.querySelector(".column.cl2").style.fontSize = this.value + "px";
    localStorage.setItem("_font-size_Console_", this.value);
  }
  const TextSize = localStorage.getItem("_font-size_") ? localStorage.getItem("_font-size_") : 20;
  const TextSizeCons = localStorage.getItem("_font-size_console_") ? localStorage.getItem("_font-size_console_") : 24;
  let yi = _ANDROID_DOM_.querySelectorAll(".CodeMirror.cm-s-monokai.CodeMirror-wrap");
  for (let editor of yi) {
    editor.style.fontSize = Number(TextSize) + "px";
  }
  _ANDROID_DOM_.querySelector(".highLite_colors").style.fontSize = Number(TextSize) + "px";
  _ANDROID_DOM_.querySelector("#html").style.fontSize = Number(TextSize) + "px";
  _ANDROID_DOM_.querySelector(".column.cl2").style.fontSize = Number(TextSizeCons) + "px";
  _ANDROID_DOM_.querySelector("#open_projects").onclick = () => {
    _ANDROID_BUILD_PROJECTS_WATCHER(getCookie("nick"));
  }
  _ANDROID_DOM_.querySelector("#open_settings").onclick = () => {
    _OPERATING_SYSTEM_.getElem("#androidx.andr iframe").contentWindow.postMessage("__open_settings", "https://Iphone.teleweb.repl.co");
  }
  _ANDROID_DOM_.querySelector("what").onclick = () => {
    _ANDROID_DOM_.querySelector("android-block-empty").style.display = "block";
    _ANDROID_DOM_.querySelector("android-block-empty").onclick = function() {
      this.style.display = "none";
    }
  }
  _ANDROID_DOM_.querySelector("btnsend").onclick = function() {
    let answer1 = prompt("Отож, відповідь на перше питання:");
    let answer2 = prompt("відповідь на друге питання:");
    let answer3 = prompt("відповідь на третє питання:");
    if (answer1 != "" && answer2 != "" && answer3 != "") {
      _ANDROID_SOCKET_CONNECTOR_.emit("answer", {
        answ: `${getCookie("nick")} (${getCookie("__uuser__nnick__")}) рише:\nНаписати умову яка перевіряє чи починається заданий рядок "Hello JavaScript!" рядком "Yes": ${answer1};\n\nНаписати функцію що обчислює площу куба і повертає результат: ${answer2};\n\nПояснити своїми словами що таке змінна і яка різниця між змінною та константою: ${answer3}`
      });
    }
  }
  _ANDROID_DOM_.querySelector("#create_apk").onclick = () => {
    let apkBuildere = document.createElement("builder-show");
    apkBuildere.innerHTML = `<desk><pre>ПЕРЕТЯГНИ СЮДИ ФАЙЛИ</pre></desk><cllose>ЗАКРИТИ</cllose><ang><img src="__mobile/__constructor/__loaders/__2.svg" id="__looader"></ang>`;
    apkBuildere.id = "__builder";
    bllp.style.display = "block";
    document.body.appendChild(apkBuildere);
    web2apk("builder-show#__builder desk");
    _ANDROID_DOM_.querySelector("cllose").onclick = function() {
      this.parentNode.remove();
      bllp.style.display = "none";
    }
  }
  function WebAssemblyProject() {
    document.querySelector("body > android-project-create").style.display = "block";
    document.querySelector("body > blocki").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
    Androidcreate("@android");
    g_temp = "@android";
  }

const h = /([q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m]+)(\..+)/i;
const hid = /(.+)\#(.+)/i;
const lorem = /(.+)\*(\d+)/i;
const hwtext = /([q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m]+)(\..+)\:(.+)/i;
const gwt = /(.+)\:(.+)=(.+)/i; ///NO INPUT .
const inner = /(([q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m]+)>?).+/i;
const htmlp = `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <!--SYSTEM-CSS-NOT-DELETE-->
    </head>
    
    <body>
      Hello world
      <!--SYSTEM-JS-NOT-DELETE-->
    </body>
    
    </html>`;
function getCursorPosition(parent) {
  let selection = document.getSelection()
  let range = new Range
  range.setStart(parent, 0)
  range.setEnd(selection.anchorNode, selection.anchorOffset)
  return range.toString().length
}
document.querySelector("#html").onkeydown=function(e) {
    var elt = this;        
    if (e.keyCode == 9) {
        e.preventDefault();
        elt.focus();
        let sel = document.getSelection();
        sel.modify("extend", "backward", "sentence");
      //https://developer.mozilla.org/en-US/docs/Web/API/Selection/modify
        let range = sel.getRangeAt(0);
        let y = range.toString().trim();
      console.log(y)
        if (y === "fun") {
          range.deleteContents();
          var el = document.createElement("div");
          el.innerText = 'function';
          var frag = document.createDocumentFragment(), node;
          while (node = el.firstChild) {
              frag.appendChild(node);
          }
          range.insertNode(frag);
          range.collapse();
          highLite(_OPERATING_SYSTEM_.getElem("#html"));
        } else if (y == "!") {
          _OPERATING_SYSTEM_.getElem("#html").innerText = htmlp;
          highLite(_OPERATING_SYSTEM_.getElem("#html"));
        } else if (y.match(h)) {
          range.deleteContents();
          let u = y.match(h);
          console.log(u)
          var el = document.createElement("div");
          let yol = y.replace(h, "$2");
          yol = yol.replaceAll(".", " ");
          console.log(yol.replace(" ", ""))
          el.innerText = `<${y.replace(h, "$1")} class="${yol.replace(" ", "")}">hello</${y.replace(h, "$1")}>`;
          var frag = document.createDocumentFragment(), node;
          while (node = el.firstChild) {
              frag.appendChild(node);
          }
          range.insertNode(frag);
          range.collapse();
          highLite(_OPERATING_SYSTEM_.getElem("#html"));
        } else if (y.match(hid)) {
          range.deleteContents();
          let u = y.match(hid);
          console.log(u)
          var el = document.createElement("div");
          el.innerText = `<${y.replace(hid, "$1")} id="${y.replace(hid, "$2")}">hello</${y.replace(hid, "$1")}>`;
          var frag = document.createDocumentFragment(), node;
          while (node = el.firstChild) {
              frag.appendChild(node);
          }
          range.insertNode(frag);
          range.collapse();
          highLite(_OPERATING_SYSTEM_.getElem("#html"));
        } else if (y.match(lorem)) {
          range.deleteContents();
          let u = y.match(lorem);
          var el = document.createElement("div");
          el.innerText = ` ${y.replace(lorem, "$1").toString().repeat(y.replace(lorem, "$2"))}`;
          var frag = document.createDocumentFragment(), node;
          while (node = el.firstChild) {
              frag.appendChild(node);
          }
          range.insertNode(frag);
          range.collapse();
          highLite(_OPERATING_SYSTEM_.getElem("#html"));
        } else if (y.match(hwtext)) {
          range.deleteContents();
          let u = y.match(hwtext);
          var el = document.createElement("div");
          let yol = y.replace(hwtext, "$2");
          yol = yol.replaceAll(".", " ");
          console.log(yol.replace(" ", ""))
          el.innerText = `<${y.replace(hwtext, "$1")} class="${yol.replace(" ", "").split(":")[0]}">${yol.replace(" ", "").split(":")[1]}</${y.replace(hwtext, "$1")}>`;
          var frag = document.createDocumentFragment(), node;
          while (node = el.firstChild) {
              frag.appendChild(node);
          }
          range.insertNode(frag);
          range.collapse();
          highLite(_OPERATING_SYSTEM_.getElem("#html"));
        } else if (y.match(gwt)) {
          range.deleteContents();
          let u = y.match(gwt);
          var el = document.createElement("div");
          el.innerText = `<${y.replace(gwt, "$1")} ${y.replace(gwt, "$2")}=${y.replace(gwt, "$3")}></${y.replace(gwt, "$1")}>`;
          var frag = document.createDocumentFragment(), node;
          while (node = el.firstChild) {
              frag.appendChild(node);
          }
          range.insertNode(frag);
          range.collapse();
          highLite(_OPERATING_SYSTEM_.getElem("#html"));
        } else if (y.match(inner)) {
          range.deleteContents();
          let u = y.match(inner);
          let lp = y.split(">");
          let jk = `<${lp[0]}>--text--</${lp[0]}>`;
          let l = lp.shift();
          for (let g of lp) {
            jk = jk.replace("--text--", `<${g}>--text--</${g}>`);
          }
          console.log(jk)
          var el = document.createElement("div");
          el.innerText = jk;
          var frag = document.createDocumentFragment(), node;
          while (node = el.firstChild) {
              frag.appendChild(node);
          }
          range.insertNode(frag);
          range.collapse();
          highLite(_OPERATING_SYSTEM_.getElem("#html"));
        } else if (y != " " && y != "") {
          range.deleteContents();
          var el = document.createElement("div");
          el.innerText = `<${y}>hello</${y}>`;
          var frag = document.createDocumentFragment(), node;
          while (node = el.firstChild) {
              frag.appendChild(node);
          }
          range.insertNode(frag);
          range.collapse();
          highLite(_OPERATING_SYSTEM_.getElem("#html"));
        }
        else {
          range.collapse();
          e.preventDefault();
          _ANDROID_DOM_.execCommand("indent", false, null);
        }
    }
};
  document.querySelector("body > comp > tabgo img").onclick = () => {
  document.execCommand("indent", true, null);
}
document.querySelector("body > comp > tabback img").onclick = () => {
  document.execCommand("outdent", true, null);
}
})();
// Executes a command on the current document, current selection, or the given range.

// @param commandId — String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.

// @param showUI — Display the user interface, defaults to false.

// @param value — Value to assign.