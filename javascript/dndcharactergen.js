function getRandomItem(arrayOfItems) {
    return arrayOfItems[(Math.floor(Math.random() * arrayOfItems.length))];
}

async function getName() {
    const URL = "https://www.behindthename.com/api/random.json?number=1&key=br816490501";
    const request = new Request(URL);
    const response = await fetch(request);
    const names = await response.json();
    return names["names"][0];
}

async function fetchRandomItem(urlAdd) {
    const url = "https://www.dnd5eapi.co/api/" + urlAdd;
    let tempArray = [];
    await fetch(url)
        .then(response => response.json())
        .then(result => tempArray = result["results"])
        .catch(error => console.log(error));
    const randomItem = getRandomItem(tempArray);
    return randomItem["name"];
}

async function showChar() {
    let text = "Name: " + await getName() + "<br>";
    text += "Race: " + await fetchRandomItem("races") + "<br>";
    text += "Class: " + await fetchRandomItem("classes");
    document.getElementById("result").innerHTML = text;
}
