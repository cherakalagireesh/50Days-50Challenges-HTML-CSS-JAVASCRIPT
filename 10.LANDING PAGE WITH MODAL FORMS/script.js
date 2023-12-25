"use strict";

const login_btn = document.querySelector(".login-btn");
const signup_btn = document.querySelector(".signup-btn");
const login_modal = document.querySelector(".login-form-wrapper");
const signup_modal = document.querySelector(".signup-form-wrapper");
const signup_close = document.querySelector(".signup-close");
const login_close = document.querySelector(".login-close");
const form_container = document.querySelector(".form-container");

login_btn.addEventListener("click", function () {
  login_modal.classList.add("display");
  form_container.classList.add("disable");
});

signup_btn.addEventListener("click", function () {
  signup_modal.classList.add("display");
  form_container.classList.add("disable");
});

login_close.addEventListener("click", function () {
  login_modal.classList.remove("display");
  form_container.classList.remove("disable");
});

signup_close.addEventListener("click", function () {
  signup_modal.classList.remove("display");
  form_container.classList.remove("disable");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    form_container.classList.remove("disable");
  }
});

form_container.addEventListener("click", function () {
  form_container.classList.remove("disable");
});
