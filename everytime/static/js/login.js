const pwLength = document.querySelector(".input-pw");
const inputTxt = document.querySelector(".input-login");
const submitBtn = document.querySelector(".inputSubmit");

function checkInput(){
    let check;
    if ((pwLength.value.length >= 8) && (inputTxt.value.length > 0)){
        submitBtn.style.backgroundColor = "#ff3939";
        check=true;
    }else{
        submitBtn.style.backgroundColor = "rgb(171, 171, 171)";
        check=false;
    }
    return check;
}
submitBtn.addEventListener("click", function(e){
    const checking = checkInput();
    if(!checking){
        e.preventDefault();
        alert("정보를 입력하세요.");
        return;
    }
});
inputTxt.addEventListener("input", checkInput);
pwLength.addEventListener("input", checkInput);