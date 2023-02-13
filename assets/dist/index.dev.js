"use strict";

var card = document.querySelector(".card");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX / window.innerWidth;
  var y = e.clientY / window.innerHeight;
  card.style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
});
//# sourceMappingURL=index.dev.js.map
