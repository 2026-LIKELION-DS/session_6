function toggleQuestion(checkbox) {
    /* .question-notice 대신 .question으로 선택해줘야 파란 박스만이 아닌 영역 전체 사라짐! */
    let messageBox = document.querySelector(".question");
    let messageText = document.querySelector(".check-text");

    if (checkbox.checked === true) {
        messageBox.style.display = "block";
        messageText.style.color = "#05bcbc";
    } 
    else {
        messageBox.style.display = "none";
        messageText.style.color = "#666";
    }
}

function toggleAnonym(checkbox) {
    let anonymBox = document.querySelector(".question");
    let anonymText = document.querySelector(".anonym-text")

    if (checkbox.checked === true) {        
        messageBox.style.display = "block";
        anonymText.style.color = "#f91f15";
    }
    else {
        messageBox.style.display = "none";
        anonymText.style.color = "#666";
    }
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