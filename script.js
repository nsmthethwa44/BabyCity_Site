// when menu icon is clicked, toggle active menu,
// and close icon
let menu = document.querySelector(".navbar");
let menuImg = document.querySelector(".menuImg");
menuImg.onclick = () => {
  menuImg.classList.toggle("closeImg");
  menu.classList.toggle("active");
}

// when window is scrolled top remove menu 
// and close menu button
let scrollUp = document.querySelector(".scrollUp");
window.onscroll = () => {
   menuImg.classList.remove("closeImg");
  menu.classList.remove("active");

  if (window.scrollY > 200) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}

// when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
  }
})

  // when service link is clicked set an active class
  // filter the content
let servicesBox = document.querySelectorAll(".services .container .container_box .content .box");
let serviceLink = document.querySelectorAll(".services .container .container_box .links .link li");
Array.from(serviceLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentServiceLink = document.querySelector(".services .container .container_box .links .link li.active");
    currentServiceLink.classList.remove("active");
    e.target.classList.add("active");

    let filter = e.target.dataset.filter;
    servicesBox.forEach((item) => {
      if (filter == "all") {
        item.style.display = "block";
      } else if (item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    })
  }
})

// set an active class when span button is onclick,
// and filter content
let reviewsBox = document.querySelectorAll(".reviews .container .container_box .content .box");
let spanLink = document.querySelectorAll(".button span");
Array.from(spanLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentSpanLink = document.querySelector(".button span.active");
    currentSpanLink.classList.remove("active");
    e.target.classList.add("active");

    let filter = e.target.dataset.filter;
    reviewsBox.forEach((item) => {
      if (item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    })
  }
})