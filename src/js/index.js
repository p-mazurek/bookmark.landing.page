import "../scss/main.scss";

console.log("HELLO 🚀");

const hamburger = document.querySelector(".hamburger--js");
const hamburgerDeactive = document.querySelector(".hamburger-deactive--js");
const navMobile = document.querySelector(".nav-mobile--js");

hamburger.addEventListener("click", () => {
  navMobile.classList.add("head__nav-mobile--active");
  navMobile.classList.remove("head__nav-mobile--deactive");
});
hamburgerDeactive.addEventListener("click", () => {
  navMobile.classList.add("head__nav-mobile--deactive");
  navMobile.classList.remove("head__nav-mobile--active");
});

const buttons = document.querySelectorAll(".button--js");
const content = document.querySelectorAll(".tab");

buttons.forEach((button) => {

  button.addEventListener("click", function (e) {

    const id = this.dataset.target;
    const target = document.querySelector(`${id}`);

    content.forEach((element) => {
      if (element === target) {
        element.classList.add("tab--active");
      } else {
        element.classList.remove("tab--active");
      }
    });
  });
});
