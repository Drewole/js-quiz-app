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

// Additional features as a maybe
// Answer all questions within the time alotted and you will < span class="bold" > earn a bonus 25 points < span class="strikethrough" > as well as points in the amount of time remaining on the clock.</ ></span >

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
		- 10 points per correct answer
		- 25 points for completing before timer expires - Maybe
		- Bonus points in the same amount as time remaining - Maybe
	6. Local storage save with clear
	7. A function to update the score like that activity
	8.DONE: Need a See High Scores button that will show the high scores panel.
	9.DONE: Need a back to game button that will change it to the welcome game panel.
	10. Shuffle the questions before displaying. https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

*/

//Objects of questions
console.log(Views)
var questions = [
	{
		question: "What cat says meow?",
		answer: "c",
		a: "Tiger",
		b: "Bear",
		c: "Garfield",
		d: "Cat"
	},
	{
		question: "Who would you choose to marry?",
		answer: "b",
		a: "Betty White",
		b: "Jennifer Lawrence",
		c: "Bill Burr",
		d: "Cat"
	},
	{
		question: "Whats Drews favorite food?",
		answer: "a",
		a: "ramen",
		b: "pizza",
		c: "Mashed Potatoes",
		d: "cat"
	}
];

// var scores = {
// 		DO: 50,
// 		BO: 56,
// 		AO: 76,
// 		MO: 56
// 	}; 

// localStorage.setItem("scoreboard", JSON.stringify(scores));
//Global Vars
var scoreboardParsed = JSON.parse(localStorage.getItem("scoreboard"));
var timeLeft;
var timeInterval;

// Grabbing the elements I need
const showScoresBtn = document.querySelector("#showscores");
const countDownTimer = document.getElementById("timer");
const timeContainer = document.querySelector(".time-container")

// this is the welcome view items
var startBtn = document.getElementById("start");

//This is the quiz view items
const questionText = document.getElementById("question-text");
const possibleAnswersList = document.getElementById("possible-answers");
let questionAnswers = document.querySelectorAll("#possible-answers li");
const feedbackText = document.getElementById("feedback");
let quitBtn = document.querySelector("button.quit");

// This is the high scores page
const highScoresList = document.querySelector(".high-scores");
const finalScoreLabel = document.getElementById("final-score");
const userInitials = document.getElementById("initials");
const initialsSubmit = document.getElementById("initials-submit");
const initialsForm = document.querySelector(".initials-form");
const playAgain = document.getElementById("play-again");
const clearLeaderboard = document.getElementById("clear-leaderboard");

//Globals

//Views
const frontPageViewEl = document.querySelector(".intro");
const highScoresViewEl = document.querySelector(".scoreboard");
const gameViewEl = document.querySelector(".questions");

function initialSetup() {
	if (frontPageViewEl.classList.contains("visible") || gameViewEl.classList.contains("visible")) {
	
		 frontPageView();
	}

}

function viewToggle(frontPageViewEl, highScoresViewEl, gameViewEl) {

	if (frontPageView === "visible") {
		frontPageViewEl.classList.add("visible");
		frontPageViewEl.classList.remove("hidden");
	} else {
		frontPageViewEl.classList.remove("visible");
		frontPageViewEl.classList.add("hidden");
	};

	if (highScoresView === "visible") {
		highScoresViewEl.classList.add("visible");
		highScoresViewEl.classList.remove("hidden");
	} else {
		highScoresViewEl.classList.remove("visible");
		highScoresViewEl.classList.add("hidden");
	};

	if (gameView === "visible") {
		gameViewEl.classList.remove("hidden");
		gameViewEl.classList.add("visible");
	} else {
		gameViewEl.classList.remove("visible");
		gameViewEl.classList.add("hidden");
	};

};

function frontPageView() { 
	//Shows the welcome view, hides the favorites view, hides find friends                   
	viewToggle("visible", "hidden", "hidden");
};

function highScoresView() {
	//Shows the find friend view, hides the favorites view, hides welcome
	viewToggle("hidden", "visible", "hidden");
};
function gameView() {
	//Hides the welcome view, hides the find friend view, shows favorites
	viewToggle("hidden", "hidden", "visible");

};

const clickContainer = document.querySelector("body");
clickContainer.addEventListener("click", function (event) {
	var elementClicked = event.target;
	if (elementClicked.classList.contains("front-page-view")) {
		frontPageView()
	} else if (elementClicked.classList.contains("high-scores-view")) {
		highScoresView()
	} else if(elementClicked.classList.contains("game-view")) {
		gameView()
	}
})

//Timer - this is going to be our countdown
function countdown() {
	let timeLeft = 15;
	// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
	timeInterval = setInterval(function () {
		// As long as the `timeLeft` is greater than 1
		if (timeLeft >= 1) {
			// Set the `textContent` of `timerEl` to show the remaining seconds
			countDownTimer.textContent = timeLeft;
			// Decrement `timeLeft` by 1
			timeLeft--;
			// console.log(timeLeft);
		} else {
			// Once `timeLeft` gets to 0, set `timerEl` to an empty string
			countDownTimer.textContent = '-';

			//Need to have something to calculate the score
			
			// Use `clearInterval()` to stop the timer
			clearInterval(timeInterval);
			// Call the `displayScoreboard()` function
			highScoresView();
			toggleScoreInput();
		}
	}, 1000);
};
// Resets some score variable and removes the time from the timer el
function initialSetup() {
	score = 0;
	countDownTimer.textContent = "-";
	
	if (highScoresWindow.classList.contains("visible") || questionsWindow.classList.contains("visible")) {
		//Hides the scores view, hides the questions view, shows intro
		introView();
	}
	changeHighScoreBtnText("High Scores");

}
// TODO: will be attached to a click function of the answers buttons, when I can figure them out.
function displayQuestion(questionsList) {
	
	//Get a random item from the array
	var rand = questionsList[Math.floor(Math.random() * questionsList.length)];

	//Generate the HTML I want to put in the list section
	var answersHTML = `<li class="choice" data-answer="a">${rand.a}</li>
			<li class="choice" data-answer="b">${rand.b}</li>
			<li class="choice" data-answer="c">${rand.c}</li>
			<li class="choice" data-answer="d">${rand.d}</li>
			`;

	questionText.textContent = rand.question;

	// Insert the HTML I want where I want it for a possible answer.
	possibleAnswersList.innerHTML = answersHTML;

	// This will remove the item from the array
	questionsList.splice(questionsList.indexOf(rand), 1);
	console.log(questionsList);
	if (questionsList.length < 1) {
		console.log("we are out of questions!")
		return;
	}
}
// TODO: Finish This
function winGame() {
	if (questions.length<= 0 || (timeLeft = 0)) {
		highScoresView();
	}
}

// TODO: make function to capture text input.

// This displays the scoreboard entries in the scoreboard view.
// TODO: This is terrible. Plz fix it.

function displayScoreboard() {
	
	//Sorts the scoreboard to have the highest at the top
	function sortBoard() {
		var scoreboardSortable = Object.entries(scoreboardParsed);
		var scoreBoardSorted = [];

		// Lets sort the board to put the highest score last
		scoreBoardSorted = scoreboardSortable.sort(function (a, b) {
			return a[1] - b[1];
		});
		return scoreBoardSorted;
	};
	//Reverses the array sort order so highest score is first.
	var scoreBoardSorted = sortBoard().reverse();
	
	//Create the HTML Element
	function createListItem(name) {
		let liEl = document.createElement('li');
		liEl.innerHTML = `${name[0]}<span> ${name[1]}</span>`;
		return liEl;
	}
	// For each item in the scoreboard array, create a list item and append it to the OL
	scoreBoardSorted.forEach(function(item){
		
		let itemInHTML = createListItem(item);
		console.log(itemInHTML)
		highScoresList.appendChild(itemInHTML);
		
	});

}
displayScoreboard();
//Just shows the score form after a round is played.
function toggleScoreInput() {

	if (initialsForm.classList.contains("hidden")) {
		initialsForm.classList.remove("hidden");
	} else {
		initialsForm.classList.add("hidden");
	}
	 
}

/////Game related functions
//TODO: this isn't working correctly yet
function clearScoreboard() {
	var clearScoreboard = {};
	localStorage.setItem("scoreboard", JSON.stringify(clearScoreboard))
	displayScoreboard()
}

//Kills the time interval - returns remaining time
function gameOver() {
	var remainingTime = timeLeft;
	console.log(remainingTime);
	clearInterval(timeInterval);
	return remainingTime;
};
// Add Points for correct answer
function addCorrect() {
	score = score + 10;
}

//function to remove 10 when an incorrect answer occurs
function wrongAnswer() {	
	if (timeLeft < 11) {
		gameOver();
	} else {
		timeleft = timeLeft - 10;
	}
};

// ALLL THE VIEWS
function changeHighScoreBtnText(label) {
	showScoresBtn.textContent = label;
}

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

//Lets change the below to event delegation
var clickContainer = document.querySelector("body");

clickContainer.addEventListener("click", function (event) {
	var element = event.target;

	//If High Scores is clicked. Same button is used for back
	if (element === showScoresBtn) {
		if (showScoresBtn.textContent === "High Scores") {
			highScoresView();
		} else {
			introView();
		}
	} else if(element === startBtn) {
		questionsView();
		countdown();
		displayQuestion(questions);
	} else if (element === quitBtn || element === playAgain) {
		initialSetup();
		clearInterval(timeInterval);
	}

	//clear scoreboard
	if (element === clearLeaderboard) {
		clearScoreboard();
	}

	//Check if the answer selected is correct - Need to make this an event bubble and catch it on the parent
	
});

const element1 = document.querySelector('.choice')

highScoresList.addEventListener('click', function(event) {
	if (event.target !== element1) {
		return
	}
	//handle click
	console.log(event.target)
});
