
const signupForm = document.getElementById('signupForm');
const inputs = document.querySelectorAll('.text-input'); 
const passwordInput = document.getElementById('signupPw');
const passwordCheckInput = document.getElementById('signupPwCheck');
const signupBtn = document.getElementById('signupBtn');

signupForm.addEventListener('input', () => {
    // 1. 모든 입력창(.text-input)이 비어있지 않은지 확인!!
    let allFilled = true;
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    // 2. 비밀번호가 8자 이상인지 확인
    const isPwValid = passwordInput.value.length >= 8;

    // 3. 비밀번호와 재확인 값이 일치하는지 확인
    const isPwMatched = (passwordInput.value === passwordCheckInput.value) && passwordCheckInput.value !== "";

    // 세 가지 조건이 모두 true일 때만 활성화
    if (allFilled && isPwValid && isPwMatched) {
        signupBtn.disabled = false;
        signupBtn.classList.add('active');
    } else {
        signupBtn.disabled = true;
        signupBtn.classList.remove('active');
    }
});