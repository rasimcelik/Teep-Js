const percent5button = document.getElementById("percent5");
const percent10button = document.getElementById("percent10");
const percent15button = document.getElementById("percent15");
const percent25button = document.getElementById("percent25");
const percent50button = document.getElementById("percent50");
const percentCustombutton = document.getElementById("percentCustom");
const resetButton = document.getElementById("reset-button");

const billInputValue = document.getElementById("bill-input-value");
const nopInputValue = document.getElementById("numberOfPeopleInputValue");
const tipAmount = document.getElementById("tipAmountResultValue");
const totalAmount = document.getElementById("totalResultValue");
const cantBeZero = document.getElementById("cantBeZero");
const cantbezeroText = document.getElementById("cantbezeroText");

// Function to calculate and update the tip amount based on the percentage
function calculateTip(percentage) {
  if (nopInputValue.value === "0" || nopInputValue.value === "00") {
    cantbezeroText.textContent = "Can't Be Zero";
    cantbezeroText.style.color = "red";
    cantBeZero.style.border = "2px solid red";
  } else {
    cantbezeroText.style.color = "var(--DarkGrayishCyan-color)";
    cantbezeroText.textContent = "Number Of People";
    cantBeZero.style.border = "none";
  }
  const result = (billInputValue.value * percentage) / nopInputValue.value;
  tipAmount.textContent = "$" + result.toFixed(2);

  const total = billInputValue.value / nopInputValue.value + result;
  totalAmount.textContent = "$" + total.toFixed(2);
}

let customTipValue = "";
percentCustombutton.addEventListener("input", () => {
  const customTipValue = percentCustombutton.value / 100;
  calculateTip(customTipValue);
});

percent5button.addEventListener("click", () => {
  calculateTip(0.05);
});

percent10button.addEventListener("click", () => {
  calculateTip(0.1);
});

percent15button.addEventListener("click", () => {
  calculateTip(0.15);
});

percent25button.addEventListener("click", () => {
  calculateTip(0.25);
});

percent50button.addEventListener("click", () => {
  calculateTip(0.5);
});

resetButton.addEventListener("click", () => {
  billInputValue.value = "";
  nopInputValue.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  cantbezeroText.textContent = "Number Of People";
  cantbezeroText.style.color = "var(--DarkGrayishCyan-color)";
});
