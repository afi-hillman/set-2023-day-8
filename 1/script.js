console.log("JS loaded");

let h1ArrayDom = document.querySelectorAll("h1");
let renderAnimalsDom = document.querySelector("#renderAnimals");
let renderFruitsDom = document.querySelector("#renderFruits");

for (let i = 0; i < h1ArrayDom.length; i++) {
  if (i % 2 === 0) {
    h1ArrayDom[i].setAttribute("style", "background-color:red");
  } else {
    h1ArrayDom[i].setAttribute("style", "background-color: yellow");
  }
}

let animals = ["lion", "tiger", "dolphin", "snake", "ant"];

for (let i = 0; i < animals.length; i++) {
  let newH1Dom = document.createElement("h1");
  newH1Dom.innerText = animals[i];
  renderAnimalsDom.appendChild(newH1Dom);
}

let fruits = ["apple", "pear", "grapes", "avocado", "orange"];

for (let i = 0; i < fruits.length; i++) {
  let html = `<h1>${fruits[i]}</h1>`;
  renderFruitsDom.insertAdjacentHTML("beforeend", html);
}
