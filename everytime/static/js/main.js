document.addEventListener("DOMContentLoaded", function () {
  const writeBtn = document.getElementById("writebtn");
  const boardArea = document.getElementById("boardArea");
  const postArea = document.getElementById("postArea");

  writeBtn.addEventListener("click", function () {
    boardArea.style.display = "none";
    postArea.style.setProperty("display", "block", "important");
  });
});

const questionNotice = document.getElementById("questionNotice");
const questioncheck = document.getElementById("questioncheck");

questioncheck.addEventListener("change", function () {
  if (questioncheck.checked) {
    questionNotice.style.display = "block";
  } else {
    questionNotice.style.display = "none";
  }
});
