const pw = document.querySelector(".inputPw");
const pw2 = document.querySelector(".inputPw2");
const inputTxt = document.querySelectorAll(".inputBox");
const submitBtn = document.querySelector(".submitBtn");


function checkInput(){
    let check=true;
    inputTxt.forEach((input)=>{
        if(input.value.length===0){
            check=false;
        }
    });

    if (pw.value.length >= 8 && check && pw.value==pw2.value){
        submitBtn.style.backgroundColor = "#ff3939";
        return true;
    } else {
        submitBtn.style.backgroundColor = "rgb(166, 165, 165)";
        return false;
    }
}

submitBtn.addEventListener("click", function(e){
    const checking = checkInput();

    if (!checking) {
        e.preventDefault();
        alert("정보를 입력하세요.");
        return;
    }

    if(pw.value !== pw2.value){
        e.preventDefault();
        alert("비밀번호가 일치하지 않습니다.");
        pw.value = "";
        pw2.value = "";
    }
});

inputTxt.forEach((input) => {
    input.addEventListener("input", checkInput);
});
