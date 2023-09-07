// function calculates the values for the entires

// function calculateEmission() {
//     for (let i = 1; i < 3; i++) {
//         let userInput = parseInt(document.getElementById("number" + i).value);
//         let rate = Number(document.getElementById("rate" + i).innerText);
//         let result = userInput * rate;
//         document.getElementById("result" + i).innerHTML = result;}
// }

// let elements = document.getElementsByClassName("numbers");
let inputs = document.getElementsByClassName("numbers");
let rates = document.getElementsByClassName("rates");
let times = document.getElementsByClassName("time");

// another way to write a function
function emissionCalc() {
    for (let i = 0; i < inputs.length; i++) {
        let result = Number(inputs[i].value) * Number(rates[i].innerText) * Number(times[i].value);
        document.getElementsByClassName("results")[i].innerHTML = parseFloat(result).toFixed(2);
    }
}

// fucntion will auto calucate scores
// for (let i = 1; i < 3; i++) {
//     document.getElementById("number" + i).addEventListener("input", calculateEmission);
// }

// or the same code different way 


// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('input', calculateEmission, false);
// }

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', emissionCalc, false);
    times[i].addEventListener('input', emissionCalc, false);
}

// or shorter
// var elements = document.getElementsByClassName("numbers");

// Array.from(elements).forEach(function(element) {
//     element.addEventListener('input', calculateEmission);
//   });