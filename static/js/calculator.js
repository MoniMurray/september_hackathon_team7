/*jshint esversion: 6 */

// variables definition
const inputs = document.getElementsByClassName("numbers");
const rates = document.getElementsByClassName("rates");
const times = document.getElementsByClassName("time");
const weight = document.getElementsByClassName("weight");
const totals = document.getElementById("total-view");
// let rates = [1.774, 4.777, 1.774, 4.777, 1.774, 4.777, 1.774, 4.777, ];

// Wait for the DOM to finish loading before running the game
// Get the input element and add event listeners to them
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
  // add event listener to input and frequency change

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", main, false);
    times[i].addEventListener("input", main, false);
    weight[i].addEventListener("input", main, false);
    totals.addEventListener("input", main, false);
  }

  // add event lister to buttons
  let buttons = this.getElementsByTagName("button");
  for (button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("class") === "reset-button") {
        document.location.reload();
      } else if (this.getAttribute("class") === "food-button") {
        toggleCalculator("food", "plastic");
      } else if (this.getAttribute("class") === "plastic-button") {
        toggleCalculator("plastic", "food");
      } else {
        // this line is conflicting with the hamburger button causing
        //  it to flicker. will remove it for now,

      }
    });
  }
});

// function that calculates emission in kg CO2
function emissionCalc() {
  for (let i = 0; i < inputs.length; i++) {
    let result =
      (Number(inputs[i].value) *
        // rates[i] *
        Number(rates[i].innerText) *
        Number(times[i].value) *
        Number(weight[i].value)) /
      totals.value;
    document.getElementsByClassName("results")[i].innerHTML =
      parseFloat(result).toFixed(2);
  }
}

// function to calculate to total emssion

function totalEmssion() {
  let results = document.getElementsByClassName("results");
  let resultsNum = [];
  for (let i = 0; i < results.length; i++) {
    let val = Number(results[i].innerText);
    if (typeof val === "number") {
      resultsNum.push(val);
    }
  }
  let totResults = document.getElementsByClassName("total-result");
  let sumResults = resultsNum.reduce((acc, curr) => acc + curr, 0).toFixed(2);
  for (ind in totResults) {
    document.getElementsByClassName("total-result")[ind].innerHTML = sumResults;
    return sumResults;
  }
}

// function to run all functions together

function main() {
  emissionCalc();
  totalEmssion();
  insertResult();
}

// funcion to toggle between calulators

function toggleCalculator(id1, id2) {
  let value1 = document.getElementById(id1);
  let value2 = document.getElementById(id2);

  value1.style.display = "block";
  value2.style.display = "none";
}


// function to display different results
function displayDiv() {
  let result = Number(totalEmssion());
  let units = Number(totals.value);
  let resultKg = result / 1000 * units;
  let infoMessage = document.getElementById("result-info");
  let ecoMessage = document.getElementById("result-low");
  let medMessage = document.getElementById("result-medium");
  let hiMessage = document.getElementById("result-high");
  if (resultKg > 0 && resultKg <= 10000) {
    infoMessage.style.display = "none";
    medMessage.style.display = "none";
    hiMessage.style.display = "none";
    ecoMessage.style.display = "block";
    return resultKg;
  } else if (resultKg > 10000 && resultKg <= 15000) {
    infoMessage.style.display = "none";
    ecoMessage.style.display = "none";
    hiMessage.style.display = "none";
    medMessage.style.display = "block";
    return resultKg;
  } else if ( resultKg > 15000) {
    infoMessage.style.display = "none";
    ecoMessage.style.display = "none";
    medMessage.style.display = "none";
    hiMessage.style.display = "block";
    return resultKg;
  } else {
    medMessage.style.display = "none";
    hiMessage.style.display = "none";
    ecoMessage.style.display = "none";
    infoMessage.style.display = "block";
  }
}

// function to insert result into user message

function insertResult() {
  let resultKg = displayDiv().toFixed(2);
  let span = document.getElementsByClassName("emission-result-post");
  for (ind in span) {
    span[ind].innerHTML = resultKg;
  }
  // span[0].innerHTML = resultKg;
  
}

