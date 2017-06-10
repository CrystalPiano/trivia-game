// ==============  NOTES  ===================
// Game will not load upon pressing 'start' button.
// Need to add timer and start on click
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
var correct = 0

var incorrect = 0

var unanswered = 0

// ==============  EVENTS  ==================

// Begins game on click and starts timer.
$('#start').on('click', function() {
  //alert('Hello');
  startGame();
  $('.js-check').on('click', function() {
    alert($(this).attr('data-name'));
    questions[0].correctAnswer;
    alert(questions[this.name].correctAnswer);
    // Determines if user correct or incorrect, then applies approprite tally.
    if (answerChosen === correctAnswer) {
      alert("You got it!");
      right ++;
      alert(right);
    } 
      else {
        alert("Nope!");
        wrong ++;
        alert(wrong);
      }
  });
 })

// ==============  FUNCTIONS  ===============

function startGame() {
	var j = 0;
	var questionString = '';
        for(var i=0; i < questions.length; i++) {
          j++;

          var answerString = '';
          
          questionString = '<div>' + j + '. ' + questions[i].question + '</div>';

          for(var a=0; a < questions[i].answer.length; a++) {
            answerString +=
            '<input class="answer js-check" type="radio" name="' + i + '" data-name="' + questions[i].answer[a] + '">' + questions[i].answer[a] +
            '</input>';
          }

          $('#questions').append('<div class="question">' + questionString + answerString + '</div>');
    }
}