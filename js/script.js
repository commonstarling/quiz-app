//Global variables
	var correctAnswers = 0;
	var currentQuestion = 0;

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
				answer: 1
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
	$('.correct').hide();
	$('.incorrect').hide();
	$('.results').hide();
}

function startGame() {
	$('.intro').hide();
	$('.correct').hide();
	$('.incorrect').hide();
	$('.results').hide();
	showQuestion(0);
}

//Show quiz questions
function showQuestion(currentQuestion) {
	$('.quiz-window').show();
	$('#quizquestion').text(questionArray[currentQuestion].question);
	//document.getElementById("quizquestion").question = questionArray[currentQuestion].question;
	console.log("Current question is " + questionArray[currentQuestion].question);
	$('.answers').empty();
  		var optionsTotal = questionArray[currentQuestion].options.length;
  		for (var i = 0; i < optionsTotal; i++) {
  			$('.answers').append('<label for="radio' + i + '" class="choices"><input type="radio" name="radio" id="radio' + i + '" class="choiceName" value="' + i + '" checked/><span>' + questionArray[currentQuestion].options[i] + '</span></label>');
 		}
}

//Tell if the answer is correct
function rightWrong() {
	var questionsTotal = questionArray.length;
  		for (var i = 1; i < questionsTotal; i++) {
 			var userGuess = $('input[type="radio"]:checked').val();
			console.log("User guess is " + userGuess);
			console.log("Current question is " + i);
			if (userGuess === questionArray[i].answer) {
				correctAnswers++;
				showQuestion(i);
				$('.intro').hide();
				$('.quiz-window').hide();
				$('.results').hide();    
			}
			else {
				showQuestion(i);
			}
		}
}

//Move to next question from feedback screen
/*function nextQuestion() {
	currentQuestion++;
	showQuestion();
}*/

//Show user progress
/*function userProgress(questionNumber) {
	/*update progress bar with question number * 20%*/
	/*document.getElementById("progress").value = questionNumber * 20;
}

//Show user results
function gameResults() {

}*/

//Start a new game
function newGame() {
	location.reload();
}


$(document).ready(function() {

	/*start quiz with intro screen*/
	introduction();

	/*leave intro screen and start the quiz*/
	$('#start').on('click', startGame);

	/*on click of the submit button, check whether answer is right or wrong*/
	$('#submit').on('click', rightWrong);

	/*on click of the next button, move to the next question*/
	//$('#next').on('click', nextQuestion);

	/*on click of the reset button, call newGame function*/
	$('#reset').on('click', newGame);

});

//$(document).on('click', '#remove-button', removeItem);