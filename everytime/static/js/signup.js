const nameInput = document.getElementById("name");
const nicknameInput = document.getElementById("nickname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const signupBtn = document.getElementById("signup-btn");

function checkSignupConditions() {
    const isAllFilled = 
        nameInput.value !== "" && 
        nicknameInput.value !== "" && 
        emailInput.value !== "" && 
        passwordInput.value !== "" && 
        confirmPasswordInput.value !== "";

    const isPasswordLongEnough = 
        passwordInput.value.length >= 8 && 
        confirmPasswordInput.value.length >= 8;

    if (isAllFilled && isPasswordLongEnough) {
        signupBtn.classList.add("active");
    } else {
        signupBtn.classList.remove("active");
    }
}

nameInput.addEventListener("input", checkSignupConditions);
nicknameInput.addEventListener("input", checkSignupConditions);
emailInput.addEventListener("input", checkSignupConditions);
passwordInput.addEventListener("input", checkSignupConditions);
confirmPasswordInput.addEventListener("input", checkSignupConditions);