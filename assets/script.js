const multiStepQuiz = document.querySelector("[data-multi-step]")
const quizSteps = [...multiStepQuiz.querySelectorAll("[data-step]")]
let currentStep = quizSteps.findIndex(step => {return step.classList.contains("active")})
const startEl = document.getElementById("start")
const finalQEl = document.getElementById("finalQ")
const timerEl = document.getElementById("timer")
const scoreEl = document.getElementById("score")
const intialSubEl = document.getElementById("initials")
const initialEl = document.getElementById("int")
const hiscoreEl = document.getElementById("hiscore")

function startGame(){
multiStepQuiz.addEventListener("click", e => {
    if (e.target.matches("[data-correct]")){
        currentStep +=1
    } else if (e.target.matches("[data-incorrect]")){
        gameTime -= 10
    }
    showCurrentStep()
})

function showCurrentStep(){
    quizSteps.forEach((step, index) => {step.classList.toggle("active", index === currentStep) })
}

function showEndGame(){
    quizSteps.forEach((step, index) => {step.classList.toggle("active", index === 6) })
}

    let gameTime = 60
    let timerInterval = setInterval(function() {
        gameTime--;
        timerEl.textContent = `Time remaining ${gameTime} seconds`;
    if (gameTime < 0){
        gameTime = 0
    }
        if(gameTime === 0) {
          endGame()
        }
      }, 1000);
      function endGame(){
        clearInterval(timerInterval)
        showEndGame()
        scoreEl.textContent = `You scored a ${gameTime}`
    }

    function saveScore(){
        console.log(initialEl.value)
        let name = initialEl.value
        let score = gameTime
    
        localStorage.setItem("name", name)
        localStorage.setItem("score", score)
    }

    finalQEl.addEventListener("click", endGame)
    intialSubEl.addEventListener("click", saveScore)
}

if (localStorage.getItem("name") !== null && localStorage.getItem("score") !== null) {
    hiscoreEl.textContent = `Recent Player ${localStorage.getItem("name")} scored a ${localStorage.getItem("score")}`
}

startEl.addEventListener("click", startGame)