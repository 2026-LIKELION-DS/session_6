const userId = document.getElementById("userid");
const userPw = document.getElementById("userpw");
const loginBtn = document.getElementById("login-btn");

function checkLoginConditions() {
    if (userId.value !== "" && userPw.value !== "" && userPw.value.length >= 8) {
        loginBtn.classList.add("active");
    } else {
        loginBtn.classList.remove("active");
    }
}

userId.addEventListener("input", checkLoginConditions);
userPw.addEventListener("input", checkLoginConditions);