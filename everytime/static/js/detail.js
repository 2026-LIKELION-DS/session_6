let isLiked = false;
let isScrapped = false;

function addLike() {
    // 이미 공감 눌렀으면 -> 아무것도 안 하고 함수 종료
    if (isLiked === true) {
        return; 
    }

    // 공감 안 눌렀으면 -> +1
    let voteNum = document.querySelector(".vote-num");
    let currentCount = Number(voteNum.innerText);
    voteNum.innerText = currentCount + 1;
    
    // 상태를 true로 바꿔서 -> 다시 못 누르게 막음
    isLiked = true; 
}

function addScrap() {
    let scrapNum = document.querySelector(".scrap-num");
    let currentCount = Number(scrapNum.innerText);
    
    let scrapBtn = document.querySelector(".scrap"); 

    if (isScrapped === false) { // 스크랩 시
        scrapNum.innerText = currentCount + 1;
        scrapBtn.innerText = "스크랩 취소"; 
        
        isScrapped = true;
    } else { // 스크랩 취소 시
        scrapNum.innerText = currentCount - 1;
        scrapBtn.innerHTML = '<img src="../img/container.articles.buttons.scrap.png" alt="스크랩" class="scrap-icon">스크랩';
        
        isScrapped = false;
    }
}



function toggleNav() {
    const sideHamburger = document.querySelector(".side-hamburger");
    sideHamburger.classList.toggle("active");
}



const submitBtn = document.querySelector(".submit-btn"); 
const commentInput = document.querySelector(".comment-input");

submitBtn.addEventListener("click", function() {
    const commentText = commentInput.value;
    
    if (commentText === "") {
        alert("댓글을 입력하세요.");
        event.preventDefault(); // 빈칸일 경우 django에게 전송 x, 그냥 여기서 멈춤
    }
});


function toggleQuestion(checkbox) {
    let messageBox = document.querySelector(".question");
    let questionText = document.querySelector(".question-text"); // 질문 글자만 색 바꾸기 위해

    if (checkbox.checked === true) {
        messageBox.style.display = "block";
        questionText.style.color = "#05bcbc";
    } 
    else {
        messageBox.style.display = "none";
        questionText.style.color = "#666";
    }
}



const replyBtn = document.querySelectorAll(".reply-btn");
const replys = document.querySelectorAll(".replys");
const replyText = document.querySelectorAll(".reply-text");
const replySubmitBtn = document.querySelectorAll(".reply-submit-btn"); 

for (let i = 0; i < replyBtn.length; i++) {
    replyBtn[i].addEventListener("click", function() {
        replys[i].classList.toggle("show");
        
        if (replys[i].classList.contains("show")) {
            replyText[i].focus();
        }
    });
}

for (let i = 0; i < replySubmitBtn.length; i++) {
    replySubmitBtn[i].addEventListener("click", function() {
        const text = replyText[i].value;

        if (text === "") {
            alert("대댓글 내용을 입력하세요.");
            event.preventDefault();
        }
    });
}





const menuLinks = document.querySelectorAll(".side-hamburger .banner-top a");

if (menuLinks.length > 0) {
    menuLinks[0].classList.add("active-menu");
    menuLinks[0].style.backgroundColor = "#f9f9f9";
    menuLinks[0].style.color = "#f91f15";
}

for (let i = 0; i < menuLinks.length; i++) {
    
    menuLinks[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "#f9f9f9";
        this.style.color = "#f91f15";
    });

    menuLinks[i].addEventListener("mouseout", function() {
        if (!this.classList.contains("active-menu")) {
            this.style.backgroundColor = "";
            this.style.color = "#1b1a1a";
        }
    });

    menuLinks[i].addEventListener("click", function(event) {
        for (let j = 0; j < menuLinks.length; j++) {
            menuLinks[j].classList.remove("active-menu");
            menuLinks[j].style.backgroundColor = "";
            menuLinks[j].style.color = "#1b1a1a";
        }
        
        this.classList.add("active-menu");
        this.style.backgroundColor = "#f9f9f9";
        this.style.color = "#f91f15";
    });
}




document.addEventListener("click", function(event) {
    const sideHamburger = document.querySelector(".side-hamburger");
    const hamburgerIcon = document.querySelector(".hamburger-icon");

    // 1. active 클래스가 있다면 (=사이드바가 열린 상태라면)
    if (sideHamburger.classList.contains("active")) {
        // 2. 방금 클릭한 곳(=event.target)이 사이드바 안쪽인가?
        const isClickedInsideSidebar = sideHamburger.contains(event.target);
        // 3. 방금 클릭한 곳(=event.target)이 hamburger-icon 그 자체인가?
        // 얘를 작성하지 않으면 사이드바를 열기 위한 햄버거 아이콘 클릭도 여백으로 인식해 사이드바 열리자마자 닫힘
        const isClickedHamburgerIcon = hamburgerIcon.contains(event.target);

        // 4. 클릭한 곳이 사이드바 안쪽도 아니고 && 햄버거 아이콘도 아니라면 (=즉 사이드바 바깥 여백이라면)
        if (!isClickedInsideSidebar && !isClickedHamburgerIcon) {
            sideHamburger.classList.remove("active"); // 사이드바 닫아버림
        }
    }
});