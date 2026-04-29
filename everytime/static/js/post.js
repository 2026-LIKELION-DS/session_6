const nonBtn = document.getElementById("none");

const write = document.getElementById("active");
const activeBtn = document.getElementById("question0");
const box = document.querySelector(".que_div");

function toggleBox() {
  if (nonBtn.style.display === "block") {
    nonBtn.style.display = "none";
    activeBtn.style.display = "block";
    write.style.display = "block";
    box.style.display = "block";
  } else {
    nonBtn.style.display = "block";
    activeBtn.style.display = "none";
    write.style.display = "none";
    box.style.display = "none";
  }
}

nonBtn.addEventListener("click", toggleBox);
activeBtn.addEventListener("click", toggleBox);
