let generateBtn = document.getElementById("generate");

function randomNum() {
  let min = document.getElementById("min");
  let max = document.getElementById("max");
  let minValue = Number(min.value);
  let maxValue = Number(max.value);
  if (minValue > maxValue) {
    minValue = maxValue + minValue;
    maxValue = minValue - maxValue;
    minValue = minValue - maxValue;
    min.value = minValue;
    max.value = maxValue;
  }

  let userInput = document.getElementById("userInput");
  let nextNumber = userInput.value ? Number(userInput.value) : null;

  if (nextNumber !== null && nextNumber >= minValue && nextNumber <= maxValue) {
    document.getElementById("result").innerText = nextNumber;
    userInput.value = "";
  } else {
    let num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById("result").innerText = num;
  }
}

window.addEventListener("load", randomNum());
generateBtn.addEventListener("click", randomNum);
