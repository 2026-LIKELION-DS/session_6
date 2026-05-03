const userIdInput = document.querySelector('.login_id');
const userPwInput = document.querySelector('.login_pw');
const loginBtn = document.querySelector('#loginBtn');


function checkInputs() {
    const userIdValue = userIdInput.value;
    const userPwValue = userPwInput.value;

    if (userIdValue.length > 0 && userPwValue.length >= 8) {
        loginBtn.classList.add("active");
        loginBtn.style.backgroundColor = '#f91f15';
        loginBtn.disabled = false;
    } else {
        loginBtn.classList.remove("active");
        loginBtn.style.backgroundColor = '#737373';
        loginBtn.disabled = true;
    }
}

userIdInput.addEventListener('input', checkInputs);
userPwInput.addEventListener('input', checkInputs);
