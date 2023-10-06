function changeBackgroundColor(className) {
  document.body.className = className;
}

document.getElementById("red").addEventListener("click", function () {
  changeBackgroundColor("red");
});

document.getElementById("green").addEventListener("click", function () {
  changeBackgroundColor("green");
});

document.getElementById("blue").addEventListener("click", function () {
  changeBackgroundColor("blue");
});

const cats = [
  {
    name: "Steve",
    age: 12,
    img: "https://loremflickr.com/221/221",
  },
  {
    name: "Fluffy",
    age: 3,
    img: "https://loremflickr.com/220/220",
  },
  {
    name: "Snowball",
    age: 37,
    img: "https://loremflickr.com/219/219",
  },
];

for (var i = 0; i < cats.length; i++) {
  document.getElementById(
    "cat-data"
  ).innerHTML += `<div id=${cats[i].name} class="cat-child"><h3>${cats[i].name}</h3><p>Age: ${cats[i].age}</p><img src=${cats[i].img} /></div>`;
}

const random = Math.random();
if (random < 0.33) {
  document.getElementById("catFacts").innerHTML =
    "A house cat’s genome is 95.6 percent tiger, and they share many behaviors with their jungle ancestors, says Layla Morgan Wilde, a cat behavior expert and the founder of Cat Wisdom 101. These behaviors include scent marking by scratching, prey play, prey stalking, pouncing, chinning, and urine marking.";
} else if (random > 0.66) {
  document.getElementById("catFacts").innerHTML =
    "Cats are believed to be the only mammals who don’t taste sweetness.";
} else {
  document.getElementById("catFacts").innerHTML =
    "Cats can jump up to six times their length.";
}
