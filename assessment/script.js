console.log("js loaded");

let choresListDom = document.querySelector("#choresList");
let inputTextDom = document.querySelector("#list");
let insertListDom = document.querySelector("#insertList");
let priorityDom = document.querySelector("#priority");

let chores = getChores() || [];

function loopChores() {
  for (let i = 0; i < chores.length; i++) {
    let html = `<div class="card"><h4> ${i + 1}. ${
      chores[i]
    } ${priorityDom}</h4></div>`;
    choresListDom.insertAdjacentHTML("beforeend", html);
  }
}

function addList() {
  let newList = inputTextDom.value;
  let priority = parseInt(priorityDom.value);
  if (
    newList === "" ||
    chores === "" ||
    isNaN(priority) ||
    priority < 1 ||
    priority > 5
  ) {
    return;
  }
  // chores.push(newList);
  chores.push({ chore: chores, priority: priority });
  storeChores(chores);
  loopChores();
  inputTextDom.value = "";
  priorityDom.value = "";
  return;
}

window.addEventListener("keydown", function (event) {
  // when press enter
  if (event.key === "Enter") {
    console.log("user press enter");
    addList();
  }
});

// STORE CHORES ARRAY IN LOCAL STORAGE
function storeChores(newArray) {
  localStorage.setItem("chores", newArray);
}
//GET STORED VALUE IN LOCAL STORAGE
function getChores() {
  let storedChores = localStorage.getItem("chores");
  if (!storedChores) {
    return;
  }
  return storedChores.split(",");
}

// RUN LOOP CHORE DURING START
window.addEventListener("load", function () {
  loopChores();
});
