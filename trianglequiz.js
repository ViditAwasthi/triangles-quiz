const submitBtn = document.querySelector("#submit-btn")
const outputDiv = document.querySelector("#output-div")
const quizForm = document.querySelector(".quiz-form");

const answers = ["45 degree", "obtuse angled triangle", "right angled triangle", "acute angled triangle"]

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === answers[index]) {
            console.log(value, answers[index]);
            score = score + 1;
        }
        index = index + 1;
    }
    outputDiv.innerText = "Your Score for the Quiz is: " + score;

}
submitBtn.addEventListener("click", calculateScore);