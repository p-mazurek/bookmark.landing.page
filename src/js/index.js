import "../scss/main.scss";

console.log("HELLO 🚀");

//hamburger menu
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

//switch cards
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

//faq display answers
const answers = document.querySelectorAll(".answer--js");
const arrows = document.querySelectorAll(".arrow--js");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    const arrowNum = this.dataset.number;
    const answerNum = document.querySelector(`${arrowNum}`);
    answers.forEach((answer) => {
      if (answer === answerNum) {
        answer.classList.toggle("question-box__answer--active");
        arrow.classList.toggle("question-box__arrow--active");
      } else {
        answer.classList.remove("question-box__answer--active");

      }
    });
  });
});
