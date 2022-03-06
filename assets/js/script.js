// This is the JS file for index.html page (the code quiz)

// create variables for elements of html
    // timerEl - timer
    // mainEl - main content where questions will appear
    // 

// create arrays (var ...= [array]) for each question in order to contain the multiple choice answers (strings)

// create var gameStart (function) calling the 1st array and starting the countdown function

// create function for each array (gameQuestion) that displays question and upon user clicking response, is removed and replaced by next question
    // answers should be contained within buttons that react (change bg color) upon hover (addEventListeners!!)
    // upon correct answer, award player 10 pts ("Correct!." message is displayed on bottom)
    // upon wrong answer, subtract time from countdownTimer (-10 sec) ("Wrong!." message is displayed on bottom)

// create function (gameEnd) that runs after final response is collected OR timer reaches 0
    // Includes input for user to store initials
    // Button to submit score
        // upon click the final score (the final timer) along with initials are then stored into localStorage (save into array)
        // create function to call the highscores html and js

// create var countdown (that is a function) with variable for timeleft (this variable decreases on wrong answers and ends game when it hits 0)

// create event listener for button element that upon click will call the gameStart function