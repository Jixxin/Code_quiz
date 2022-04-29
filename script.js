var timeEL = document.getElementById("time")
var scoreEl = document.getElementById("score")
var resultsEl = document.getElementById("results")
var questionEL = document.getElementById("question")
var answerEl1 = document.getElementById("answer1")
var answerEl2 = document.getElementById("answer2")
var answerEl3 = document.getElementById("answer3")
var answerEl4 = document.getElementById("answer4")
var submitEl1 = document.getElementById("submit1")
var submitEl2 = document.getElementById("submit2")
var submitEl3 = document.getElementById("submit3")
var submitEl4 = document.getElementById("submit4")
var startEl = document.getElementById("start")
var quizboxEl = document.getElementById("quizbox")
var gameTime = 60
/*var card1 = function changeCard1() {

    element.dataset.state = "card1"
    questionEL.textContent = "Here is the Q2"
    answerEl1.textContent = "Here is the answer2"
    answerEl2.textContent = "Here is the answer2"
    answerEl3.textContent = "Here is the answer2"
    answerEl4.textContent = "Here is the answer2"

}
var card2 = function changeCard2() {

    element.dataset.state = "card2"
    questionEL.textContent = "Here is the Q3"
    answerEl1.textContent = "Here is the answer3"
    answerEl2.textContent = "Here is the answer3"
    answerEl3.textContent = "Here is the answer3"
    answerEl4.textContent = "Here is the answer3"
}
var card3 = function changeCard3() {

    element.dataset.state = "card3"
    questionEL.textContent = "Here is the Q4"
    answerEl1.textContent = "Here is the answer4"
    answerEl2.textContent = "Here is the answer4"
    answerEl3.textContent = "Here is the answer4"
    answerEl4.textContent = "Here is the answer4"
}
var card4 = function changeCard4() {

    element.dataset.state = "card4"
    questionEL.textContent = "Here is the Q4"
    answerEl1.textContent = "Here is the answer5"
    answerEl2.textContent = "Here is the answer5"
    answerEl3.textContent = "Here is the answer5"
    answerEl4.textContent = "Here is the answer5"
}
var card5 = function changeCard5() {

    element.dataset.state = "card5"
    questionEL.textContent = "Here is the Q4"
    answerEl1.textContent = "Here is the answer6"
    answerEl2.textContent = "Here is the answer6"
    answerEl3.textContent = "Here is the answer6"
    answerEl4.textContent = "Here is the answer6"
}


function startGame() {
    var state = element.getElementById(data - state)
    if (state === "card0") {
        console.log(working)
    }
}









startEl.addEventListener("click", startGame);*/














var questions = [
    {
        question1: "question1",
        answers: ["answer1a", "answer2a", "answer3a", "answer4a"],
        correct: "answer3"
    },
    {
        question1: "question2",
        answers: ["answer1b", "answer2b", "answer3b", "answer4b"],
        correct: "answer3"
    },
    {
        question1: "question3",
        answers: ["answer1c", "answer2c", "answer3c", "answer4c"],
        correct: "answer3"
    },
    {
        question1: "question4",
        answers: ["answer1d", "answer2d", "answer3d", "answer4d"],
        correct: "answer3"
    },
    {
        question1: "question5",
        answers: ["answer1e", "answer2e", "answer3e", "answer4e"],
        correct: "answer3"
    }
]





for (let i = 0; i < questions.length; i++) {
    var questTxt = questions[i].question1;
    var answerTxt = questions[i].answers;
    var br = document.createElement("br")
    var p = document.createElement("p")
    var btnEl = document.createElement("button")
    questionEL.append(questTxt)

    console.log(questTxt)
    console.log(answerTxt)
    for (let j = 0; j < 4; j++) {

        questionEL.appendChild(btnEl)

        console.log(i, j)


    }
    questionEL.append(br)


}













