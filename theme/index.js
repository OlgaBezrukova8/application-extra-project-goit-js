import { menu } from "./menu.js";

const switcher = document.querySelector("#theme-switch-toggle");
const body = document.querySelector("body");
const menuList = document.querySelector(".js-menu");

const theme = {
  light: "light-theme",
  dark: "dark-theme",
};

if (!localStorage.getItem("theme")) {
  body.classList.add("light-theme");
  localStorage.setItem("theme", theme.light);
} else {
  body.classList.add(localStorage.getItem("theme"));
  if (localStorage.getItem("theme") === theme.light) {
    switcher.checked = true;
  }
}
switcher.addEventListener("change", themeChanger);

function themeChanger() {
  if (localStorage.getItem("theme") === theme.dark) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    localStorage.setItem("theme", theme.light);
  } else if (localStorage.getItem("theme") === theme.light) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    localStorage.setItem("theme", theme.dark);
  }
}

function renderList(array) {
  return array
    .map(
      ({ name, description, image, price, ingredients }) => `
    <li class="menu__item">
  <article class="card">
    <img
      src="${image}"
      alt="${name}"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">${name}</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        ${price} кредитов
      </p>

      <p class="card__descr">${description}</p>

      <ul class="tag-list">
      ${ingredients
        .map((el) => `<li class="tag-list__item">${el.ingredients}</li>`)
        .join("")}
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>
  </article>
</li>`
    )
    .join("");
}

menuList.insertAdjacentHTML("beforeend", renderList(menu));
