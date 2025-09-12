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
    const url = "https://www.dnd5eapi.co/api/2014/" + urlAdd;
    let tempArray = [];
    await fetch(url)
        .then(response => response.json())
        .then(result => tempArray = result["results"])
        .catch(error => console.log(error));
    const randomItem = getRandomItem(tempArray);
    return randomItem["name"];
}

function rollDie(size) {
    // The range will be 1 to the size of the die
    return Math.floor((Math.random() * size) + 1);
}

function rollScore() {
    // Simulate rolling 4d6
    const rolls = [];
    for (let i = 0; i < 4; i++) {
        rolls.push(rollDie(6));
    }

    // Find and drop the lowest roll
    // These two lines could be combined, but they're separated for reading.
    let pos = rolls.indexOf(Math.min(...rolls));
    rolls.splice(pos, 1);

    // Calculate the score from the remaining 3d6
    return rolls.reduce((total, next) => total + next);
}

function rollScores() {
    // Simulate rolling 6 scores and return them
    const scores = [];
    for (let i = 0; i < 6; i++) {
        scores.push(rollScore());
    }
    return scores;
}

async function showChar() {
    // Fetch the random name, race, class, and alignment
    let text = "Name: " + await getName() + "<br>";
    text += "Race: " + await fetchRandomItem("races") + "<br>";
    text += "Class: " + await fetchRandomItem("classes") + "<br>";
    text += "Alignment: " + await fetchRandomItem("alignments") + "<br>";

    // Generate and list the 6 ability scores
    const scoresList = rollScores().join("<br>");
    text += "<u>Scores</u><br>" + scoresList;
    document.getElementById("result").innerHTML = text;
}
