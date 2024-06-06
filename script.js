let generateBtn = document.getElementById("generate");

function randomNum() {
  let min = document.getElementById("min");
  let max = document.getElementById("max");
  let minValue = Number(min.value);
  let maxValue = Number(max.value);
  if (minValue > maxValue) {
    [minValue, maxValue] = [maxValue, minValue];
    min.value = minValue;
    max.value = maxValue;
  }

  let nextNumbers = JSON.parse(localStorage.getItem("nextNumbers")) || [];
  let nextNumber = nextNumbers.length ? nextNumbers.shift() : null;

  if (nextNumber !== null && nextNumber >= minValue && nextNumber <= maxValue) {
    document.getElementById("result").innerText = nextNumber;
    localStorage.setItem("nextNumbers", JSON.stringify(nextNumbers));
  } else {
    let num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById("result").innerText = num;
  }
}

window.addEventListener("load", randomNum);
generateBtn.addEventListener("click", randomNum);
