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
      if (maxWidth) {
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


// header bg slideshow 
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".header__bg-container");

  sliders.forEach((slider, sliderIndex) => {
    const images = slider.querySelectorAll(".header__bg__imgs__item");
    let currentImageIndex = 0;
    
    // Hide all images except the first one
    images.forEach((img, index) => {
      img.style.opacity = index === 0 ? "1" : "0";
    });

    const dotsContainer = slider.querySelector(".header__bg__slideshow__dots");
    const dots = [];

    // Create dots and numbers
    images.forEach((image, index) => {
      const dotContainer = document.createElement("div");
      dotContainer.classList.add("header__bg__slideshow__dot-container");
      
      const number = document.createElement("span");
      number.innerText = (index + 1).toString().padStart(2, '0');
      dotContainer.appendChild(number);

      const dot = document.createElement("div");
      dot.classList.add("header__bg__slideshow__dot");
      if (index === 0) dot.classList.add("header__bg__slideshow__dot--active");
      dotContainer.appendChild(dot);

      dotContainer.addEventListener("click", () => {
        moveToImage(index);
      });

      dotsContainer.appendChild(dotContainer);
      dots.push(dotContainer);
    });

    function moveToImage(index) {
      if (index === currentImageIndex) return;

      images[currentImageIndex].style.opacity = "0";
      images[index].style.opacity = "1";

      dots[currentImageIndex].querySelector(".header__bg__slideshow__dot").classList.remove("header__bg__slideshow__dot--active");
      dots[index].querySelector(".header__bg__slideshow__dot").classList.add("header__bg__slideshow__dot--active");

      currentImageIndex = index;
    }
  });
});




