function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("click");
    // Get the output text
    var text = document.getElementById("long");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.top = "100px";
    } else {
      text.style.top = "-500px";
    }

  }