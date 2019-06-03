//Global Variables
var time = $("#time");
var correction = $("#correction");
var question = $("#question");
var answers = $( "label" );
var countdownInterval, endTheGame = false;
var correct = 0, position = -1;

//Questions
var questions = [
    {
        prompt: "Which planet is named after the Roman god of war?",
        ans: ["Mercury","Mars","Jupiter","Saturn"],
        correct: 2
    },
    {
        prompt: "Who was the first person in space?",
        ans: ["Valentina Tereshkova","Alan Shepard","Yuri Alekseyevich Gagarin","Neil Armstrong"],
        correct: 3
    },
    {
        prompt: "Which planet has a longer day than Earth or any other planet in our solar  system?",
        ans: ["Mercury", "Venus", "Jupiter", "Saturn"],
        correct: 2
    },
    {
        prompt: "Which animal was the first to go into space?",
        ans: ["Félicette the cat", "Two Russian tortoises", "Ham the Chimpanzee", "Laika the dog"],
        correct: 4
    },
    {
        prompt: "What is the furthest object visible to the human eye?",
        ans: ["Andromeda Galaxy", "Dreyer Nebula", "Polaris Star", "Galaxy GN-z11"],
        correct: 1
    },
    {
        prompt: "How much time does it take for sun rays to reach Earth?",
        ans: ["6 minutes", "10 minutes", "8 minutes", "12 minutes"],
        correct: 3
    },
    {
        prompt: "What is the hottest planet in our solar system?",
        ans: ["Venus", "Mercury", "Mars", "Jupiter"],
        correct: 1
    },
    {
        prompt: "What is the coldest place in the universe?",
        ans: ["Dark Doodad Nebula", "Boomerang Nebula", "Double Helix Nebula", "Lemon Slice Nebula"],
        correct: 2
    },
    {
        prompt: "Which is the closest star to the Sun?",
        ans: ["Alpha Centauri", "Sirius", "Polaris", "Proxima Centauri"],
        correct: 4
    },
    {
        prompt: "What flavor ice cream did Baskin-Robbins release in 1969 to commemorate America’s landing on the moon?",
        ans: ["Milky Way Midnight", "Star Light Mint", "Lunar Cheesecake", "Astronaut Ice Cream"],
        correct: 3
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
                correction.text("Correct!")
            }
            else {
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
    correction.empty()
    question.empty()
    answers.empty()
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
