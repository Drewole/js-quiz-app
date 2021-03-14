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
	1. Create global vars
	2. Make an object of questions
		- For starters, just a few questions for testing purposes
	3. Make a timer
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
	q2: {
		question: "Who would you choose to marry?",
		answer: "b",
		a: "Betty White",
		b: "Jennifer Lawrence",
		c: "Bill Burr",
		d: "Cat"
	}
}

//Global Vars
var score = "";
var time = "";
// Grabbing the elements I need
var highScoresBtn = document.getElementById("show-scores");
var countdownTimer = document.getElementById("timer");
var timeContainer = document.querySelector(".time-container")


// this is the welcome view items
var startBtn = document.getElementById("start");

//This is the quiz view items
var questionText = document.getElementById("question-text");
var possibleAnswersList = document.getElementById("possible-answers");
var feedbackText = document.getElementById("feedback");

// This is the high scores page
var highScoresList = document.querySelector(".high-scores");
var finalScoreLabel = document.getElementById("final-score");
var userInitials = document.getElementById("initials");
var initialsSubmit = document.getElementById("initials-submit");
var playAgain = document.getElementById("play-again");
var clearLeaderboard = document.getElementById("clear-leaderboard");


// views
var introView = document.querySelector(".intro");
var questionsView = document.querySelector(".questions");
var highScoresView = document.querySelector(".scoreboard");
var correctAnswer = document.querySelector(".correct");



