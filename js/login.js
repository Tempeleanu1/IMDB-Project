// var names = ["Bogdan", "Nicoleta", "Felix", "Mihai"];
// json.stringify(names);

var logged = form.userid.value;



//Login button event

// TODO - nu e necesar sa creezi varibila logInEventButton, poti direct sa faci document.getElementById("login-event-button").addEventListener( ....
const logInEventButton = document.getElementById("login-event-button");

logInEventButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (!loginAlert.classList.contains("d-none")) {
    loginAlert.classList.add("d-none");
    loginAlert.innerHTML = "";
  }

  if (logInUsername.value === "") {
    loginAlert.classList.remove("d-none");
    loginAlert.innerHTML = "Username cannot be empty";
    logInUsername.value = "";
    return;
  }

  if (logInPassword.value === "") {
    loginAlert.classList.remove("d-none");
    loginAlert.innerHTML = "Password cannot be empty";
    return;
  }

  let logInUser = {
    username: logInUsername.value,
    password: logInPassword.value,
    endpoint: loginURL
  };
  // Create the globaly accesable userObject
  sessionStorage.setItem("userName", logInUser.username);

  const newUser = new User(logInUser);
  newUser.loginUser();
  // logIn(loginURL, logInUser);
});