//Global variables
	var correctAnswers = 0;
	var currentQuestion = 0;
	var userGuess = "";

// Quiz Questions
	var questionArray = [{
				question: "When was Zeta Sigma Chi founded?",
				options: ['1989', '1990', '1991', '1992'],
				questionNumber: 0,
				answer: 2
			},
			{
				question: "In which state did the founders of Eta Chapter cross?",
				options: ['Illinois', 'Wisconsin', 'Michigan', 'Maryland'],
				questionNumber: 1,
				answer: 2
			},
			{
				question: "In which European country does one of the Mommy Chis live?",
				options: ['Italy', 'Spain', 'Germany', 'France'],
				questionNumber: 2,
				answer: 0
			},
			{
				question: "Which chapter won 'Chapter of the Year' the most times between 2010 and 2013?",
				options: ['Nu', 'Pi', 'Xi', 'Beta'],
				questionNumber: 3,
				answer: 2
			},
			{
				question: "Which chapter is home to the first 'Keeping the Dream Alive' awardee?",
				options: ['Epsilon', 'Kappa', 'Iota', 'Lambda'],
				questionNumber: 4,
				answer: 3
			}];

//Introduction
function introduction() {
	$('.intro').show();
	$('.quiz-window').hide();
	$('.results').hide();
}

//Start the game
function startGame() {
	$('.intro').hide();
	$('.results').hide();
	showQuestion(currentQuestion);
}

//Show quiz questions
function showQuestion(currentQuestion) {
	$('.quiz-window').show();
	document.getElementById("progress").value = (currentQuestion * 20);
	$('#quizquestion').text(questionArray[currentQuestion].question);
	$('.answers').empty();
  		var optionsTotal = questionArray[currentQuestion].options.length;
  		for (var i = 0; i < optionsTotal; i++) {
  			$('.answers').append('<label for="radio' + i + '" class="choices"><input type="radio" name="radio" id="radio' + i + '" class="choiceName" value="' + i + '"/><span>' + questionArray[currentQuestion].options[i] + '</span></label>');
 		}
}

//Check if the answer is correct
function rightWrong(userGuess) {
 	var userGuess = $('input[type="radio"]:checked').val(); 			
	if (userGuess == questionArray[currentQuestion].answer) {
		correctAnswers++;
		console.log("User has guessed " + correctAnswers + " answers correctly.");		
		nextQuestion();
	}
	else if (userGuess !== questionArray[currentQuestion].answer) {
		console.log("User has guessed " + correctAnswers + " answers correctly.");
		nextQuestion();
	}
}

//Move to next question or finish the game
function nextQuestion() {
	var questionsTotal = (questionArray.length-1);
  	if (currentQuestion == questionsTotal) {
  		$('.quiz-window').hide();
		$('.results').show();
		$('.tally').text("You got " + correctAnswers + " out of 5 questions correct!");
	}
	else {
		currentQuestion++;
		showQuestion(currentQuestion);
	}	
}

//Show user progress
/*function userProgress() {
	/*update progress bar with question number * 20%*/
	/*$( "#progress" ).progressbar( "value", (currentQuestion * 20 );
}*/

//Start a new game
function newGame() {
	location.reload();
}

//Let the games begin!
$(document).ready(function() {

	/*start quiz with intro screen*/
	introduction();

	/*leave intro screen and start the quiz*/
	$('#start').on('click', startGame);

	/*on click of the submit button, check whether answer is right or wrong*/
	$('#submit').on('click', rightWrong);

	/*on click of the next button, move to the next question*/
	$('#next').on('click', nextQuestion);

	/*on click of the reset button, call newGame function*/
	$('#reset').on('click', newGame);
});