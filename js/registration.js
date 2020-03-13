"use strict"

function send(formular, event) {
  event.preventDefault();
  let valid = true;


  let userNameInput = document.querySelector("[name='userName']");
  let passwordInput = document.querySelector("[name='password']");
  let passwordInputRetype = document.querySelector("[name='passwordRetype']");
  let emailInput = document.querySelector("[name='email']");

  var uName = userNameInput.value;
  var passIn = passwordInput.value;
  let passInRetype = passwordInputRetype.value;
  let emailIn = emailInput.value;

  if (uName.length > 1) {

    userNameInput.classList.add("changeColorGood");

  } else {

    userNameInput.classList.add("changeColorBad");


    valid = false;
  };

  if (passIn.length > 8) {


    passwordInput.classList.add("changeColorGood");

  } else {

    passwordInput.classList.add("changeColorBad");

    valid = false;
  };
  if (passInRetype.length > 8) {


    passwordInputRetype.classList.add("changeColorGood");

  } else {

    passwordInputRetype.classList.add("changeColorBad");

    valid = false;
  };
  if (emailIn.length > 1) {


    emailInput.classList.add("changeColorGood");

  } else {

    emailInput.classList.add("changeColorBad");

    valid = false;
  };


  function displayText() {

    document.querySelector("[name='topText']").classList.remove("hidden");
    let showText = document.querySelector("[name='topText']");
    showText.querySelector("[name='hiddenMessage']").innerHTML = " &#9745;  Thank you for registering, " + uName;

  }

  if (valid) {
    localStorage.setItem("username", uName = userNameInput.value)
    localStorage.setItem("password", passIn = passwordInput.value)
    displayText();
    document.form.reset();
    userNameInput.classList.remove("changeColorGood");
    passwordInput.classList.remove("changeColorGood");
    emailInput.classList.remove("changeColorGood");
  };

}

function hideText() {

  document.querySelector("[name='topText']").classList.add("hidden");

}





function contactFormCSS() {

  let userNameInput = document.querySelector("[name='userName']");
  let passwordInput = document.querySelector("[name='password']");
  let passwordInputRetype = document.querySelector("[name='passwordRetype']");
  let emailInput = document.querySelector("[name='email']");

  let uName = userNameInput.value;
  let passIn = passwordInput.value;
  let passInRetype = passwordInputRetype.value;
  let emailIn = emailInput.value;


  if (uName.length > 1) {

    userNameInput.classList.add("changeColorGood");
    userNameInput.classList.remove("changeColorBad");

  } else if (uName.length == 1) {

    userNameInput.classList.remove("changeColorGood");
    userNameInput.classList.add("changeColorBad");

  } else {

    userNameInput.classList.remove("changeColorBad");

  }

  if (passIn.length >= 8 && passIn==passInRetype) {

    passwordInput.classList.add("changeColorGood");
    passwordInput.classList.remove("changeColorBad");

  } else if (passIn.length <8 && passIn.length>1 || passIn!=passInRetype) {

    passwordInput.classList.remove("changeColorGood");
    passwordInput.classList.add("changeColorBad");

  } else if(passIn.length<1){

    passwordInput.classList.remove("changeColorBad");

  }
  if (passInRetype.length >= 8 && passInRetype==passIn) {

    passwordInputRetype.classList.add("changeColorGood");
    passwordInputRetype.classList.remove("changeColorBad");

  } else if (passInRetype.length <8 && passInRetype.length>1 || passInRetype!=passIn) {

    passwordInputRetype.classList.remove("changeColorGood");
    passwordInputRetype.classList.add("changeColorBad");

  } else if(passInRetype.length<1){

    paswordInputRetype.classList.remove("changeColorBad");

  }

  
  if (emailIn.length > 1) {

    emailInput.classList.add("changeColorGood");
    emailInput.classList.remove("changeColorBad");

  } else if (emailIn.length == 1) {

    emailInput.classList.remove("changeColorGood");
    emailInput.classList.add("changeColorBad");

  } else {

    emailInput.classList.remove("changeColorBad");

  }

}
