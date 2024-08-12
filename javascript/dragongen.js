// Names are provided via the API of www.behindthename.com
async function getName() {
  const URL = "https://www.behindthename.com/api/random.json?number=1&key=br816490501";
  const request = new Request(URL);
  const response = await fetch(request);
  const names = await response.json();
  return names["names"][0];
}

function getSize() {
  const sizes = ["Small", "Medium", "Large"];
  return sizes[(Math.floor(Math.random() * sizes.length))];
}

async function showDragon() {
  let text = await getName();
  text += " the " + getSize() + " Dragon";
  document.getElementById("result").innerHTML = text;
}
