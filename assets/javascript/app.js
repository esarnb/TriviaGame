//Global Variables
var time = $("#time");
var correction = $("#correction");
var question = $("#question");
var answers = $( "label" );
var position = 0;

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

    //Start Countdown
    
    //Start showing Q  & A
    $("label").css("visibility", "visible")
    time.fadeIn("slow")
    // correction.fadeIn("slow")
    question.fadeIn("slow")
    answers.fadeIn("slow")
}

function setupGame() {
    time.fadeOut("fast")
    correction.fadeOut("fast")
    question.fadeOut("fast")
    answers.fadeOut("fast")
    console.log(answers.length);
    
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
