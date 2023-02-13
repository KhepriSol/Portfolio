const card = document.querySelector(".card");

document.addEventListener("mousemove", function(e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  card.style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
});