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
    
}

async function showChar() {
    let text = "Class: " + await getClass();
    document.getElementById("result").innerHTML = text;
}
