var isEnabled = true;

// function hide() {
//   isEnabled ^= true;
//   if (isEnabled) {
//     var element = document.getElementById("blogs");
//     element.classList.add("hidden");
//     var btn = document.getElementById("btn");
//     btn.innerHTML = "Create Post";
//   } else {
//     var element = document.getElementById("blogs");
//     element.classList.remove("hidden");
//     var btn = document.getElementById("btn");
//     btn.innerHTML = "Hide";
//   }
// }

//Kurzform des obene geschriebenen Codes
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
