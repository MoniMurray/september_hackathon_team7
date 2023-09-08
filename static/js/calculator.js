// function calculates the values for the entires

// let elements = document.getElementsByClassName("numbers");
let inputs = document.getElementsByClassName("numbers");
let rates = document.getElementsByClassName("rates");
let times = document.getElementsByClassName("time");

// another way to write a function
function emissionCalc() {
    for (let i = 0; i < inputs.length; i++) {
        let result = (Number(inputs[i].value) * Number(rates[i].innerText) * Number(times[i].value)) / 1000;
        document.getElementsByClassName("results")[i].innerHTML = parseFloat(result).toFixed(2);
    }
}

// add event listener to input and frequency change

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', emissionCalc, false);
    times[i].addEventListener('input', emissionCalc, false);
}

// or shorter
// var elements = document.getElementsByClassName("numbers");

// Array.from(elements).forEach(function(element) {
//     element.addEventListener('input', calculateEmission);
//   });