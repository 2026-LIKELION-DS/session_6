const penBtn = document.querySelector(".pen");
const penDiv = document.querySelector(".new_board"); //flex
const newDiv = document.querySelector(".new_write"); //none

let isClicked = false;

penBtn.addEventListener("click", function () {
  if (isClicked === false) {
    isClicked = true;
    penDiv.style.display = "none";
    newDiv.style.display = "block";
  }
});
