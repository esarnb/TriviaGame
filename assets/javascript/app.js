//Global Variables
var time = $("#time");
var correction = $("#correction");
var question = $("#question");
var answers = $( "label" );
var position = 0;
var countdownInterval, counterNumber = 30;

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

function beginGame(i) {
    //Assign new texts to Q & A
    question.text(questions[i].prompt)
    answers.each(function(j, obj) {
        $(this).text(questions[i].ans[j])
    })

    //Start Countdown and save QuestionPosition i
    beginCountdown(i)
    
    //Start showing Q  & A
    answers.css("visibility", "visible")
    answers.fadeIn("slow")

    question.fadeIn("slow")
    time.fadeIn("slow")
}

function setupGame() {
    time.fadeOut("fast")
    correction.fadeOut("fast")
    question.fadeOut("fast")
    answers.fadeOut("fast")    
}

function outOfTime(i) {
    correction.fadeIn("slow")
    correction.html("Oh No! You ran out of time! <br />The correct answer was: " + questions[i].ans[questions[i].correct])
    setTimeout(function() {
        if (position < questions.length) {
            position++;
            beginGame(position)
            beginCountdown(position)
            counterNumber = 30;
            correction.html("")
        }
    }, 5000)
}

function beginCountdown(i) {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function(){
        if (counterNumber > 0) {
            counterNumber--;
            time.text("Time Remaining: " + counterNumber + "s");
        }
        else {
            outOfTime(i)
            clearInterval(countdownInterval);
        }
    }, 1000)
}

$(document).ready(function() {
    setupGame()
    $("#begin").on("click", function() {
        $(this).fadeOut("slow");
        console.log(this);
        
        beginGame(position);
    })
})  


/**
 * PseudoCode
 */
//Setup Main Menu

//Begin game using SetupFunction 

    //Begin counter

    //Show Q1 using QuestionFunction

    //onClick, run show correct answer
        //Highlight correct position of arrIndex

    //Move to Q2 and repeat above and reset timer 


    //After Q10 shown, show results. Pause.

    //onClick playAgain, run SetupFunction
