let btn = document.getElementById("enter");
btn.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    console.log("Enter key pressed");
  }
});
