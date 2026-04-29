const idInput = document.getElementById("user-id");
const pwInput = document.getElementById("user-password");
const loginBtn = document.getElementById("user-login");

function checkInputs() {
  const idValue = idInput.value;
  const pwValue = pwInput.value;

  if (idValue.length > 0 && pwValue.length >= 8) {
    loginBtn.classList.add("active");
    loginBtn.disabled = false;
  } else {
    loginBtn.classList.remove("active");
    loginBtn.disabled = true;
  }
}

idInput.addEventListener("input", checkInputs);
pwInput.addEventListener("input", checkInputs);
