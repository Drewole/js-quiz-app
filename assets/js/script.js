// Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


//Planning

/*
	1. DONE: Create global vars
	2. DONE: Make an object of questions
		- For starters, just a few questions for testing purposes
	3. DONE: Make a timer
		- less time for the beginning for testing purposes
	4. Something to remove 10 seconds for a wrong answer
		- This could be a simple if else comparing the correct answer and giving points if correct, removing if not.
	5. Points system
		- 10 seconds removed from timer for incorrect answer
		- 5 points per correct answer
		- 25 points for completing before timer expires
		- Bonus points in the same amount as time remaining
	6. Local storage save with clear
	7. A function to update the score like that activity
	8.Need a See High Scores button that will show the high scores panel.
	9.Need a back to game button that will change it to the welcome game panel.

*/
//Object of questions

var questions = {
	q1: {
		question: "What cat says meow?",
		answer: "c",
		a: "Tiger",
		b: "Bear",
		c: "Garfield",
		d: "Cat"
	},
	q2: {
		question: "Whats Drews favorite food?",
		answer: "a",
		a: "Ramen",
		b: "Pizza",
		c: "Mashed Potatoes",
		d: "Cat"
	},
	q3: {
		question: "Who would you choose to marry?",
		answer: "b",
		a: "Betty White",
		b: "Jennifer Lawrence",
		c: "Bill Burr",
		d: "Cat"
	}
};

//Global Vars
var score = 0;
var timeLeft = 60;
// Grabbing the elements I need
var showScoresBtn = document.querySelector("#showscores");
var countdownTimer = document.getElementById("timer");
var timeContainer = document.querySelector(".time-container")

// this is the welcome view items
var startBtn = document.getElementById("start");

//This is the quiz view items
var questionText = document.getElementById("question-text");
var possibleAnswersList = document.getElementById("possible-answers");
var feedbackText = document.getElementById("feedback");
var quitBtn = document.querySelector("button.quit");

// This is the high scores page
var highScoresList = document.querySelector(".high-scores");
var finalScoreLabel = document.getElementById("final-score");
var userInitials = document.getElementById("initials");
var initialsSubmit = document.getElementById("initials-submit");
var playAgain = document.getElementById("play-again");
var clearLeaderboard = document.getElementById("clear-leaderboard");


// views
var introWindow = document.querySelector(".intro");
var questionsWindow = document.querySelector(".questions");
var highScoresWindow = document.querySelector(".scoreboard");
var correctAnswerBox = document.querySelector(".correct");


//Globals

function viewToggle(introView,questionsView,highScoreView) {
	if (introView === "visible") {
		introWindow.classList.remove("hidden");
		introWindow.classList.add("visible");
	} else {
		introWindow.classList.remove("visible");
		introWindow.classList.add("hidden");
	}
	
	if (questionsView === "visible") {
		questionsWindow.classList.remove("hidden");
		questionsWindow.classList.add("visible");
	} else {
		questionsWindow.classList.remove("visible");
		questionsWindow.classList.add("hidden");
	};

	if (highScoreView === "visible") {
		highScoresWindow.classList.remove("hidden");
		highScoresWindow.classList.add("visible");
	} else {
		highScoresWindow.classList.remove("visible");
		highScoresWindow.classList.add("hidden");
	}
	
};


//Timer - this is going to be our countdown
// Timer that counts down from 60. Yes I copied some of this from one of the activities but I do understand what it does. I also liked the comments for my future reference.
function countdown() {
	var timeLeft = 15;
	// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
	var timeInterval = setInterval(function () {
		// As long as the `timeLeft` is greater than 1
		if (timeLeft >= 1) {
			// Set the `textContent` of `timerEl` to show the remaining seconds
			timerEl.textContent = timeLeft;
			// Decrement `timeLeft` by 1
			timeLeft--;
		} else {
			// Once `timeLeft` gets to 0, set `timerEl` to an empty string
			timerEl.textContent = '';

			//Need to have something to calculate the score
			
			// Use `clearInterval()` to stop the timer
			clearInterval(timeInterval);
			// Call the `displayScoreboard()` function
			introView();
		}
	}, 1000);
};
function changeHighScoreBtnText (label) {
	showScoresBtn.textContent = label;
}

function initialSetup() {
	score = 0;
	timeLeft = 60;
	
	if (highScoresWindow.classList.contains("visible") || questionsWindow.classList.contains("visible")) {
		//Hides the scores view, hides the questions view, shows intro
		introView();
	}
	changeHighScoreBtnText("High Scores");

}

function gameOver() {

};

//function to remove 10 when an incorrect answer occurs
function wrongAnswer() {	
	if (timeLeft < 11) {
		gameOver();
	} else {
		timeleft = timeLeft - 10;
	}
};
// ALLL THE VIEWS
function introView() {
	console.log("Intro View Showing.");
	viewToggle("visible", "hidden", "hidden");
	changeHighScoreBtnText("High Scores");
};
//Also call this when the game ends
function highScoresView() {
	console.log("High Scores View Showing.");
	//Shows the scores view, hides the questions view, hides intro
	viewToggle("hidden", "hidden", "visible");
	changeHighScoreBtnText("Back");
};

function questionsView() {
	console.log("Questions View Showing.");
	changeHighScoreBtnText("High Scores");
	
	//Hides the scores view, hides the questions view, shows intro
	viewToggle("hidden","visible","hidden");

};

showScoresBtn.addEventListener( "click", function(e) {
	console.log(e);
	if (showScoresBtn.textContent === "High Scores") {
		highScoresView();
	} else {
		introView();
	}
} );

startBtn.addEventListener("click", function(e) {
	console.log(e);
	questionsView();
});

quitBtn.addEventListener("click", function(e) {
	console.log(e);
	initialSetup();
});

playAgain.addEventListener("click", function (e) {
	console.log(e);
	initialSetup();
});


 