const sideInputs = document.querySelectorAll(".input-side")
const calculateBtn = document.querySelector("#check-btn")
const outputDiv = document.querySelector("#output-div")


function calculateSumOfSquares(a, b) {
    let sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    if (sideInputs[0].value && sideInputs[1].value) {
        const sumOfSquares = calculateSumOfSquares(Number(sideInputs[0].value), Number(sideInputs[1].value));
        const hypotenuseLength = Math.sqrt(sumOfSquares);
        outputDiv.innerText = "The Hypotenuse of the Triangle is: " + hypotenuseLength;
    } else {
        outputDiv.innerText = "Please enter the Values!"
    }
}

calculateBtn.addEventListener("click", calculateHypotenuse);