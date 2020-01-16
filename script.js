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

// Timer interval

var timeEl = document.querySelector("#counter");

var secondsLeft = 75;

function setTime() {

    var timerInterval = setInterval(function () {

        secondsLeft--;

        timeEl.textContent = “Time Remaining: “ + secondsLeft;

        if (secondsLeft === 0) {

            clearInterval(timerInterval);

        }

    }, 1000);

}

setTime();

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