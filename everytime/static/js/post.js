const notice = document.getElementById("question_noti");
const btn = document.getElementById("check_for_question");

btn.addEventListener("click", function() {
    if (btn.checked) {
            notice.style.display = "block";
        } else {
            notice.style.display = "none";
        }
});