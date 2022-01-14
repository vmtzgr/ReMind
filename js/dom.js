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
document.querySelector("#btn").addEventListener("click", () => {
  isEnabled ^= true;
  document.querySelector(".blogs").classList.toggle("transform-active");
  if (isEnabled) {
      setTimeout(() => {
        document.querySelector("#btn").innerHTML = "Create Post";
      }, 35 );
  } else {
      setTimeout(() => {
        document.querySelector("#btn").innerHTML = "Hide";
      }, 35);
  }

});
