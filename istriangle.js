const angleInputs = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#check-btn");
const outputDiv =document.querySelector("#output-div");


function isTriangle(){
 if(angleInputs[0].value && angleInputs[1].value && angleInputs[2].value){
   if(triangleSum(Number(angleInputs[0].value),Number(angleInputs[1].value),Number(angleInputs[2].value)) === 180){
    outputDiv.innerText ="Yei! This is a Valid Triangle"
    return;
   }else{
       outputDiv.innerText ="Oh! This is not a Triangle"
       return;
   }
}else{
    outputDiv.innerText ="Please Enter the Angle Values!"
}
}

function triangleSum(angle1, angle2, angle3){
    const sum = angle1 + angle2 + angle3 ; 
    return sum;
}


checkBtn.addEventListener("click", isTriangle);
