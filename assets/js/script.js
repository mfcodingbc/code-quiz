// This is the JS file for index.html page (the code quiz)

// create variables for elements of html
var count = 11;

var timerEl = document.querySelector("#countdown");
var mainTitleEl = document.querySelector("#mainTitle");
var mainTextEl = document.querySelector("#mainText");
var mainEndEl = document.querySelector("#mainEnd");
var mainBtnEl = document.querySelector("#mainBtn");


// create arrays (var ...= [array]) for each question in order to contain the multiple choice answers (strings)
var questionOne = [
    "Blah blah blah",
    "Ha ha ha",
    "La la la",
    "Ho ho ho"
];

// create var countdown (that is a function) with variable for timeleft (this variable decreases on wrong answers and ends game when it hits 0)

var timerCountdown = function () {
    timerEl.textContent = "Time: " + count;

    var timeInterval = setInterval(function () {
        if (count === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Time: " + count;
            timerEl.classList.remove("bg-danger", "rounded");
            gameEnd();
        } else if (count === 10) {
            timerEl.textContent = "Time: " + count;
            timerEl.classList.add("bg-danger", "rounded");
            count--;
        } else {
            timerEl.textContent = "Time: " + count;
            count--;
        }
    }, 1000);
}

// create var gameStart (function) calling the 1st array and starting the countdown function
// var gameStart = function () {
//     mainEl. 
// };


// create function for each array (gameQuestion) that displays question and upon user clicking response, is removed and replaced by next question
    // answers should be contained within buttons that react (change bg color) upon hover (addEventListeners!!)
    // upon correct answer, award player 10 pts ("Correct!." message is displayed on bottom)
    // upon wrong answer, subtract time from countdownTimer (-10 sec) ("Wrong!." message is displayed on bottom)

// create function (gameEnd) that runs after final response is collected OR timer reaches 0
    // Includes input for user to store initials
    // Button to submit score
        // upon click the final score (the final timer) along with initials are then stored into localStorage (save into array)
        // create function to call the highscores html and js
var gameEnd = function () {
        // Change page display
        mainTitleEl.textContent = "Quiz Over!";
            mainTitleEl.classList.add("display-1");
        mainTextEl.textContent = "Your final score is " + count;
        mainEndEl.textContent = "Enter initials: ";
            mainEndEl.classList.add("text-center")
        // add an input element for initial record
        var initialSubmit = function () {
            var initialInput = document.createElement('input');
            mainEndEl.appendChild(initialInput);
        };
        initialSubmit();
        // add Submit button
        mainEndEl.appendChild(mainBtnEl);
        mainBtnEl.textContent = "Submit";
            mainBtnEl.classList.add("m-3")

        // Add initials and score to localStorage
        var initialInputEl = document.querySelector('input')

        mainBtnEl.addEventListener("click", function(event) {
            event.preventDefault();
            
            var initialScore = {
                initials: initialInputEl.value.trim(),
                score: count
            };
        
            localStorage.setItem("highscore", JSON.stringify(initialScore));
        });
};

// create event listener for button element that upon click will call the gameStart function
mainBtnEl.addEventListener("click", function () {
    timerCountdown();
    // gameStart();
})