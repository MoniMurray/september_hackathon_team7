// function calculates the values for the entires

function calculateEmission() {
    for (let i = 1; i < 3; i++) {
        let userInput = parseInt(document.getElementById("number" + i).value);
        let rate = Number(document.getElementById("rate" + i).innerText);
        let result = userInput * rate;
        document.getElementById("result" + i).innerHTML = result;}
}

// fucntion will auto calucate scores
for (let i = 1; i < 3; i++) {
    document.getElementById("number" + i).addEventListener("input", calculateEmission);
}

// or the same code different way 
var elements = document.getElementsByClassName("numbers");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('input', calculateEmission, false);
}

// or shorter
var elements = document.getElementsByClassName("numbers");

Array.from(elements).forEach(function(element) {
    element.addEventListener('input', calculateEmission);
  });