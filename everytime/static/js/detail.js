//공감, 스크랩 버튼
const likeBtn = document.querySelector(".like_gray");
const scrapBtn = document.querySelector(".scrap_gray");

//스크랩의 별이미지, 취소 텍스트
const star = document.querySelector(".scrap_img");
const cancel = document.querySelector(".cancel");

//공감 수, 스크랩 수
const likenum = document.querySelector(".like-num");
const scrapnum = document.getElementById("scrap-num");

//댓글입력창, 입력input 입력빨강버튼
const commentBox = document.querySelector(".option");
const commentInput = document.querySelector(".comment");
const submitBtn = document.querySelector(".submit");

//대댓글 클릭 텍스트, 대댓글 박스
const reCommentBtn = document.querySelector("reco-button");
const reCommentInput = document.getElementById("re-comment");

//대댓글입력input, 대댓글용 입력빨강버튼
const reCoInput = document.querySelector(".reco-input");
const reCoSubmitBtn = document.querySelector(".re-submit");

//대댓글 box
const reCoDetail = document.querySelector(".reco-detail");
const reCoContents = document.querySelector(".reco-contents");

let likecount = false;
let isClicked = false;
let isRecoClicked = false;

let isSubmitBtnClicked = false;

likeBtn.addEventListener("click", function () {
  if (likecount === false) {
    likecount = true;
    likenum.textContent = Number(likenum.textContent) + 1;
  }
});

scrapBtn.addEventListener("click", function () {
  if (isClicked === false) {
    isClicked = true;

    scrapnum.textContent = Number(scrapnum.textContent) + 1;
    cancel.style.display = "flex";
    star.style.display = "none";
  } else {
    isClicked = false;
    scrapnum.textContent = Number(scrapnum.textContent) - 1;
    cancel.style.display = "none";
    star.style.display = "block";
  }
});

//댓글 입력시 alert창 뜨게하기
submitBtn.addEventListener("click", function () {
  const cmtValue = commentInput.value;
  alert(cmtValue);
  console.log(cmtValue);
});

//대댓글 텍스트 클릭 시 하단에 대댓글 창 보이게
reCommentBtn.addEventListener("click", function () {
  if (isRecoClicked === false) {
    isRecoClicked = true;
    reCommentInput.style.display = "flex";
  } else {
    isRecoClicked = false;
    reCommentInput.style.display = "none";
  }
});

//대댓글 입력 시, alert창 뜨게 하기
reCoSubmitBtn.addEventListener("click", function () {
  const reCoValue = reCoInput.value;
  alert(reCoValue);
  reCoContents.textContent = reCoValue;
  reCoDetail.style.display = "block";
});
