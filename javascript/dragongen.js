// Names are provided via the API of www.behindthename.com
function getName() {
  const URL = "https://www.behindthename.com/api/random.json?number=1&key=br816490501";
  let name = "";
  fetch (URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("API request failed!");
      }
    })
    .then(data => {
      console.log(data);
      obj = JSON.parse(data);
      return obj.names[0];
    })
    .catch(error => {
      return error;
    });
}

function showInput() {
  let text = getName();
  text += " the ";
  const size = document.getElementsByName("size");
  for (let i = 0; i < size.length; i++) {
    if (size[i].checked) {
      text += size[i].value + " Dragon";
    }
  }
  document.getElementById("result").innerHTML = text;
}
