"use strict";

let displayNumber = document.querySelector("#displayNumber");
let angka1 = document.getElementsByClassName("button");

console.log(angka1);

for (let angkaBaru of angka1) {
  angkaBaru.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("clear")) {
      clearCalculator();
      updateDisplay();
      return;
    }
    if (target.classList.contains("operator")) {
      inputData(target.innerText);
      // nilaiAwal.innerText = dataCal.layarHasil;
      // dataCal.layarHasil = 0;
      updateDisplay();
      return;
    }
    if (target.classList.contains("dobel")) {
      let values = dataCal.layarHasil;
      console.log(values);
      let values2 = values.split("+");
      console.log(values2);
    }

    inputData(target.innerText);
    updateDisplay();
  });
}

let nilaiAwal = document.querySelector(".nilaiAwal");

function operator(val) {
  if (val == "+") {
    let v1 = value1;
    let v2 = value2;
    return (dataCal.hasil = v1 + v2);
  }
}

let dataCal = {
  layarHasil: "0",
  value1: 0,
  value2: 0,
  operator: "",
  hasil: 0,
};

function inputData(val) {
  if (dataCal.layarHasil == 0) {
    dataCal.layarHasil = val;
  } else {
    dataCal.layarHasil += val;
  }
}

function updateDisplay() {
  displayNumber.innerHTML = dataCal.layarHasil;
}

let clearDisplay = document.querySelector(".clear");

clearDisplay.addEventListener("click", (e) => {
  dataCal.layarHasil = "0";
  updateDisplay();
});

function clearCalculator() {
  dataCal.layarHasil = 0;
}
