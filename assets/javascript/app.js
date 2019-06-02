//Global Variables
var time = $("#time");
var correction = $("#correction");
var question = $("#question");
var answers = $( "label" );
var position = -1, countdownInterval, endTheGame = false;


//Questions
var questions = [
    {
        prompt: "q1",
        ans: ["a","b","c","d"],
        correct: 1
    },
    {
        prompt: "q2",
        ans: ["1","2","3","4"],
        correct: 2
    },
    {
        prompt: "",
        ans: [""],
        correct: 0
    },
    {
        prompt: "",
        ans: [""],
        correct: 0
    },
    {
        prompt: "",
        ans: [""],
        correct: 0
    },
    {
        prompt: "",
        ans: [""],
        correct: 0
    },
    {
        prompt: "",
        ans: [""],
        correct: 0
    },
    {
        prompt: "",
        ans: [""],
        correct: 0
    },
    {
        prompt: "",
        ans: [""],
        correct: 0
    },
    {
        prompt: "",
        ans: [""],
        correct: 0
    }
];

function beginGame() {
    
    updateQuestion();
    beginCountdown();
    
    //Start showing Q  & A
    time.fadeIn("slow")
    answers.fadeIn("slow")
    question.fadeIn("slow")

    answers.css("visibility", "visible")
    
    $(".ans").on("click", function() {
        var choice = parseInt(this.value);
        
        if (!endTheGame) {
            if (choice === questions[position].correct) {
                console.log("Correct!");
                correction.text("Correct!")
            }
            else {
                console.log("Oops! Incorrect!");
                correction.text("Oops! Incorrect!")
            }

            endTheGame = true;
            clearInterval(countdownInterval);
            setTimeout(function() {
                updateQuestion()
            }, 5000)
        }
    });
}

function updateQuestion() {
    position++;
    if (position < questions.length) {
        endTheGame = false;
        
        question.text(questions[position].prompt)
        
        answers.each(function(j, obj) {
            $(this).text(questions[position].ans[j])
        })

        beginCountdown()
        correction.html("")
    }
    else {
        endGame()
    }
}

function beginCountdown() {
    //Reset existing interval
    clearInterval(countdownInterval);
    var counterNumber = 30;

    //Set a new counter per question
    countdownInterval = setInterval(function(){
        if (counterNumber > 0) {
            counterNumber--;
            time.text("Time Remaining: " + counterNumber + "s");
        }
        else {
            correction.fadeIn("slow")
            correction.html("Oh No! You ran out of time! <br />The correct answer was: " + questions[position].ans[questions[position].correct])
            clearInterval(countdownInterval);
            
            setTimeout(function() {
                updateQuestion()
            }, 5000)
        }
    }, 1000)
}

/**
 * Function clears the Q&A screen, shows stats and
 *  asks the user to play again. If yes, obj position
 * is ran again. Else, main menu is shown.
 */
function endGame() {
    //Gate to stop clicks
    endTheGame = true;
    //Clear all, display PlayAgain message and stats.

    //if they say yes, run questions again with position=0

    //else run a page refresh to show main menu.
}

$(document).ready(function() {
    $("#begin").on("click", function() {
        $(this).fadeOut("slow");
        beginGame();
    })
})  


/**
 * PseudoCode
 */
//Setup Main Menu

    //onClick, run show correct answer
        //Highlight correct position of arrIndex

    //After Q10 shown, show results. Pause.

    //onClick playAgain, run SetupFunction
