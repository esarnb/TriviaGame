//Global Variables
var time = $("#time");
var correction = $("#correction");
var question = $("#question");
var answers = $( "label" );
var position = 0;
var countdownInterval;

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

/**
 * Function begins showing the first Q&A and timer, 
 * fades in necessary elements for viewer.
 */
function beginGame() {
    
    //Start Countdown, pass in first Q's position incase of timeout
    beginCountdown(0)
    
    //Start showing Q  & A
    time.fadeIn("slow")
    answers.fadeIn("slow")
    question.fadeIn("slow")

    answers.css("visibility", "visible")
}

/**
 * 
 * @param {Integer} i is the question/answer object the game is currently on.
 * 
 * Function updates the user with a new question and a set of answers
 */
function updateQuestion(i) {
    question.text(questions[i].prompt)

    answers.each(function(j, obj) {
        $(this).text(questions[i].ans[j])
    })
}

/**
 * 
 * @param {Integer} i Current Q&A object the game is displaying.
 * 
 * Param i is used to get the correct answer for the specific question.
 * Function fades in "out of time" prompt, and for 5s shows the correct answer.
 *  Then, a new question is displayed with a reset timer.
 *  When the last question is answered, the game ends.
 */
function outOfTime(i) {
    correction.fadeIn("slow")
    correction.html("Oh No! You ran out of time! <br />The correct answer was: " + questions[i].ans[questions[i].correct])
    
    setTimeout(function() {
        if (position < questions.length) {
            position++;
            //Run the next question and new counter
            updateQuestion(position)
            beginCountdown(position)
            correction.html("")
        }
        else {
            endGame()
        }
    }, 5000)
}

/**
 * 
 * @param {Integer} i Current Q&A object the game is displaying.
 * 
 * Param i is passed into OutOfTime to show the correct answer on timeout.
 * Function starts a timer of 30s, once it runs out, OutOfTime is called to
 *  update the user of the current (param i) answer. Timer stops for this period.
 */
function beginCountdown(i) {
    
    var counterNumber = 30;

    //Set a new counter per question
    countdownInterval = setInterval(function(){
        if (counterNumber > 0) {
            counterNumber--;
            time.text("Time Remaining: " + counterNumber + "s");
        }
        else {
            outOfTime(i) //Run Question correct answer on question[i]
            clearInterval(countdownInterval);
        }
    }, 1000)
}

/**
 * Function clears the Q&A screen, shows stats and
 *  asks the user to play again. If yes, obj position
 * is ran again. Else, main menu is shown.
 */
function endGame() {
    //Clear all, display PlayAgain message and stats.

    //if they say yes, run questions again with position=0

    //else run a page refresh to show main menu.
}

$(document).ready(function() {
    $("#begin").on("click", function() {
        $(this).fadeOut("slow");
        beginGame(position);
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
