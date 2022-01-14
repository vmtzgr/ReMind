var isEnabled = true;

function hide() {
  isEnabled ^= true;
  if (isEnabled) {
    var element = document.getElementById("blogs");
    element.classList.add("hidden");
    var btn = document.getElementById("btn");
    btn.innerHTML = "Create Post";
  } else {
    var element = document.getElementById("blogs");
    element.classList.remove("hidden");
    var btn = document.getElementById("btn");
    btn.innerHTML = "Hide";
  }
  
}
