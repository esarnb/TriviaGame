//Global Variables
var time = $("#time");
var correction = $("#correction");
var question = $("#question");
var answers = $( "label" );
var countdownInterval, endTheGame = false;
var wins = 0, position = -1;
var yesno = $(".yesno")
var stats = $("#stats")

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
                // correction.text("Correct!")
                wins++;
            correction.html("Correct!  " + questions[position].ans[questions[position].correct - 1])

            }
            else {
                // correction.text("Oops! Incorrect!")
            correction.html("Incorrect :c <br />The correct answer was: " + questions[position].ans[questions[position].correct - 1])

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
            correction.html("Oh No! You ran out of time! <br />The correct answer was: " + questions[position].ans[questions[position].correct - 1])
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
    correction.fadeOut("slow").empty()
    question.fadeOut("slow").empty()
    answers.fadeOut("slow").empty()
    yesno.fadeIn("slow")
    stats.append(`<p> Correct Answers: ${wins} Missed Questions: ${10-wins}`)
    correction.text("Would you like to play again?")
    $(".yesno").on("click", function(evt) {
        var choice = $(this).attr("value");
        if (choice === "yes") {
            position = -1;
            correction.fadeIn()
            beginGame();
            stats.empty()
            yesno.fadeOut("slow")
        }
        else {
            correction.fadeIn("slow")
            stats.empty()
            correction.text("Thanks for playing!")
        }
    });
    yesno.fadeIn("slow")

    
    //else run a page refresh to show main menu.
}

yesno.fadeOut("fast")
$(document).ready(function() {
    $("#begin").on("click", function() {
        $(this).fadeOut("slow");
        beginGame();
    })
})




/*CodePen by Tiffany Rayside (https://codepen.io/tmrDevelops/pen/epeBGa)*/
var _3DPretty=function(){var t,n,i,e,o,h=[],a=0,s=0,r=0,d=0,c=500,u=function(){e=.5*window.innerWidth,o=.5*window.innerHeight},f=function(){window.requestAnimationFrame(f),l()},M=function(a){for(var s=0;s<c;s++){var r={};r.p=document.createElement("span"),t.appendChild(r.p);var d,u,f,M=s/c;d=s%(.5*c),u=Math.floor(d)/100+Math.floor(d/2)%10/5*Math.PI*2,f=Math.acos(d%4*.6-.9),M=a?a(M):M-M*M+.5;var l=Math.sin(f)*M;r.x=Math.sin(u)*l,r.y=Math.cos(u)*l,r.z=Math.cos(f)*M,h.push(r),r.transform=function(){var t=.02*n,h=.02*i,a=Math.cos(t),s=Math.sin(t),r=Math.cos(h),d=Math.sin(h),c=this.y*s+this.z*a;this.y=this.y*a+this.z*-s,this.z=this.x*-d+c*r,this.x=this.x*r+c*d;var u=1/(1+this.z),f=this.x*u*o+e-2*u,M=this.y*u*o+o-2*u,l=this.p.style;if(f>=0&&M>=0&&f<2*e&&M<2*o){Math.round(256+256*-this.z);l.left=Math.round(f)+"px",l.top=Math.round(M)+"px",l.width=Math.round(2*u)+"px",l.height=Math.round(2*u)+"px",l.background="hsla("+M+",80%,80%,1)",l.zIndex=200+Math.floor(100*-this.z)}else l.width="0px"}}},l=function(){var t=1/o;r+=n=(s-r)*t,d+=i=(a-d)*t;for(var e,c=0;e=h[c];c++)e.transform()};return{set:function(n,i){n&&(c=n),t=document.getElementById("space"),window.addEventListener("mousemove",function(t){a=t.clientX,s=t.clientY}),window.addEventListener("touchmove",function(t){t.preventDefault(),a=t.touches[0].clientX,s=t.touches[0].clientY}),u(),window.addEventListener("resize",u),M(i),f()}}}();window.onload=function(){_3DPretty.set(500,function(t){return t*t})};
