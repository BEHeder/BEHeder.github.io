// Names are provided via the API of www.behindthename.com
const colors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Violet"
];

const sizes = [
  "Tiny",
  "Small",
  "Medium",
  "Large",
  "Huge"
];

async function getName() {
  const URL = "https://www.behindthename.com/api/random.json?number=1&key=br816490501";
  const request = new Request(URL);
  const response = await fetch(request);
  const names = await response.json();
  return names["names"][0];
}

function getRandomItem(arrayOfItems) {
  return arrayOfItems[(Math.floor(Math.random() * arrayOfItems.length))];
}

async function showDragon() {
  let text = await getName();
  text += " the " + getRandomItem(sizes) + " " + getRandomItem(colors) + " Dragon";
  document.getElementById("result").innerHTML = text;
}
