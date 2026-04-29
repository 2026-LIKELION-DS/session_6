const nameInput = document.getElementById("name");
const nickInput = document.getElementById("nick-name");
const emailInput = document.getElementById("e-mail");
const pwInput = document.getElementById("signup-pw");
const retryInput = document.getElementById("signup-pw-retry");
const signupBtn = document.getElementById("signup-button");

// let inputArray = [nameValue, nickValue, emailValue, pwValue, retryValue];

function checkoutSinupInput() {
  const nameValue = nameInput.value;
  const nickValue = nickInput.value;
  const emailValue = emailInput.value;
  const pwValue = pwInput.value;
  const retryValue = retryInput.value;

  if (
    nameValue.length > 0 &&
    nickValue.length > 0 &&
    emailValue.length > 0 &&
    pwValue.length >= 8 &&
    retryValue === pwValue
  ) {
    signupBtn.style.backgroundColor = "#f91f15";
    signupBtn.style.color = "white";
  } else {
    signupBtn.style.backgroundColor = "#b5b5b5";
    signupBtn.style.color = "#636363";
  }
}

nameInput.addEventListener("input", checkoutSinupInput);
nickInput.addEventListener("input", checkoutSinupInput);
emailInput.addEventListener("input", checkoutSinupInput);
pwInput.addEventListener("input", checkoutSinupInput);
retryInput.addEventListener("input", checkoutSinupInput);
