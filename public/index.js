let current_index = 0;
let time = 3000;
let images = [
  "public/volkswagen.jpg",
  "public/volkswagen-meteor.jpg",
  "public/volvo-supertruck.jpeg",
];

function showMenu() {
  if (document.getElementById("header-nav").style.display === "block") {
    document.getElementById("header-nav").style.display = "none";
  } else {
    document.getElementById("header-nav").style.display = "block";
  }
}

function slideshow() {
  document.slide.src = images[current_index];

  if (current_index < images.length - 1) {
    current_index++;
  } else {
    current_index = 0;
  }

  setTimeout("slideshow()", time);
}

window.onload = slideshow;
