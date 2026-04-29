const postForm = document.querySelector(".post_container");
const newWrite = document.querySelector(".New_write");

newWrite.addEventListener("click", function () {
  if (postForm.style.display === "none" && newWrite.style.display === "flex") {
    postForm.style.display = "none";
    newWrite.style.display = "flex";
  } else {
    postForm.style.display = "block";
    newWrite.style.display = "none";
  }
});
