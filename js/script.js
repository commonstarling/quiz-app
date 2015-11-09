//Global variables
	var questionNum = 0;
	//var questionTotal = questions.length;
	var correctAnswers = 0

// Quiz Questions
	var questions = [
	
		// Question 1
			{
				question: "When was Zeta Sigma Chi founded?",
				options: ['1989', '1990', '1991', '1992'],
				answer: 2
			},

		// Question 2
			{
				question: "In which state did the founders of Eta Chapter cross?",
				options: ['Illinois', 'Wisconsin', 'Michigan', 'Maryland'],
				answer: 2
			},

		// Question 3
			{
				question: "In which European country does one of the Mommy Chis live?",
				options: ['Italy', 'Spain', 'Germany', 'France'],
				answer: 0
			},

		// Question 4
			{
				question: "Which chapter won 'Chapter of the Year' the most times between 2010 and 2013?",
				options: ['Nu', 'Pi', 'Xi', 'Beta'],
				answer: 1
			},

		// Question 5
			{
				question: "Which chapter is home to the first 'Keeping the Dream Alive' awardee?",
				options: ['Epsilon', 'Kappa', 'Iota', 'Lambda'],
				answer: 3
			},
	];

//Introduction
function startGame() {
	$('.intro').hide();
	$('.results').hide();
	$('.quiz-window').show();
}

//Show quiz questions

//Tell if the answer is correct
function rightWrong() {
		var userGuess = $('input[type="radio"]:checked').val();
		console.log("User guess is " + userGuess);
}

//Show user progress
/*function userProgress(questionNumber) {
	/*update progress bar with question number * 20%*/
	/*document.getElementById("progress").value = questionNumber * 20;
}

//Show user results
function gameResults() {

}

//Start a new game
function newGame() {
	location.reload();
}*/


$(document).ready(function() {

	/*leave intro screen and start the quiz*/
	$('#start').on('click', startGame);

	/*on click of the submit button, check whether answer is right or wrong*/
	$('.submit').on('click', rightWrong);

	/*on click of the reset button, call newGame function*/
	//$('.reset').on('click', newGame);

});

//$(document).on('click', '#remove-button', removeItem);