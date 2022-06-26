//burder menu

const iconMenu = document.querySelector(".menu__icon");
const iconMenuSpan = document.querySelector(".menu__icon > span");
const menuBody = document.querySelector(".header__menu");
const body = document.querySelector("body");

iconMenu.addEventListener("click", function (e) {
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  body.classList.toggle("_lock");
  // заекрытие меню по клику на любую область
  // дополниельно делаем проверку клик по спану, что бы отрабатывало закрытие
  window.onclick = function (e) {
    if (e.target !== menuBody && e.target !== iconMenu && e.target !== iconMenuSpan) {
      menuBody.classList.remove("_active");
      iconMenu.classList.remove("_active");
    }
  };
});
