//회원가입
const inputName = document.querySelector("#name");
const inputNickname = document.querySelector("#nickname");
const inputEmail = document.querySelector("#email");
const inputPw = document.querySelector("#password");
const inputPwCheck = document.querySelector("#password_check");
const signupBtn = document.querySelector(".signup_btn");

function checkSignup(){
    if (inputName.value && inputNickname.value && inputEmail.value && inputPw.value && inputPwCheck.value){
        if (inputPw.value.length >= 8 && inputPwCheck.value.length >= 8){
            signupBtn.style.background = "#F91F15";
        }
    }
}

inputName.addEventListener("input", checkSignup);
inputNickname.addEventListener("input", checkSignup);
inputEmail.addEventListener("input", checkSignup);
inputPw.addEventListener("input", checkSignup);
inputPwCheck.addEventListener("input", checkSignup);
