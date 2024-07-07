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
    <form>
      <!-- Name -->
      <label for="name">Enter the dragon's name: </label>
      <input type="text" id="name" name="name"><br>
      <!-- Size -->
      <p>Select the dragon's size: </p>
      <input type="radio" id="small" name="size" value="Small">
      <label for="small">Small</label><br>
      <input type="radio" id="medium" name="size" value="Medium">
      <label for="medium">Medium</label><br>
      <input type="radio" id="large" name="size" value="Large">
      <label for="large">Large</label><br>
      <!-- Submit -->
      <input type="submit" value="Submit">
    </form>
    <!-- Output -->
    <p>Output: </p>
  </body>
</html>
