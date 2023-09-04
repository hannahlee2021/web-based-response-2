
let navbar = document.getElementById("main-nav");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    header.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    header.classList.remove('navbarOffsetMargin');
  }
});

function showHoverDetails() {
    // Show the hover details
    document.getElementById("article-author").style.display = "block";
    document.getElementById("internet-point-2-explanation-2").style.display = "block";

  }
  
  function hideHoverDetails() {
    // Hide the hover details
    document.getElementById("article-author").style.display = "none";
    document.getElementById("internet-point-2-explanation-2").style.display = "block";
  }