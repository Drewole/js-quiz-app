

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
/* 
////// Array of questions
*/

const questions = [
	{
		question: " Why do JavaScript and Java have similar name?",
		a: " JavaScript is a stripped-down version of Java",
		b: " JavaScript's syntax is loosely based on Java's",
		c: " They both originated on the island of Java",
		d: " None of the above",
		answer: "b",
	}, {
		question: " When a user views a page containing a JavaScript program, which machine actually executes the script?",
		a: " The User's machine running a Web browser",
		b: " The Web server",
		c: " A central machine deep within Netscape's corporate offices",
		d: " None of the above",
		answer: "a",
	}, {
		question: " ______ JavaScript is also called client-side JavaScript.",
		a: " Microsoft",
		b: " Navigator",
		c: " LiveWire",
		d: " Native",
		answer: "b",
	}, {
		question: " __________ JavaScript is also called server-side JavaScript.",
		a: " Microsoft",
		b: " Navigator",
		c: " LiveWire",
		d: " Native",
		answer: "c",
	}, {
		question: " What are variables used for in JavaScript Programs?",
		a: " Storing numbers, dates, or other values",
		b: " Varying randomly",
		c: " Causing high-school algebra flashbacks",
		d: " None of the above",
		answer: "a",
	}, {
		question: " _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
		a: " Client-side",
		b: " Server-side",
		c: " Local",
		d: " Native",
		answer: "a",
	}, {
		question: " Which of the following can't be done with client-side JavaScript?",
		a: " Validating a form",
		b: " Sending a form's contents by email",
		c: " Storing the form's contents to a database file on the server",
		d: " None of the above",
		answer: "c",
	}, {
		question: " Which of the following are capabilities of functions in JavaScript?",
		a: " Return a value",
		b: " Accept parameters and Return a value",
		c: " Accept parameters",
		d: " None of the above",
		answer: "c",
	}, {
		question: " Which of the following is not a valid JavaScript variable name?",
		a: " 2names",
		b: " _first_and_last_names",
		c: " FirstAndLast",
		d: " None of the above",
		answer: "a",
	}, {
		question: " How does JavaScript store dates in a date object?",
		a: " The number of milliseconds since January 1st, 1970",
		b: " The number of days since January 1st, 1900",
		c: " The number of seconds since Netscape's public stock offering.",
		d: " None of the above",
		answer: "a",
	}, {
		question: " Which of the following attribute can hold the JavaScript version?",
		a: " LANGUAGE",
		b: " SCRIPT",
		c: " VERSION",
		d: " None of the above",
		answer: "a",
	}, {
		question: " What is the correct JavaScript syntax to write 'Hello World'?",
		a: " System.out.println('Hello World')",
		b: " println ('Hello World')",
		c: " document.write('Hello World')",
		d: " response.write('Hello World')",
		answer: "c",
	}, {
		question: " Which types of image maps can be used with JavaScript?",
		a: " Server-side image maps",
		b: " Client-side image maps",
		c: " Server-side image maps and Client-side image maps",
		d: " None of the above",
		answer: "b",
	}, {
		question: " Which is the correct way to write a JavaScript array?",
		a: " var txt = new Array(1: 'tim',2: 'kim',3: 'jim')",
		b: " var txt = new Array: '1=('tim')2=('kim')3=('jim')",
		c: " var txt = new Array('tim','kim','jim')",
		d: " var txt = new Array='tim','kim','jim'",
		answer: "c",
	}, {
		question: " What does the <noscript> tag do?",
		a: " Enclose text to be displayed by non-JavaScript browsers.",
		b: " Prevents scripts on the page from executing.",
		c: " Describes certain low-budget movies.",
		d: " None of the above",
		answer: "a",
	}, {
		question: " If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
		a: " 'New Text'?",
		b: " para1.value='New Text';",
		c: " para1.firstChild.nodeValue= 'New Text';",
		d: " para1.nodeValue='New Text';",
		answer: "b",
	}, {
		question: " JavaScript entities start with _______ and end with _________.",
		a: " Semicolon, colon",
		b: " Semicolon, Ampersand",
		c: " Ampersand, colon",
		d: " Ampersand, semicolon",
		answer: "d",
	}, {
		question: " Which of the following best describes JavaScript?",
		a: " a low-level programming language.",
		b: " a scripting language precompiled in the browser.",
		c: " a compiled scripting language.",
		d: " an object-oriented scripting language.",
		answer: "d",
	}, {
		question: " Choose the server-side JavaScript object?",
		a: " FileUpLoad",
		b: " Function",
		c: " File",
		d: " Date",
		answer: "c",
	}, {
		question: " Choose the client-side JavaScript object?",
		a: " Database",
		b: " Cursor",
		c: " Client",
		d: " FileUpLoad",
		answer: "d",
	}, {
		question: " Which of the following is not considered a JavaScript operator?",
		a: " new",
		b: " this",
		c: " delete",
		d: " typeof",
		answer: "b",
	}, {
		question: " ______method evaluates a string of JavaScript code in the context of the specified object.",
		a: " Eval",
		b: " ParseInt",
		c: " ParseFloat",
		d: " Efloat",
		answer: "a",
	}, {
		question: " Which of the following event fires when the form element loses the focus: ' <button>', '<input>', '<label>', '<select>', '<textarea>'?",
		a: " onfocus",
		b: " onblur",
		c: " onclick",
		d: " ondblclick",
		answer: "b",
	}, {
		question: " The syntax of Eval is ________________",
		a: " [objectName.]eval(numeriC.",
		b: " [objectName.]eval(string)",
		c: " [EvalName.]eval(string)",
		d: " [EvalName.]eval(numeriC.",
		answer: "b",
	}, {
		question: " JavaScript is interpreted by _________",
		a: " Client",
		b: " Server",
		c: " Object",
		d: " None of the above",
		answer: "a",
	}, {
		question: " Using _______ statement is how you test for a specific condition.",
		a: " Select",
		b: " If",
		c: " Switch",
		d: " For",
		answer: "b",
	}, {
		question: " Which of the following is the structure of an if statement?",
		a: " if (conditional expression is true) thenexecute this code end if",
		b: " if (conditional expression is true)execute this codeend if",
		c: " if (conditional expression is true)&nbsp;&nbsp; {then execute this code>->}",
		d: " if (conditional expression is true) then {execute this code}",
		answer: "c",
	}, {
		question: " How to create a Date object in JavaScript?",
		a: " dateObjectName = new Date([parameters])",
		b: " dateObjectName.new Date([parameters])",
		c: " dateObjectName : = new Date([parameters])",
		d: " dateObjectName Date([parameters])",
		answer: "a",
	}, {
		question: " The _______ method of an Array object adds and/or removes elements from an array.",
		a: " Reverse",
		b: " Shift",
		c: " Slice",
		d: " Splice",
		answer: "d",
	}, {
		question: " To set up the window to capture all Click events, we use which of the following statement?",
		a: " window.captureEvents(Event.CLICK);",
		b: " window.handleEvents (Event.CLICK);",
		c: " window.routeEvents(Event.CLICK );",
		d: " window.raiseEvents(Event.CLICK );",
		answer: "a",
	}, {
		question: " Which tag(s) can handle mouse events in Netscape?",
		a: " <IMG>",
		b: " <A>",
		c: " <BR>",
		d: " None of the above",
		answer: "b",
	}, {
		question: " ____________ is the tainted property of a window object.",
		a: " Pathname",
		b: " Protocol",
		c: " Defaultstatus",
		d: " Host",
		answer: "c",
	}, {
		question: " To enable data tainting, the end user sets the _________ environment variable.",
		a: " ENABLE_TAINT",
		b: " MS_ENABLE_TAINT",
		c: " NS_ENABLE_TAINT",
		d: " ENABLE_TAINT_NS",
		answer: "c",
	}, {
		question: " In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
		a: " a wrapper",
		b: " a link",
		c: " a cursor",
		d: " a form",
		answer: "a",
	}, {
		question: " When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ___________",
		a: " ScriptObject",
		b: " JSObject",
		c: " JavaObject",
		d: " Jobject",
		answer: "b",
	}, {
		question: " _________ is a wrapped Java array, accessed from within JavaScript code.",
		a: " JavaArray",
		b: " JavaClass",
		c: " JavaObject",
		d: " JavaPackage",
		answer: "a",
	}, {
		question: "A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript.",
		a: " JavaArray",
		b: " JavaClass",
		c: " JavaObject",
		d: " JavaPackage",
		answer: "b",
	}, {
		question: " The JavaScript exception is available to the Java code as an instance of __________",
		a: " netscape.javascript.JSObject",
		b: " netscape.javascript.JSException",
		c: " netscape.plugin.JSException",
		d: " None of the above",
		answer: "b",
	}, {
		question: "To automatically open the console when a JavaScript error occurs which of the following is added to prefs.js?",
		a: " user_pref('javascript.console.open_on_error', false);",
		b: " user_pref('javascript.console.open_error', true);",
		c: " user_pref('javascript.console.open_error', false);",
		d: "&nbsp; user_pref('javascript.console.open_on_error', true);",
		answer: "d",
	}, {
		question: " To open a dialog box each time an error occurs, which of the following is added to prefs.js?",
		a: " user_pref('javascript.classic.error_alerts', true);",
		b: " user_pref('javascript.classic.error_alerts', false);",
		c: " user_pref('javascript.console.open_on_error', true);",
		d: " user_pref('javascript.console.open_on_error', false);",
		answer: "a",
	}, {
		question: " The syntax of a blur method in a button object is ______________",
		a: " Blur()",
		b: " Blur(contrast)",
		c: " Blur(value)",
		d: " Blur(depth)",
		answer: "a",
	}, {
		question: " The syntax of capture events method for document object is ______________",
		a: " captureEvents()",
		b: " captureEvents(args eventType)",
		c: " captureEvents(eventType)",
		d: " captureEvents(eventVal)",
		answer: "c",
	}, {
		question: " The syntax of close method for document object is ______________",
		a: " Close(doC.",
		b: " Close(object)",
		c: " Close(val)",
		d: " Close()",
		answer: "d",
	}, {
		question: "Which best explains getSelection()?",
		a: "Returns the VALUE of a selected OPTION.",
		b: "Returns document.URL of the window in focus.",
		c: "Returns the value of cursor-selected text",
		d: "Returns the VALUE of a checked radio input.",
		answer: "c",
	}, {
		answer: "Choose the client-side JavaScript object:",
		a: "Database",
		b: "Cursor",
		c: "Client",
		d: "FileUpLoad",
		answer: "d",
	}, {
		question: "What is meant by the 'this' keyword in javascript?",
		a: "It refers to current object",
		b: "It refers to previous object",
		c: "It is a variable which contains value",
		d: "None of the above",
		answer: "a",
	}
]
let scores = [
	{ name: "AO", score: 110 },
	{ name: "BO", score: 40 },
	{ name: "JR", score: 50 },
	{ name: "MR", score: 40 },
	{ name: "ZO", score: 140 },
	{ name: "DO", score: 80 }

];
// Local storage stuff
let scoreboardParsed = getFromLocalStorage("scoreboard")
scoreboardParsed ? "" : sendToLocalStorage(scores, "scoreboard");
//Global Vars

function getFromLocalStorage(item) {
	return JSON.parse(localStorage.getItem(item))
}
function sendToLocalStorage(item, location) {
	localStorage.setItem(location, JSON.stringify(item));
}

let theQuestions = questions;

let timeLeft = 0;
let timeInterval;
let rand;
let totalScore = 0;

// Grabbing the elements I need
const showScoresBtn = document.querySelector("#showscores");
const countDownTimer = document.getElementById("timer");
const timeContainer = document.querySelector(".time-container")

// this is the welcome view items
startBtn = document.getElementById("start");

//This is the quiz view items
const questionText = document.getElementById("question-text");
const possibleAnswersList = document.getElementById("possible-answers");
let questionAnswers = document.querySelectorAll("#possible-answers li");
let quitBtn = document.querySelector("button.quit");
const currentScoreLabel = document.querySelector(".currentScore span")

// This is the high scores page
const highScoresList = document.querySelector(".high-scores");
const finalScoreLabel = document.getElementById("final-score");
const userInitials = document.getElementById("initials");
const initialsSubmit = document.getElementById("initials-submit");
const initialsForm = document.querySelector(".initials-form");
const playAgain = document.getElementById("play-again");
const clearLeaderboard = document.getElementById("clear-leaderboard");

//Feedback
const feedback = document.querySelector(".feedback");
const feedbackText = document.querySelector(".answer-feedback")

//Views
const frontPageViewEl = document.querySelector(".intro");
const highScoresViewEl = document.querySelector(".scoreboard");
const gameViewEl = document.querySelector(".questions");

//Timer - this is going to be our countdown
function countdown() {
	timeLeft = 60;
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
	totalScore = 0;
	countDownTimer.textContent = "-";

	if (highScoresViewEl.classList.contains("visible") || gameViewEl.classList.contains("visible")) {
		//Hides the scores view, hides the questions view, shows intro
		frontPageView();
	}
	changeHighScoreBtnText("High Scores");

}
// TODO: will be attached to a click function of the answers buttons, when I can figure them out.
function displayQuestion(questionsList) {

	//Get a random item from the array
	rand = questionsList[Math.floor(Math.random() * questionsList.length)];

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

	if (questionsList.length < 1) {
		console.log("we are out of questions!")
		return;
	}

}
// TODO: Finish This
function finishGame() {
	if (questions.length <= 0 || timeLeft === 0) {
		highScoresView();
	}
}

// TODO: make function to capture text input.

// This displays the scoreboard entries in the scoreboard view.
// TODO: This is terrible. Plz fix it.

function displayScoreboard() {

	scoreBoardSorted = scoreboardParsed.sort(function (a, b) {
		return b.score - a.score;
	});

	//Create the HTML Element
	function createListItem(name) {
		let liEl = document.createElement('li');
		liEl.innerHTML = `${name.name}<span> ${name.score}</span>`;
		return liEl;
	}
	// For each item in the scoreboard array, create a list item and append it to the OL
	scoreBoardSorted.forEach(function (item) {

		let itemInHTML = createListItem(item);

		highScoresList.appendChild(itemInHTML);

	});

}
displayScoreboard();
//Just shows the score form after a round is played.
function toggleScoreInput() {
	finalScoreLabel.textContent = totalScore;
	if (initialsForm.classList.contains("hidden")) {
		initialsForm.classList.remove("hidden");
	} else {
		initialsForm.classList.add("hidden");
	}

}

/////Game related functions

function clearScoreboard() {
	localStorage.removeItem("scoreboard")
	displayScoreboard()
}

//Kills the time interval - returns remaining time
function gameOver() {
	var remainingTime = timeLeft;
	console.log(remainingTime);
	clearInterval(timeInterval);

};

//function to remove 10 when an incorrect answer occurs
function wrongAnswer() {
	if (timeLeft < 11) {
		gameOver();
	} else {
		timeleft = timeLeft - 10;
	}
};
function displayFeedback(answer) {

	if (answer) {
		feedback.classList.add("correct");
		feedbackText.innerHTML = `<p>Answer is correct!</p>`;
		feedbackRight = setInterval(function () {

			feedback.classList.remove("correct")
			feedbackText.innerHTML = "";
		}, 2000);

	} else {
		feedback.classList.add("wrong");
		feedbackText.innerHTML = `<p>Answer is incorrect! =(</p>`;
		feedbackWrong = setInterval(function () {
			feedback.classList.remove("wrong")
			feedbackText.innerHTML = "";
		}, 2000);
	}
}

// ALL THE VIEWS
function changeHighScoreBtnText(label) {
	showScoresBtn.textContent = label;
}

function viewToggle(frontPageView, highScoresView, gameView) {

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
	changeHighScoreBtnText("High Scores");
	viewToggle("visible", "hidden", "hidden");
};
function highScoresView() {
	//Shows the find friend view, hides the favorites view, hides welcome

	viewToggle("hidden", "visible", "hidden");
	changeHighScoreBtnText("Back")
};
function gameView() {
	//Hides the welcome view, hides the find friend view, shows favorites
	viewToggle("hidden", "hidden", "visible");

};
initialsSubmit.addEventListener("click", function (event) {
	event.preventDefault();
	let newEntry = { name: userInitials.value, score: totalScore };
	console.log(newEntry, "New Score Entry Data")
	scoreboardParsed.push(newEntry);
	sendToLocalStorage(scoreboardParsed, "scoreboard");
	highScoresView()
})

startBtn.addEventListener("click", function (event) {
	initialSetup();
})

//Lets change the below to event delegation
var clickContainer = document.querySelector("body");

clickContainer.addEventListener("click", function (event) {
	var element = event.target;

	// //If High Scores is clicked. Same button is used for back
	if (element === showScoresBtn) {
		(showScoresBtn.textContent === "High Scores") ? highScoresView() : frontPageView();

	} else if (element === startBtn) {
		gameView();
		countdown();
		displayQuestion(theQuestions);
	} else if (element === quitBtn || element === playAgain) {
		initialSetup();
		clearInterval(timeInterval);
	}

	//clear scoreboard
	if (element === clearLeaderboard) {
		clearScoreboard();
	}
	// change view based on click
	if (element.classList.contains("front-page-view")) {
		frontPageView()
	} else if (element.classList.contains("high-scores-view")) {
		highScoresView()
	} else if (element.classList.contains("game-view")) {
		gameView()
	}

	//Check if the answer selected is correct - Need to make this an event bubble and catch it on the parent

	if (element.classList.contains("choice")) {
		let chosenAnswer = element.dataset.answer;
		let correctAnswer = rand.answer;
		console.log(chosenAnswer, "Chosen Answer")
		console.log(correctAnswer, "Correct answer")

		if (chosenAnswer === correctAnswer) {
			console.log("You have chosen wisely!!!!")
			totalScore = totalScore + 10;
			currentScoreLabel.textContent = totalScore;
			finalScoreLabel.textContent = totalScore;
			console.log(totalScore);
			displayQuestion(theQuestions);
			displayFeedback(chosenAnswer === correctAnswer)
		} else {
			console.log("Wrong Answer")
			displayQuestion(theQuestions);
			console.log(totalScore)
			displayFeedback(false)
		}
	}

});
