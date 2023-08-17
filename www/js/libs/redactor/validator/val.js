function ValidatorUser() {
  let _ANDROID_DOM_ = document;
  var userAgent = navigator.userAgent.toLowerCase();
  var Mozilla = /firefox/.test(userAgent);
  var Chrome = /chrome/.test(userAgent);
  var Safari = /safari/.test(userAgent);
  var Opera  = /opera/.test(userAgent);
  if ((Mozilla || (typeof InstallTrigger == "object" && !!window.chrome == false)) == true) {
    window.stop();
    _ANDROID_DOM_.body.remove();
    _ANDROID_DOM_.title = "Помилка Firefox";
    _ANDROID_DOM_.querySelector("html").innerHTML = "Редактор у Mozilla не доступний";
    _ANDROID_DOM_.querySelector("html").style.cssText = "font-size:50px;text-align:center;";
  }
}

export { ValidatorUser }