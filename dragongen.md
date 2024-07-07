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
      <input type="text" id="name" name="name" required><br><br>
      <!-- Size -->
      Select the dragon's size: <br>
      <input type="radio" id="small" name="size" value="Small" required>
      <label for="small">Small</label><br>
      <input type="radio" id="medium" name="size" value="Medium" required>
      <label for="medium">Medium</label><br>
      <input type="radio" id="large" name="size" value="Large" required>
      <label for="large">Large</label><br>
      <!-- Submit -->
      <input type="submit" onclick="showInput();">
    </form>
    <!-- Output -->
    <p>Output: </p>
    <p id="output"></p>
    <!-- JavaScript -->
    <script language="JavaScript">
      function showInput() {
        const form = document.forms["form1"];
        let text = "";
        for (let i = 0; i < form.length; i++) {
          text += form.elements[i].value;
          if (i + 1 != form.length) {
            text += " ";
          }
        }
        text += "<br>";
        document.getElementById("output").innerHTML = text;
      }
    </script>
    </body>
</html>
