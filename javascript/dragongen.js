// Names are provided via the API of www.behindthename.com
const URL = "https://www.behindthename.com/api/random.json?number=1&key=br816490501"
let name = ""
fetch ("URL")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("API request failed!");
    }
  })
  .then(data => {
    obj = JSON.parse(data);
    return obj.name;
  })
  .catch(error => {
    return error;
  });
