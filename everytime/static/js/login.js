//로그인 버튼
const loginBtn = document.querySelector(".login_btn");
const inputId = document.querySelector(".input_id");
const inputPw = document.querySelector(".input_pw");

function checkInputForm(){
    if (inputId.value && inputPw.value){
        if (inputPw.value.length >= 8){
            loginBtn.style.background = "#F91F15";
        }
    }
}

inputId.addEventListener("input", checkInputForm);
inputPw.addEventListener("input", checkInputForm);
