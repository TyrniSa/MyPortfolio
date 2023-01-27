/*Show Slideshow and Content When Clicking H3, but only when on index.html */
if (window.location.pathname === "/") {
  document.getElementById("project-1").onclick = function () {
    var x = document.getElementById("slideshow-img");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("caret-1").style.transform = "rotate(90deg)";
    } else {
      x.style.display = "none";
      document.getElementById("caret-1").style.transform = "rotate(0deg)";
    }
  }
  /*Slideshow controls*/
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) { showSlides(slideIndex += n); }
  function currentSlide(n) { showSlides(slideIndex = n); }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}

/* Dark Mode On/Off */
document.getElementById("toggle-on").style.display = "none";
document.getElementById("toggle-off").onclick = function () { darkMode(); }
document.getElementById("toggle-on").onclick = function () { normalMode(); }

function darkMode() {
  document.querySelector("html").style.backgroundColor = "#2F3847";
  document.querySelector("html").style.color = "white";
  document.getElementById("darkmode").style.background = "#2F3847"
  document.getElementById("toggle-off").style.color = "white";
  document.getElementById("toggle-off").style.display = "none";
  document.getElementById("toggle-on").style.display = "block";

}

function normalMode() {
  document.querySelector("html").style.backgroundColor = "white";
  document.querySelector("html").style.color = "black";
  document.getElementById("darkmode").style.background = "rgb(0,0,0,0)"
  document.getElementById("toggle-off").style.color = "black";
  document.getElementById("toggle-off").style.display = "block";
  document.getElementById("toggle-on").style.display = "none";
}