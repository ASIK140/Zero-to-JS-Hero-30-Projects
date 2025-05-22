const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const passField = document.getElementById("pass");
const confirm_passField = document.getElementById("confirm_pass");
const submit = document.getElementById("submit");
const errorField = document.getElementById("error");


function nameValidation() {
  const name = nameField.value
  if (/\d/.test(name)) {
    errorField.textContent = "Enter a valid name"
    nameField.style.borderColor = 'red'
  }
  else {
    errorField.textContent = ''
    nameField.style.borderColor = 'green'
  }
}
function emailValidation() {
  const email = emailField.value
  const emailPatttern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPatttern.test(email)) {
    errorField.textContent = "Enter a valid email"
    emailField.style.borderColor = 'red'
  }
  else {
    errorField.textContent = ''
    emailField.style.borderColor = 'green'
  }
}
function phoneValidation() {
  const phone = phoneField.value;

  if (/[a-zA-Z]/.test(phone) || phone.length > 10) {
    errorField.textContent = "Enter a valid phone number"
    phoneField.style.borderColor = 'red'
  }
  else {
    errorField.textContent = ''
    phoneField.style.borderColor = 'green'
  }
}

function passValidation() {
  const pass = passField.value;
  const confirm_pass = confirm_passField.value
  if (pass.length == confirm_pass.length) {
    if (pass != confirm_pass) {
      errorField.textContent = "Password does not match"
      confirm_passField.style.borderColor = 'red'
    }
    else {
      errorField.textContent = ""
      confirm_passField.style.borderColor = 'green'
    }
  }
}





nameField.addEventListener("input", nameValidation)
emailField.addEventListener("input", emailValidation)
phoneField.addEventListener("input", phoneValidation)
confirm_passField.addEventListener("input",passValidation)