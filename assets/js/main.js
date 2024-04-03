(function () {
  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
    } else {
      header_navbar.classList.remove("sticky");
    }

    // show or hide the back-top-top button
    var backToTo = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "flex";
    } else {
      backToTo.style.display = "none";
    }
  };

  // section menu active
  function onScroll(event) {
    var sections = document.querySelectorAll(".page-scroll");
    var scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (var i = 0; i < sections.length; i++) {
      var currLink = sections[i];
      var val = currLink.getAttribute("href");
      var refElement = document.querySelector(val);
      var scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  // for menu scroll
  var pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });
  });

  ("use strict");
})();

// Slider

// Slider for client say
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

const subBtn = document.querySelector(".sub-btn");
const subscribedPopup = document.querySelector(".subscribed");

subBtn.addEventListener("click", function () {
  subscribedPopup.style.display = "block";
  setTimeout(function () {
    subscribedPopup.style.display = "none";
  }, 2000);
});

// Dropdown menu links

const dropdown = document.getElementById("dropdown");
const upArrow = document.querySelector(".up-arrow");
const downArrow = document.querySelector(".down-arrow");
const dropdownLinks = document.querySelector(".dropdown-links");

dropdown.addEventListener("click", function () {
  if (dropdownLinks.style.display === "block") {
    // If dropdown links are currently visible, hide them
    dropdownLinks.style.display = "none";
    downArrow.style.display = "inline";
    upArrow.style.display = "none";
  } else {
    // If dropdown links are currently hidden, show them
    dropdownLinks.style.display = "block";
    downArrow.style.display = "none";
    upArrow.style.display = "inline";
  }
});

// Expand blogs section
function expandBlog(element) {
  // Remove 'clicked' class from all other blog containers
  const containers = document.querySelectorAll(".blog-container");
  containers.forEach((container) => {
    if (container !== element) {
      container.classList.remove("clicked");
    }
  });

  // Toggle 'clicked' class for the clicked blog container
  element.classList.toggle("clicked");
}
