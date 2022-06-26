//POPUP

const popUp = document.querySelector(".popup");
const popUpContent = document.querySelector(".popup__info");
//тут елемент на который кликаем
const telPopUp = document.querySelector(".header__logo");
//кнопка закрітия
const popUpClose = document.querySelector(".popupclose");
const body = document.querySelector("body");

let open = function () {
  popupPaddingRight();
  popUp.classList.add("_open");
  popUpContent.classList.add("_open");
  document.body.classList.add("_lock");
};

let close = function () {
  popUp.classList.remove("_open");
  popUpContent.classList.remove("_open");
  document.body.classList.remove("_lock");
  popUpContent.classList.remove("_form-out");
  body.style.paddingRight = 0 + "px";
  for (let i = 0; i < lockPadFixEl.length; i++) {
    let el = lockPadFixEl[i];
    el.style.paddingRight = 0 + "px";
  }
};

//Фикс на отступ для фиксированных елементов
//добавляем ко всем фиксированным элементам класс lock-padding
const lockPadFixEl = document.querySelectorAll(".lock-padding");

let popupPaddingRight = function () {
  let width = window.innerWidth - document.querySelector(".wrapper").clientWidth + "px";

  for (let i = 0; i < lockPadFixEl.length; i++) {
    let el = lockPadFixEl[i];
    el.style.paddingRight = width;
  }
  body.style.paddingRight = width;
};

telPopUp.addEventListener("click", (e) => {
  open();
  window.onclick = function (e) {
    if (e.target == popUp) {
      close();
    }
  };
});

popUpClose.addEventListener("click", (e) => {
  close();
});
