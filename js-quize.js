let currentQuestion = 0
let score = 0
let totalQuestion = questions.length

let container = document.querySelector("#quizcontainer")
let questionEl = document.querySelector("#question")


let opt1 = document.querySelector("#opt1")
let opt2 = document.querySelector("#opt2")
let opt3 = document.querySelector("#opt3")
let opt4 = document.querySelector("#opt4")

let nextBtn = document.querySelector("#nextButton")
let resultCont = document.querySelector("#result")


function loadQuestion(questionIndex) {
    let q = questions[questionIndex]
    questionEl.textContent = (questionIndex + 1) + '.' + q.question

    opt1.textContent = q.option1
    opt2.textContent = q.option2
    opt3.textContent = q.option3
    opt4.textContent = q.option4
}

nextBtn.addEventListener("click", (event) => {
    let selectOption = document.querySelector("input[type=radio]:checked")

    if (!selectOption) {
        alert("Please select your answer")
        return
    }

    let answer = selectOption.value;
    if (questions[currentQuestion].answer === answer) {
        score += 10;

    }

    selectOption.checked = false;

    currentQuestion++;
    if (currentQuestion == totalQuestion - 1) {
        nextBtn.innerHTML = "Finish Quiz";
    }

    if (currentQuestion == totalQuestion) {
        container.style.display = "none"
        resultCont.style.visibility = "visible"
        resultCont.style.opacity = "1"
        resultCont.innerHTML = "Your Score is " + score
        return;
    }

    loadQuestion(currentQuestion);
})

loadQuestion(currentQuestion);