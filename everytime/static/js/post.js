const questionNotice = document.getElementById("questionNotice");
const questioncheck = document.getElementById("questioncheck");

questioncheck.addEventListener("change", function () {
  if (questioncheck.checked) {
    questionNotice.style.display = "block";
  } else {
    questionNotice.style.display = "none";
  }
});
