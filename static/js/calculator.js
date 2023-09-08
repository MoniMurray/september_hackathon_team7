/*jshint esversion: 6 */

// variables definition
const inputs = document.getElementsByClassName("numbers");
const rates = document.getElementsByClassName("rates");
const times = document.getElementsByClassName("time");


// Wait for the DOM to finish loading before running the game
// Get the input element and add event listeners to them
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    // add event listener to input and frequency change

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', main, false);
        times[i].addEventListener('input', main, false);
    }

    // add event lister to buttons

    let buttons = this.getElementsByTagName("button");
    for (button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("class") === "food-button") {
                toggleCalculator("food", "plastic");
            } else {
                toggleCalculator("plastic", "food");
            }
        })
    }
});


// function that calculates emission in kg CO2
function emissionCalc() {
    for (let i = 0; i < inputs.length; i++) {
        let result = (Number(inputs[i].value) * Number(rates[i].innerText) * Number(times[i].value)) / 1000;
        document.getElementsByClassName("results")[i].innerHTML = parseFloat(result).toFixed(2);
    }
}

// function to calculate to total emssion

function totalEmssion() {
    let results = document.getElementsByClassName("results");
    let resultsNum = [];
    for (let i = 0; i < results.length; i++) {
        let val = Number(results[i].innerText);
        if (typeof (val) === "number") {
            resultsNum.push(val);
        }
    }

    let sumResults = resultsNum.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    document.getElementsByClassName("total-result")[0].innerHTML = sumResults;
}

// function to run all functions together

function main() {
    emissionCalc();
    totalEmssion();
}

// funcion to toggle between calulators

function toggleCalculator(id1, id2) {
    let value1 = document.getElementById(id1);
    let value2 = document.getElementById(id2);

    value1.style.display = "block";
    value2.style.display = "none";

}