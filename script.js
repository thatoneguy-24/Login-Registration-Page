const wrapper = document.querySelector(".wrapper");
const loginTitle = document.querySelector(".login-title");
const registerTitle = document.querySelector(".register-title");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

function changeToLogin() {
  wrapper.style.height = "500px";
  loginTitle.style.top = "0px";
  loginTitle.style.opacity = 1;
  registerTitle.style.top = "50px";
  registerTitle.style.opacity = 0;
  loginForm.style.left = "50%";
  loginForm.style.opacity = 1;
  registerForm.style.left = "150%";
}

function changeToRegister() {
  wrapper.style.height = "580px";
  loginTitle.style.top = "-60px";
  loginTitle.style.opacity = 0;
  registerTitle.style.top = "0px";
  registerTitle.style.opacity = 1;
  loginForm.style.left = "-50%";
  loginForm.style.opacity = 0;
  registerForm.style.left = "50%";
}
