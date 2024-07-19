---
layout: default
title: "Dragon Generator"
permalink: /dragongen.html/
---

<p>The dragon will have a name and a size.</p>
<form id="form1">
  <!-- Size -->
  Select the dragon's size: <br>
  <input type="radio" id="small" name="size" value="Small" required>
  <label for="small">Small</label><br>
  <input type="radio" id="medium" name="size" value="Medium" required>
  <label for="medium">Medium</label><br>
  <input type="radio" id="large" name="size" value="Large" required>
  <label for="large">Large</label><br>
  
  <!-- Submit & Reset -->
  <button type="button" onclick="showInput()">Submit</button>
  <input type="reset">
</form>

<!-- Output -->
<p>Result: </p>
<p id="result"></p>

<!-- JavaScript -->
<script src="/javascript/dragongen.js"></script>
