function hamburger_click() {
  var x = document.getElementById("nav-list-links");
  if (x.className === "nav-list") {
    x.className += " responsive";
  } else {
    x.className = "nav-list";
  }
}
