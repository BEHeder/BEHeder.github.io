---
layout: page
title: "Bryan Heder's Dragon Generator"
permalink: /dragongen.html/
---

<html>
  <head>
<!--     <title>Bryan Heder's Dragon Generator</title> -->
  </head>
  <body>
    <h1>Dragon Generator</h1>
    <p>You can generate a random dragon with this generator.</p>
    <form id="form1">
      <!-- Name -->
      <label for="name">Enter the dragon's name: </label>
      <input type="text" id="name" name="name" required><br>
      <!-- Size -->
      Select the dragon's size: <br>
      <input type="radio" id="small" name="size" value="Small" required>
      <label for="small">Small</label><br>
      <input type="radio" id="medium" name="size" value="Medium" required>
      <label for="medium">Medium</label><br>
      <input type="radio" id="large" name="size" value="Large" required>
      <label for="large">Large</label><br>
      <!-- Submit -->
      <button type="button" onclick="showInput();">Submit</button>
    </form>
    <!-- Output -->
    <p>Result: </p>
    <p id="result"></p>
    <!-- JavaScript -->
    <script language="JavaScript">
      function showInput() {
        let text = "";
        text += document.getElementById("name").value + " the ";
        const size = document.getElementsByName("size");
        for (let i = 0; i < size.length; i++) {
          if (size[i].checked) {
            text += size[i].value + " Dragon";
          }
        }
        document.getElementById("result").innerHTML = text;
      }
    </script>
    </body>
</html>
