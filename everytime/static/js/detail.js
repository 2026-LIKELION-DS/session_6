// 익명 버튼
document.addEventListener('click', function(event) {
    const btn = event.target.closest('.anonym_btn');

    const activeSrc = img.dataset.active;
    const inactiveSrc = img.dataset.inactive;

    const isNowActive = img.src.includes('active.png');

    if (!isNowActive) {
        img.src = activeSrc;
    } else {
        img.src = inactiveSrc;
    }
});


// 공감 버튼
const likeBtn = document.querySelector(".like_btn");
const likeCountSpan = document.querySelector(".like_num");

let isLike = false;

likeBtn.addEventListener("click", function () {
  if (!isLike) {
    let like_count = parseInt(likeCountSpan.textContent);
    likeCountSpan.textContent = like_count + 1;
    isLike = true;
  }
});

// 스크랩 버튼
const scrapBtn = document.querySelector(".scrap_btn");
const scrapCountSpan = document.querySelector(".scrap_num");
const scrapImg = scrapBtn.querySelector("img");

let isScrap = false;

scrapBtn.addEventListener("click", function () {
  let scrap_count = parseInt(scrapCountSpan.textContent);

  if (!isScrap) {
    scrapCountSpan.textContent = scrap_count + 1;
    scrapBtn.lastChild.textContent = "스크랩 취소";
    scrapImg.style.display = "none";

    isScrap = true;
  } else {
    scrapCountSpan.textContent = scrap_count - 1;
    scrapBtn.lastChild.textContent = "스크랩";
    scrapImg.style.display = "block";

    isScrap = false;
  }
});

// 댓글, 대댓글 기능
const submitButtons = document.querySelectorAll(".submit_btn");

submitButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const parentContainer = this.closest(".input_container, .re_comment_input");
    const inputField = parentContainer.querySelector("input");

    const commentValue = inputField.value;

    alert(commentValue);
  });
});

// 대댓글 버튼 누르면 입력창
const replyBtn = document.querySelector(".re_comment_btn");
const replyInput = document.querySelector(".re_comment_input");

replyBtn.addEventListener("click", () => {
  replyInput.classList.toggle("active");
});
