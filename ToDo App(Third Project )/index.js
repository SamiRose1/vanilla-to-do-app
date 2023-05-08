const inputField = document.getElementById("input-field");
const savedInputs = document.getElementById("inputs");
console.log(inputField.value);
const delBtn = document.getElementById("delete-btn");
const inputForm = document.getElementById("input-form");
const date = new Date();
const btnAdd = document.querySelector(".addBtn");
const footer = (document.querySelector(".copyright").textContent =
  date.getFullYear());

const counterEl = document.querySelector(".counter");

let counter = 0;

inputField.addEventListener("change", (e) => {
  //create a div
  const divContainer = document.createElement("div");
  divContainer.classList.add("divContainer");
  //create the h3 element
  const h3El = document.createElement("h3");
  h3El.innerText = e.target.value;
  divContainer.append(h3El);

  counter++;

  ///Done button
  const btnDone = document.createElement("button");
  btnDone.innerText = "Done";
  btnDone.classList.add("doneBtn");
  divContainer.append(btnDone);
  //Delete button
  const btnDel = document.createElement("button");
  btnDel.innerText = "Delete";
  btnDel.classList.add("deleteBtn");

  divContainer.append(btnDel);
  h3El.classList.add("list");
  //handling delete button

  btnDel.addEventListener("click", () => {
    h3El.remove();
    btnDel.remove();
    btnDone.remove();
    counter--;
    counterEl.textContent = `You have ${counter} ${
      counter > 1 ? "lists" : "list"
    }`;
  });
  //handling btnDone button
  let handleDone = false;
  btnDone.addEventListener("click", () => {
    handleDone = !handleDone;
    handleDone
      ? (h3El.style.textDecoration = "line-through")
      : (h3El.style.textDecoration = "none");
  });

  //adding all to the main div
  savedInputs.append(divContainer);
  counterEl.textContent = `You have ${counter} ${
    counter > 1 ? "lists" : "list"
  }`;
});
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  inputField.value = " ";
});
