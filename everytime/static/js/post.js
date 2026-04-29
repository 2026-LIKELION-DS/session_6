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