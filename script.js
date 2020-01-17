// Global variables

var startButton = document.getElementById("start-btn");
var startSection = document.getElementById("start");
var quizSection = document.getElementById("quiz");
var resultSection = document.getElementById("results");
var timer = document.getElementById("counter");
var highScoreSection = document.getElementById("highscore");
var highScoreButton = document.getElementById("scores-link");
var goBackButton = document.getElementById("goBack");
var submitButton= document.getElementById("submit");
var initialsInput = document.querySelector("#initials")
var optionOne = document.getElementById("0");
var optionTwo = document.getElementById("1");
var optionThree = document.getElementById("2");
var optionFour = document.getElementById("3");
var score = 100;
var timeInterval;
var iterator = 0;

// Question and answer array

var questions = [

    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },


    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },

    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

// Timer interval. Need to stop timeEl when it reaches 0 or when final question is answered.

var timeEl = document.querySelector("#counter");

var secondsLeft = 75;

function setTime() {

        secondsLeft--;

        timeEl.innerText = secondsLeft;

        if (secondsLeft === 0) {

            clearInterval(timerInterval);

        }

}

// Local storage user

var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var msgDiv = document.querySelector("#msg");
var userInitialsSpan = document.querySelector("#user-initials");
var userScoreSpan = document.querySelector("#user-score");


renderScores();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function renderScores() {
    var initials = localStorage.getItem("initials");
    var score = localStorage.getItem("score");

    if (initials === null) {
        return;
    }

    userInitialsSpan.textContent = initials;
    userScoreSpan.textContent = score;
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    var initials = document.querySelector("#initials").value;
    var score = document.querySelector("#score").value;

    if (initials === "") {
        displayMessage("error", "Please enter your initials");
    } else {
        displayMessage("success", "Score saved");

        localStorage.setItem("initials", initials);
        localStorage.setItem("score", score);
        renderScores();
    }
});

// question Object

function loadQuestion(questionObj){
    document.getElementById("question").innerText=questionObj.title
    for(var i = 0;i<questionObj.choices.length; i++){
        document.getElementById(i).innerText=questionObj.choices[i];
    }
}

var iterator = 0;

// Page navigation and hiding

var highScoreButton = document.querySelector("#scores-link");
var startButton = document.querySelector("#start-btn");
var goBackButton = document.querySelector("#goBack");
var submitButton = document.querySelector("#submit");

highScoreButton.addEventListener("click", function(){
    startSection.classList.add("hide");
    highScoreSection.classList.remove("hide");
})
startButton.addEventListener("click", function(){
    startSection.classList.add("hide");
    quizSection.classList.remove("hide");
    timeInterval=setInterval(setTime, 1000)
    loadQuestion(questions[iterator]);
})
goBackButton.addEventListener("click", function(){
    startSection.classList.remove("hide");
    resultSection.classList.add("hide");
})
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    var user = {initials: initialsInput.value.trim()}
    if(user.initials===""){
        alert("Error: You have to enter your initials!");
    }else{alert("Success! You have been added to the highscores list!")}
})

// Moves between questions

document.querySelectorAll(".btn-block").forEach(function(element){
    element.addEventListener("click", function(event){
        iterator++;
        if (iterator<=4){
            loadQuestion(questions[iterator]);
        } else{
            quizSection.classList.add("hide");
            resultSection.classList.remove("hide");
        }
    })
})

// Need event listener to detect incorrect answers to trigger the 15 second penalty