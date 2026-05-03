const counter = document.getElementById("likecount");
const button = document.getElementById("likeBtn");
const scrapBtn = document.getElementById("scrapBtn");
const scrapCounter = document.getElementById("scrapcount");
const scrapText = document.getElementById("scrapText");

const redPencilBtn = document.getElementById("redpencilebutton");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("comment-list");
const replyBtn = document.getElementById("reply-btn");
const replyArea = document.getElementById("reply-area");

let count = 1;
let islike = false;
let sCount = 0;
let isScraped = false;

// button.addEventListener("click", function () {
  if (islike) {
    alert("이미 공감하셨습니다.");
    return;
  }

  count++;
  counter.textContent = count;

  islike = true;
});

// scrapBtn.addEventListener("click", function () {
  if (isScraped === false) {
    sCount++;
    scrapText.textContent = "스크랩 취소";
    isScraped = true;
    scrapBtn.style.backgroundColor = "#f0f0f0";
  } else {
    sCount--;
    scrapText.textContent = "스크랩";
    isScraped = false;
    scrapBtn.style.backgroundColor = "";
  }

  scrapCounter.textContent = sCount;
});

// redPencilBtn.addEventListener("click", function () {
  const val = commentInput.value;

  if (val === "") {
    alert("내용을 입력하시오");
    return;
  }

  alert(`"${val}" 댓글이 등록되었습니다!`);

  commentList.style.display = "block";
  commentInput.value = "";
});

replyBtn.addEventListener("click", function () {
  if (replyArea.style.display === "none") {
    replyArea.style.display = "block";
  } else {
    replyArea.style.display = "none";
  }
});
