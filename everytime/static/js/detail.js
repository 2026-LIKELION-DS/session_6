const tta_btn = document.querySelector(".ttabong_button");
const scrap_btn = document.querySelector(".scrap_button");

const scrap_btn_text = scrap_btn.querySelector("div");

const tta_display_num = document.querySelector(".ttabong_count");
const scrap_display_num = document.querySelector(".scrap_count");

const rethatguel_btn = document.getElementById("reReply");
const rethatguel_popup = document.querySelector(".boxForHide");

const rethatguel = document.querySelector(".reThatguelChang");
const rethatguel_submit = document.querySelector(".submit_comment_rtg");
const rethatguel_input = document.querySelector(".reThatguelChang")

const thatguel = document.querySelector(".thatguelChang");
const thatguel_submit = document.querySelector(".submit_comment_tg");

let tta_count = 0;
let scr_count = 0;
let isScrapped = false;

let thatguelContent;
let reThatguelContent;


tta_btn.addEventListener("click", function () {
    tta_count++;
    tta_display_num.textContent = tta_count;
    
    tta_btn.disabled = true;
    tta_btn.style.opacity = "0.5";
    tta_btn.style.cursor = "default";
});


scrap_btn.addEventListener("click", function() {
    if (!isScrapped) {
        scr_count++;
        scrap_btn_text.textContent = "스크랩 취소";
        isScrapped = true;
    } else {
        scr_count--;
        scrap_btn_text.textContent = "스크랩";
        isScrapped = false;
    }
    scrap_display_num.textContent = scr_count;
});

rethatguel_btn.addEventListener("click", function() {
    if (rethatguel_popup.style.display === "flex") {
        rethatguel_popup.style.display = "none";
    } else {
        rethatguel_popup.style.display = "flex";
    }
});

rethatguel_submit.addEventListener("click", function() {
    const reThatguelContent = rethatguel_input.value;

    if (reThatguelContent){
        alert(reThatguelContent);
        rethatguel_input.value = "";
    } else {
        alert("대댓글 내용을 입력해주세요!")
    }
});

thatguel_submit.addEventListener("click", function() {
    const content = thatguel.value; 
    if (content) {
        alert(content);
        thatguel_input.value = "";
    } else {
        alert("댓글 내용을 입력해주세요!");
    }
});