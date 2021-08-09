const sideInputs = document.querySelectorAll(".input-side")
const calculateBtn = document.querySelector("#check-btn")
const outputDiv = document.querySelector("#output-div")


function calculateSumOfSquares(a,b){
let sumOfSquares = a*a + b*b;
return sumOfSquares;
}

function calculateHypotenuse(){
 const sumOfSquares = calculateSumOfSquares(Number(sideInputs[0].value),Number(sideInputs[1].value));
 const hypotenuseLength = Math.sqrt(sumOfSquares);
 outputDiv.innerText = "The Hypotenuse of the Triangle is: "+hypotenuseLength;

}

calculateBtn.addEventListener("click", calculateHypotenuse);