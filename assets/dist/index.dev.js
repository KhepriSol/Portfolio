"use strict";

var card = document.querySelector(".card");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX / window.innerWidth;
  var y = e.clientY / window.innerHeight;
  card.style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
}); //make it wiggle like a worm.//
// const card = document.querySelector(".card");
// const mainContent = document.querySelector(".main-content");
// document.addEventListener("mousemove", function(e) {
//   let x = e.clientX / window.innerWidth;
//   let y = e.clientY / window.innerHeight;
//   mainContent.style.transform = "translateX(-" + x * 10 + "px)";
//   card.style.transform = "translateX(" + x * 20 + "px) rotateY(" + y * 20 + "deg)";
// });
//# sourceMappingURL=index.dev.js.map
