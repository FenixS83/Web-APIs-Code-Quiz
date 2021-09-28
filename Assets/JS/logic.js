// This is the logic file for pop-culture quiz


// Define Variables and arrays
var time =question.length * 15;
var timerId =(`.timer`);
var currentQuestionIndex = 0;

var startBtn = document.querySelector(`.startbutton`);
var topicsElement = document.querySelector(`.questionarea_h1`);
var questionsElement = document.querySelector(`.questionarea_p`);
var timerElement = document.querySelector(`.timer`);
var choice1 = document.querySelector(`.answerbutton1`);
var choice2 = document.querySelector(`.answerbutton2`);
var choice3 = document.querySelector(`.answerbutton3`);
var choice4 = document.querySelector(`.answerbutton4`);


document.querySelector(`#textareaname`).onsubmit = submitName(); {
    var name = document.querySelector(`#textareaname`).value;
    localStorage[`name`] = name;
    console.log(localStorage);
}

// startquiz function
function startQuiz() {
    var startScreen = document.querySelector(`.quizstart`);
    startScreen.setAttribute(`class`, `hide `);

    var gameScreen = document.querySelector(`.questionarea`);
    gameScreen.removeAttribute('class')

}

    // submit function first

    //start function second


// Hide Start Screen

    // hide class .quizstart

    // hide .quizstart h1

    // hide .quizstart p

    // hide .disappearingarea

    // hide startfield

    // hide #textareaname

    // hide .start button


// show .timerarea
    // show .timer


// show question and answer screen

    // show .questionarea

    // show .questionarea h1
        // attach topic

    // show .questionarea p
        // attach questions

    // show .answerfield

    // show .answerbuttons
        // attach answers

    // receive response

    // check accuracy of response

        // if correct = play sound then go to next question

        // if incorrect = sub. 7 seconds, play sound then go to next question


// questions or timer = 0, GAME OVER


    // hide question and answer screen

        // hide .timerarea
            // hide .timer

        // hide .questionarea

        // hide .questionarea h1

        // hide .questionarea p
        
        // hide .answerfield

        // hide .answerbuttons
        
// store name and final time in local memory

// go to high schores screen

    // show name and final time in ordered list




//addeventlistener list

    // start quiz
    startBtn.addEventListener(`click`, submitName);
    startBtn.addEventListener(`click`, startQuiz);
    // play again
    againBtn.addEventListener(`click`, startQuiz);
    // high scores button

    // answer 1
    
    // answer 2

    // answer 3

    // answer 4 
    










