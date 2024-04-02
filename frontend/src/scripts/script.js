var timeOut = 2000;
var slideIndex = 0;
var autoOn = true;
(function () {
  var width = window.innerWidth;
  var maxWidth = width < 700;

  window.addEventListener("resize", function () {
    var currentWidth = window.innerWidth;
    if (currentWidth >= 700 && maxWidth) {
      console.log("Width now >= 700, reloading.");
      window.location.reload(true);
      return;
    }

    if (currentWidth !== width) {
      console.log("hello world");
      width = currentWidth;

      if (currentWidth < 700) {
        console.log("the before");
        if (!maxWidth) {
          console.log("the after");
          maxWidth = true;
          autoSlides();
        }
      } else {
        maxWidth = false;
      }
    }
  });

  window.addEventListener("load", function () {
    if (window.innerWidth < 700) {
      console.log("the before (on load)");
      if (!maxWidth) {
        console.log("the after (on load)");
        maxWidth = true;
        autoSlides();
      }
    }
  });
})();

function autoSlides() {
  if (window.innerWidth < 700) {
    timeOut = timeOut - 20;

    if (autoOn == true && timeOut < 0) {
      showSlides();
    }
    setTimeout(autoSlides, 20);
    console.log("autoSlides is working");
  }
}

function prevSlide() {
  timeOut = 2000;

  var slides = document.getElementsByClassName(
    "collection__products_container"
  );
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex--;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex == 0) {
    slideIndex = 3;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlides() {
  timeOut = 2000;

  var slides = document.getElementsByClassName(
    "collection__products_container"
  );
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
