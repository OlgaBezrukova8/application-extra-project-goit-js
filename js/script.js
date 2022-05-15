const books = [
  {
    id: "1",
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
  },
  {
    id: "2",
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
  },
  {
    id: "3",
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
  },
];

const rootEl = document.querySelector("#root");

const leftDiv = document.createElement("div");
leftDiv.classList.add("list__div");

const rightDiv = document.createElement("div");
rightDiv.classList.add("right__div");

const headEl = document.createElement("h1");
headEl.textContent = "Books list";

const listEl = document.createElement("ul");
listEl.classList.add("book__list");

const btnEl = document.createElement("button");
btnEl.textContent = "Add new book";

rootEl.append(leftDiv, rightDiv);
leftDiv.append(headEl, listEl, btnEl);

const rightSide = document.querySelector(".right__div");
const bookList = document.querySelector("book__list");

function renderList() {
  const listMarkup = books
    .map((book) => {
      return `
      <li class="book__item">
        <p class="book__title">${book.title}</p>
            <button class="edit__btn">Edit</button>
            <button class"delete__btn">Delete</button>
      </li>`;
    })
    .join("");

  document;
  bookList.insertAdjacentHTML("beforeend", listMarkup);

  const p = document.querySelector(".book__title");
  p.forEach((el) => el.addEventListener("click", renderPrewiew));
  document.querySelector(".edit__btn").forEach(el => el.addEventListener("click", ))
}

const renderPrewiew = (event) => {
  const book = books.find(
    (book) => book.title === event.currentTarget.textContent
  );
  rightSide.innerHTML("");
};

renderList();
