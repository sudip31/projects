function myfunction() {
  var x = document.getElementById("pass");

  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function validate() {
  var password = document.getElementById("pass");
  var length = document.getElementById("length");
  var email = document.getElementById("email");

  if (password.value.match(" ")) {
    alert(
      "Login Failed!  please enter minimum 5 length password 1 special character 1 upper case and one lower case without giving space"
    );
  } else if (
    password.value.length >= 5 &&
    password.value.match(/[0-9]/i) &&
    password.value.match(/[^A-Za-z0-9-' ']/i)
  ) {
    document.getElementById("check").style.color = "green";
    alert("Login Succesfull Go to next Page");
    window.location.replace("newpage.html");
    return false;
  } else {
    alert(
      "Login Failed!  please enter minimum 5 length password 1 special character 1 upper case and one lower case without giving space"
    );
  }
}

function lpage() {
  window.location.replace("Landingpage.html");
}
