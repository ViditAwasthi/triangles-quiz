const sideInputs = document.querySelectorAll(".input-side")
const calculateBtn = document.querySelector("#check-btn")
const outputDiv = document.querySelector("#output-div")


function multiplyInputs(a, b) {
    let product = a * b
    return product;
}

function calculateArea() {
    if (sideInputs[0].value && sideInputs[1].value) {
        const product = multiplyInputs(Number(sideInputs[0].value), Number(sideInputs[1].value));
        const triangleArea = 0.5 * product;
        outputDiv.innerText = "The Area of Triangle is: " + triangleArea;
    } else {
        outputDiv.innerText = "Please enter the Values!"
    }
}

calculateBtn.addEventListener("click", calculateArea);