// ==============  NOTES  ===================
// 
// 
//
// ==============  VARIABLES  ===============

var questions = [
  {
    question: "How tall is the John Hancock Center (Antenna Included) ?",
    answer: ["457 meters", "503 meters", "247 meters", "463 meters"],
    correctAnswer: "457 meters"
  },
   {
    question: "How tall is the John Hancock Center (Antenna Excluded) ?",
    answer: ["198 meters", "332 meters", "343 meters", "247 meters"],
    correctAnswer: "343 meters"        
  },
   {
    question: "Where does the Hancock Center rank in terms of tallest building in America?",
    answer: ["4th Tallest", "8th Tallest", "10th Tallest", "2nd Tallest"],
    correctAnswer: "8th Tallest"        
  },
     {
    question: "True or False - The Mayor of Chicago once allowed a man to climb the exterior of the Hancock Center?",
    answer: ["True", "False"],
    correctAnswer: "True"        
  },
];

// Varibles for declaring totals per category
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//Array containing user choices
var selections = [];

// ==============  EVENTS  ==================

// Begins game on click and starts timer
$('#start').on('click', function() {

  // Calls for timer
  var fiveMinutes = 60 * 5,
        display = $('#countdown');
        startTimer(fiveMinutes, display);

  // Calls game to start
  startGame();

  // 
  $('.js-check').on('click', function() {
    console.log($(this).attr('data-name'));
    questions[0].correctAnswer;
    console.log(questions[this.name].correctAnswer);
    var answerChosen = 'js-check';
    var correctAnswer = 'data-name';

    // Determines if user correct or incorrect, then applies appropriate tally
    if (answerChosen === correctAnswer) {
      alert("You got it!");
      correct ++;
      alert(correct);
    } 
      else {
        alert("Nope!");
        incorrect ++;
        alert(incorrect);
      }
  });
});

// ==============  FUNCTIONS  ===============
//Game Start Function
function startGame() {

  // Dynamically creates questions and their divs
	var j = 0;
	var questionString = '';
        for(var i=0; i < questions.length; i++) {
          j++;
          var answerString = '';
          questionString = '<div>' + j + '. ' + questions[i].question + '</div>';
          for(var a=0; a < questions[i].answer.length; a++) {
            answerString +=
            '<input class="answer js-check" type="radio" name="' + i + '" data-name="' + questions[i].answer[a] + '">' + questions[i].answer[a] +
            '</input>' + '<br>';
          }

          // Adds next question below previous question
          $('#questions').append('<div class="question">' + questionString + answerString + '</div>');
    };
};

// Logs user choice
function choose() {
    selections[] = +$('input[name="answer"]:checked').val();
  }

// Adds correct tally to correct id
$('#correct').html('Correct: ' + correct);
// Adds incorrect tally to incorrect id
$('#incorrect').html('Incorrect ' + incorrect);
// Adds missed tally to unanswered id
$('#unanswered').html('Unanswered ' + unanswered);


// Timer Function
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text("Time Remaining: " + minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};
