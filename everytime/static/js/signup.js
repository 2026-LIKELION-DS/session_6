const nameInput = document.getElementById("user-name");
const nickInput = document.getElementById("user-nickname");
const emailInput = document.getElementById("user-email");
const pwInput = document.getElementById("user-pw");
const pwConfirmInput = document.getElementById("user-pw-confirm");
const signupBtn = document.getElementById("last");

function checkSignup() {
  const nameVal = nameInput.value.trim();
  const nickVal = nickInput.value.trim();
  const emailVal = emailInput.value.trim();
  const pwVal = pwInput.value.trim();
  const pwConfirmVal = pwConfirmInput.value.trim();

  const isAllFilled =
    nameVal !== "" &&
    nickVal !== "" &&
    emailVal !== "" &&
    pwVal !== "" &&
    pwConfirmVal !== "";
  const isPwLongEnough = pwVal.length >= 8;
  const isPwMatched = pwVal === pwConfirmVal;

  if (isAllFilled && isPwLongEnough && isPwMatched) {
    signupBtn.classList.add("active");
    signupBtn.disabled = false;
  } else {
    signupBtn.classList.remove("active");
    signupBtn.disabled = true;
  }
}

const allInputs = [nameInput, nickInput, emailInput, pwInput, pwConfirmInput];
allInputs.forEach((input) => {
  input.addEventListener("input", checkSignup);
});
