function getRandomItem(arrayOfItems) {
    return arrayOfItems[(Math.floor(Math.random() * arrayOfItems.length))];
}

async function getClass() {
    const url = "https://www.dnd5eapi.co/api/classes";
    let classArray = [];
    await fetch(url)
        .then(response => response.json())
        .then(result => classArray = result["results"])
        .catch(error => console.log(error));
    const randomClass = getRandomItem(classArray);
    return randomClass["name"];
}

async function getRace() {
    const url = "https://www.dnd5eapi.co/api/races";
    let raceArray = [];
    await fetch(url)
        .then(response => response.json())
        .then(result => raceArray = result["results"])
        .catch(error => console.log(error));
    const randomRace = getRandomItem(raceArray);
    return randomRace["name"];
}

async function showChar() {
    let text = "Class: " + await getClass() + "<br>";
    text += "Race: " + await getRace();
    document.getElementById("result").innerHTML = text;
}
