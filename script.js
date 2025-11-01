const decBtn = document.querySelector("#dec");
const incBtn = document.querySelector("#inc");
const clrBtn = document.querySelector("#clr");
const countDisplay = document.querySelector("#countDisplay");
const errorMsg = document.querySelector(".error-message");
let count = 1;
countDisplay.textContent = count;
incBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
  if (count > 0) {
    errorMsg.style.display = "none";
    decBtn.disabled = false;
  }
});
decBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = Number(countDisplay.textContent) - 1;
  if (count === 0) {
    errorMsg.style.display = "block";
    decBtn.disabled = true;
  }
});

clrBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
  errorMsg.style.display = "block";
  decBtn.disabled = true;
});
