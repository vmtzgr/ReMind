var isEnabled = true;

document.querySelector(".bttn").addEventListener("click", () => {
  isEnabled ^= true;
  document.querySelector(".create-blogs").classList.toggle("transform-active");
  if (isEnabled) {
    setTimeout(() => {
      document.querySelector(".bttn").innerHTML =
        '<img src="asstes/img/plus.svg" class="btn-img">';
    }, 35);
  } else {
    setTimeout(() => {
      document.querySelector(".bttn").innerHTML =
        '<img src="asstes/img/minus.svg" class="btn-img">';
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 35);
  }
});


