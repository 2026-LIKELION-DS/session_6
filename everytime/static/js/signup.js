// const signupForm = document.querySelector('#signupForm');
// const signupBtn = document.querySelector('#signupBtn');

// const inputs = signupForm.querySelectorAll('.inputBox');

// function handleInput() {
//     let isAllFilled = true;

//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].value.trim() === "") {
//             isAllFilled = false;
//             break; 
//         }
//     }

//     const pwValue = document.querySelector('#userPw').value;
//     const pwCheckValue = document.querySelector('#userPwCheck').value;
//     const isPwValid = pwValue.length >= 8 && pwValue === pwCheckValue;


//     if (isAllFilled && isPwValid) {
//         signupBtn.style.backgroundColor = '#f91f15';
//         signupBtn.disabled = false;
//     } else {
//         signupBtn.style.backgroundColor = '#737373';
//         signupBtn.disabled = true;
//     }
// }

// signupForm.addEventListener('input', handleInput);

const signupForm = document.querySelector('#signupForm');
const signupBtn = document.querySelector('#signupBtn');
const inputs = signupForm.querySelectorAll('.inputBox');

function handleInput() {
    const isAllFilled = Array.from(inputs).every(input => input.value.trim() !== "");

    const pwValue = document.querySelector('#userPw').value;
    const pwCheckValue = document.querySelector('#userPwCheck').value;
    const isPwValid = pwValue.length >= 8 && pwValue === pwCheckValue;

    if (isAllFilled && isPwValid) {
        signupBtn.style.backgroundColor = '#f91f15';
        signupBtn.disabled = false;
        console.log("버튼 활성화됨!");
        signupBtn.style.cursor = 'pointer';
        
        signupBtn.type = "submit"; 
    } else {
        signupBtn.style.backgroundColor = '#737373';
        signupBtn.disabled = true;
        signupBtn.style.cursor = 'not-allowed';
    }
}

signupForm.addEventListener('input', handleInput);

handleInput();