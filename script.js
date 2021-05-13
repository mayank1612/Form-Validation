let success = document.getElementById("success");
let error = document.getElementById("error");
let form = document.getElementById("form");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let number = document.getElementById("number");
let check = document.getElementById("check");
let btn = document.getElementById("btn");
let flag = false;
error.style.display = "none";
success.style.display = "none";

//check First Name
firstname.addEventListener("blur", () => {
  let txt = firstname.value;
  let reg = /^[a-zA-Z][\Sa-zA-Z]{0,20}$/;
  if (reg.test(txt)) {
    firstname.classList.add("is-valid");
    firstname.classList.remove("is-invalid");
    flag = true;
  } else {
    firstname.classList.add("is-invalid");
    firstname.classList.remove("is-valid");
    flag = false;
  }
});

// check Last Name
lastname.addEventListener("blur", () => {
  let txt = lastname.value;
  let reg = /^[a-zA-Z][\Sa-zA-Z]{0,20}$/;
  if (reg.test(txt)) {
    lastname.classList.add("is-valid");
    lastname.classList.remove("is-invalid");
    flag = true;
  } else {
    lastname.classList.add("is-invalid");
    lastname.classList.remove("is-valid");
    flag = false;
  }
});

// check User Name
username.addEventListener("blur", () => {
  let txt = username.value;
  let reg = /^[a-zA-Z][\w]{1,8}[a-zA-Z0-9]$/;
  if (reg.test(txt)) {
    username.classList.add("is-valid");
    username.classList.remove("is-invalid");
    flag = true;
  } else {
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
    flag = false;
  }
});

// check Email address (When input type="text" instead of type="email")
// email validation is based on gmail policy
email.addEventListener("blur", () => {
  let txt = email.value;
  let reg = /^[a-zA-Z0-9.][a-zA-Z0-9]{0,20}@[a-zA-Z]{1,10}[.][a-zA-Z]{2,10}$/;
  if (reg.test(txt)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    flag = true;
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    flag = false;
  }
});

//contact number constraint
number.addEventListener("blur", () => {
  let txt = number.value;
  let reg = /^[0-9]{10}$/;
  if (reg.test(txt)) {
    number.classList.add("is-valid");
    number.classList.remove("is-invalid");
    flag = true;
  } else {
    number.classList.add("is-invalid");
    number.classList.remove("is-valid");
    flag = false;
  }
});

//check constraint
check.addEventListener("click", () => {
  if (check.checked) {
    check.classList.remove("is-invalid");
    flag = true;
  } else {
    check.classList.add("is-invalid");
    flag = false;
  }
});

//submit button
btn.addEventListener("click", e => {
  e.preventDefault();
  if (
    flag == true &&
    firstname.value != "" &&
    lastname.value != "" &&
    username.value != "" &&
    email.value != "" &&
    number.value != "" &&
    check.checked
  ) {
    console.log("true");
    error.style.display = "none";
    success.style.display = "block";
    form.reset();
    firstname.classList.remove("is-valid");
    lastname.classList.remove("is-valid");
    username.classList.remove("is-valid");
    email.classList.remove("is-valid");
    number.classList.remove("is-valid");
  } else {
    console.log("false");
    success.style.display = "none";
    error.style.display = "block";
  }
});
