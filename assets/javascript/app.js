//Global Variables
var time = $("#time");
var correction = $("#correction");
var question = $("#question");
var answers = $("#answers");

//Questions

var questions = [
    {
        prompt: "q1",
        ans: ["a","b","c"],
        correct: 1
    },
    {
        prompt: "q2",
        ans: ["a","b","c"],
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

    time.text("30:00")
    question.text(questions[i].prompt)
    answers.text(questions[i].ans.join(" "))

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
}


$(document).ready(function() {
    $("#begin").on("click", function() {
        $(this).fadeOut("slow");
    
        beginGame(0);
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
