// ==============  NOTES  ===================



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
    question: "How tall is the John Hancock Center (Antenna Excluded) ?",
    answer: ["198 meters", "332 meters", "343 meters", "247 meters"],
    correctAnswer: "343 meters"        
  },
     {
    question: "How tall is the John Hancock Center (Antenna Excluded) ?",
    answer: ["198 meters", "332 meters", "343 meters", "247 meters"],
    correctAnswer: "343 meters"        
  },
     {
    question: "How tall is the John Hancock Center (Antenna Excluded) ?",
    answer: ["198 meters", "332 meters", "343 meters", "247 meters"],
    correctAnswer: "343 meters"        
  },
];


// ==============  EVENTS  ==================

/* initizlize */
        /* button click */
        $('#start').on('click', function() {
          startGame();
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
            answerString += '<input class="answer" type="radio">' + questions[i].answer[a] + '</input>';
          }

          $('#questions').append('<div class="question">' + questionString + answerString + '</div>');
    }
}