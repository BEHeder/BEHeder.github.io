---
layout: default
title: "Dragon Generator"
permalink: /dragongen.html/
---
<p>The dragon will have a name and a size.</p>
<form id="form1">
  <!-- Name -->
<!--   <label for="name">Enter the dragon's name: </label>
  <input type="text" id="name" name="name" required><br> -->
  <!-- Size -->
  Select the dragon's size: <br>
  <input type="radio" id="small" name="size" value="Small" required>
  <label for="small">Small</label><br>
  <input type="radio" id="medium" name="size" value="Medium" required>
  <label for="medium">Medium</label><br>
  <input type="radio" id="large" name="size" value="Large" required>
  <label for="large">Large</label><br>
  <!-- Submit & Reset -->
  <button type="button" onclick="showInput();">Submit</button>
  <input type="reset">
</form>
<!-- Output -->
<p>Result: </p>
<p id="result"></p>
<!-- JavaScript -->
<script src="/javascript/dragongen.js">
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
</script>
<!-- <script language="JavaScript">
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
</script> -->
