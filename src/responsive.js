function hamburger_click() {
  let navlist = document.getElementById("nav-list-links");
  if (navlist.className === "nav-list") {
    navlist.className += " responsive";
  } else {
    navlist.className = "nav-list";
  }
}
