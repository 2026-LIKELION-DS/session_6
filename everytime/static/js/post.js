document.addEventListener("DOMContentLoaded", () => {
  const writeCollapsed = document.getElementById("write-collapsed");
  const writeExpanded = document.getElementById("write-expanded");

  const questionCheck = document.getElementById("questionCheck");
  const infoBox = document.getElementById("questionInfoBox");

  // 글쓰기 박스 열기
  if (writeCollapsed && writeExpanded) {
    writeCollapsed.addEventListener("click", () => {
      writeCollapsed.classList.add("hidden");
      writeExpanded.classList.remove("hidden");
    });
  }

  // 질문 체크 시 안내 박스 표시
  if (questionCheck && infoBox) {
    questionCheck.addEventListener("change", () => {
      if (questionCheck.checked) {
        infoBox.classList.remove("hidden");
      } else {
        infoBox.classList.add("hidden");
      }
    });
  }
});
