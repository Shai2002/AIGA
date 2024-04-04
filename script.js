

function changeColor() {
  var nameInput = document.getElementById("name-input");
  var colorPicker = document.getElementById("color-picker");
  var name = nameInput.value;
  var color = colorPicker.value;

  if (name !== "") {
      nameInput.style.color = color;
      nameInput.value = "";

      // Redirect to the second page with parameters
      var url = "التهنئة 2.html" + "?name=" + encodeURIComponent(name) + "&color=" + encodeURIComponent(color);
      window.location.href = url;
  }
}