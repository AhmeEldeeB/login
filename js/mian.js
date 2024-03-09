let home = document.querySelector(".home");
let registerLink = document.querySelector(".register");
let linkLogin = document.querySelector(".register-login");
let buttom = document.querySelector(".bot");
let iconClose = document.querySelector(".close");

linkLogin.addEventListener("click", () => {
  home.classList.add("active");
});

registerLink.addEventListener("click", () => {
  home.classList.remove("active");
});

buttom.addEventListener("click", () => {
  home.classList.add("active-bot");
});

iconClose.addEventListener("click", () => {
  home.classList.remove("active-bot");
});
