const idBtn = document.querySelector(".login-id");
const pwBtn = document.querySelector(".login-pw");
const loginBtn = document.querySelector(".everytime-login");

function checkout() {
  const idInput = idBtn.value;
  const pwInput = pwBtn.value;

  if (pwInput.length >= 8 && idInput.length > 0) {
    loginBtn.style.backgroundColor = "#f91f15";
    loginBtn.style.color = "white";
  } else {
    loginBtn.style.color = "#636363";
  }
}

idBtn.addEventListener("input", checkout);
pwBtn.addEventListener("input", checkout);
