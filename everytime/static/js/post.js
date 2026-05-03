document.addEventListener("DOMContentLoaded", () => {
  const writeCollapsed = document.getElementById("write-collapsed");
  const writeExpanded = document.getElementById("write-expanded");

  const questionCheck = document.getElementById("questionCheck");
  const infoBox = document.getElementById("questionInfoBox");

  if (writeCollapsed && writeExpanded) {
    writeCollapsed.addEventListener("click", () => {
      writeCollapsed.classList.add("hidden");
      writeExpanded.classList.remove("hidden");
    });
  }

  if (questionCheck && infoBox) {
    questionCheck.addEventListener("change", function () {
      if (this.checked) {
        infoBox.classList.remove("hidden");
      } else {
        infoBox.classList.add("hidden");
      }
    });
  }
  const writeContent = document.querySelector(".write-content");
  const rulesBox = document.querySelector(".rules-box");

  if (writeContent && write - collapsed) {
    // 클릭할 때가 아니라, '타자를 칠 때(input)' 동작하게 만듭니다.
    writeContent.addEventListener("input", function () {
      // 입력창에 글자가 1글자라도 있으면 (공백 제외)
      if (writeContent.value.trim().length > 0) {
        rulesBox.style.display = "none"; // 규칙 박스 숨기기
      } else {
        // 다 지워서 다시 빈칸이 되면
        rulesBox.style.display = "block"; // 규칙 박스 다시 보여주기
      }
    });
  }
});
