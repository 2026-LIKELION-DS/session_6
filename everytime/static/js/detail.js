document.addEventListener("DOMContentLoaded", function () {
  const btnLike = document.getElementById("btn-like");
  const likeCountSpan = document.getElementById("like-count");
  let isLiked = false;

  btnLike.addEventListener("click", function () {
    if (isLiked === true) {
      alert("이미 공감한 글입니다.");
      return;
    }
    let currentCount = parseInt(likeCountSpan.textContent);
    likeCountSpan.textContent = currentCount + 1;
    isLiked = true;
    alert("이 글에 공감하셨습니다.");
  });

  const btnScrap = document.getElementById("btn-scrap");
  const scrapCountSpan = document.getElementById("scrap-count");
  let isScrap = false;

  btnScrap.addEventListener("click", function () {
    let currentScrapCount = parseInt(scrapCountSpan.textContent);

    if (isScrap === false) {
      scrapCountSpan.textContent = currentScrapCount + 1;
      btnScrap.innerHTML = "스크랩 취소";
      isScrap = true;
    } else {
      scrapCountSpan.textContent = currentScrapCount - 1;
      btnScrap.innerHTML =
        '<img src="../img/스크랩.png" alt="스크랩" /> 스크랩';
      isScrap = false;
    }
  });
});

function toggleReplyForm(commentId) {
  const replyArea = document.getElementById(`reply-area-${commentId}`);
  const openedReplyForm = replyArea.querySelector(".reply-input-form");
  if (openedReplyForm) {
    openedReplyForm.remove();
    return;
  }

  const replyFormHTML = `
      <div class="reply-input-wrapper">
        <input type="text" id="replyInput-${commentId}" placeholder="대댓글을 입력하세요." />
        <div class="reply-options">
          <label>
            <input type="checkbox" checked /> 익명
          </label>
          <button class="btn-reply-submit" onclick="submitReply(${commentId})">
            <img src="../img/에타 연필.png" alt="대댓글 등록" />
          </button>
        </div>
      </div>
    `;
  replyArea.insertAdjacentHTML("beforeend", replyFormHTML);
}

document.addEventListener("DOMContentLoaded", function () {
  const btnSubmit = document.querySelector(".btn-submit");
  const mainInput = document.getElementById("mainCommentInput");

  btnSubmit.addEventListener("click", function () {
    const commentValue = mainInput.value;

    if (commentValue.trim() === "") {
      alert("댓글 내용을 입력해주세요!");
    } else {
      alert(commentValue);
      mainInput.value = "";
    }
  });
});
function submitReply(commentId) {
  const replyInput = document.getElementById(`replyInput-${commentId}`);
  const replyValue = replyInput.value;

  if (replyValue.trim() === "") {
    alert("대댓글 내용을 입력해주세요!");
  } else {
    alert("작성한 대댓글: " + replyValue);
    replyInput.value = ""; // 전송 후 입력창 비우기

    // (선택) 대댓글 전송 후 창을 자동으로 닫고 싶다면 아래 주석을 해제하세요.
    // document.getElementById(`reply-area-${commentId}`).innerHTML = "";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // 1. 버튼과 숫자 들어갈 공간(span) 가져오기
  const likeBtn = document.getElementById("btn-like");
  const scrapBtn = document.getElementById("btn-scrap");

  const likeCountSpan = document.getElementById("like-count");
  const scrapCountSpan = document.getElementById("scrap-count");

  // 2. 공감 버튼 누를 때
  if (likeBtn) {
    likeBtn.addEventListener("click", function () {
      // 현재 적혀있는 숫자 가져오기 (문자를 숫자로 변환)
      let currentCount = parseInt(likeCountSpan.innerText) || 0;

      // 이미 'active' 클래스가 있다면? = 이미 눌렀던 상태라면 취소
      if (likeBtn.classList.contains("active")) {
        likeCountSpan.innerText = currentCount - 1; // 숫자 1 감소
        likeBtn.classList.remove("active"); // 활성화 상태 해제
        likeBtn.style.color = ""; // 글씨 색상 원래대로
      }
      // 누르지 않은 상태라면? = 공감 +1
      else {
        likeCountSpan.innerText = currentCount + 1; // 숫자 1 증가
        likeBtn.classList.add("active"); // 활성화 상태 추가
        likeBtn.style.color = "#c62917"; // 에타 빨간색으로 변경
      }

      // (나중을 위한 팁) 실제 장고 DB에 숫자를 올리려면
      // 여기서 fetch('/공감처리하는주소/') 를 날려야 합니다!
    });
  }

  // 3. 스크랩 버튼 누를 때 (공감과 원리 동일)
  if (scrapBtn) {
    scrapBtn.addEventListener("click", function () {
      let currentCount = parseInt(scrapCountSpan.innerText) || 0;

      if (scrapBtn.classList.contains("active")) {
        scrapCountSpan.innerText = currentCount - 1;
        scrapBtn.classList.remove("active");
        scrapBtn.style.color = "";
      } else {
        scrapCountSpan.innerText = currentCount + 1;
        scrapBtn.classList.add("active");
        scrapBtn.style.color = "#ffbc00"; // 에타 노란색으로 변경
      }
    });
  }
});
