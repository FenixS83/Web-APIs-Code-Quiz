//Array of questions to be inserted for quiz
var questions = [
    {
        title: `In Captain America: The First Avenger, where does Peggy tell Steve that she wants to meet him for a dance before he plunges into the ice?`,
        choices: [`The Cotton Club`, `The Stork Club`, `El Morocco`, `The Copacabana`],
        answer: `The Stork Club` 
    },
    {
        title:  `In Star Trek: The Next Generation, where on the Enterprise is Captain Picard when he says the phrase "Make it so" for the first time?`,
        choices: [`The Battle Bridge`, `Captain's Ready Room`, `Main Bridge`, `Main Shuttle Bay` ],
        answer: `The Battle Bridge`

    },
    
    {
        title: `In Star Wars: Attack of the Clones, the Clone Wars began on which planet?`,
        choices: [`Tatooine`, `Naboo`, `Geonosis`, `Coruscant` ],
        answer: `Geonosis`
    },
    {
        title: `In the Batman comics, which super villain broke Batman's back, leaving him crippled and wheel-chair bound?`,
        choices: [`Ra's Al Ghul`, `Killer Croc`, `Joker`, `Bane`],
        answer: `Bane`
    },
    {   
        title: `In Stargate: SG-1, the Tauri (Humans) eventually become "The Fifth Race". Which of the following are not one of the other four races?`,
        choices: [`Alterans`, `Furlings`, `Nox`, `Tagreans` ],
        answer: `Tagreans`

    },
    {
        title: `In Farscape, what is the name of Moya's son?`,
        choices: [`Talon`, `Rygel`, `Scorpius`, `Braca` ],
        answer: `Talon`
    },
    {
        title: `In Back to the Future, when Marty travels back in time, he departs from "Twin Pines Mall" in 1985. What mall does he arrive at when he returns back to 1985?`,
        choices: [`Hill Valley Mall`, `Middleton Mall`, `Twin Pines Mall`, `Lone Pine Mall` ],
        answer: `Lone Pine Mall`          
    },
    {
        title: `In Battlestar Galactica, which of the following characters never occupies the office of the President of the Colonies?`,
        choices: [`Laura Roslin`, `Tom Zarek`, `Lee Adama`, `Gaius Baltar` ],
        answer: `Tom Zarek`
    },
    {
        title: `In Indiana Jones: Raiders of the Lost Ark, who is the main villain?`,
        choices: [`Spalko`, `Toht`, `Belloq`, `Donovan` ],
        answer: `Belloq`
    },
    {
        title: `In Firefly/Serenity, when River's subliminal trigger is activated, what name/words does she say?`,
        choices: [`I'm a leaf on the wind`, `Cassandra`, `Miranda`, `two by two, hands of blue` ],
        answer: `Miranda`
    }
];
// Declared variables
var score = 0;
var questionIndex = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Seconds left is 10 seconds per question:
var secondsLeft = 100;
// Holds interval time
var holdInterval = 0;
// penalty time for incorrect answer is 10 seconds
var penalty = 10;
// Creates new element
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -10 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
// All done will append last page
function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    //creates Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    // creates a Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");
    questionsDiv.appendChild(createP);

// Calculates time remaining and replaces it with score
if (secondsLeft >= 0) {
    var timeRemaining = secondsLeft;
    var createP2 = document.createElement("p");
    clearInterval(holdInterval);
    createP.textContent = "Your final score is: " + timeRemaining;
    questionsDiv.appendChild(createP2);
    }

// creates a label to enter user intials
var createLabel = document.createElement("label");
createLabel.setAttribute("id", "createLabel");
createLabel.textContent = "Enter your initials: ";
questionsDiv.appendChild(createLabel);

// inputs user initials
var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("id", "initials");
createInput.textContent = "";
questionsDiv.appendChild(createInput);
 // submits the intials and score to the high scores page
 var createSubmit = document.createElement("button");
 createSubmit.setAttribute("type", "submit");
 createSubmit.setAttribute("id", "Submit");
 createSubmit.textContent = "Submit";
 questionsDiv.appendChild(createSubmit);

 // Event listener to capture initials and local storage for initials and score
 createSubmit.addEventListener("click", function () {
     var initials = createInput.value;

     if (initials === null) {

         console.log("No value entered!");
     } 
        else {
         var finalScore = {
             initials: initials,
             allScores: timeRemaining,
         }
        
         console.log(finalScore);
         var allScores = localStorage.getItem("allScores");
         if (allScores === null) {
             allScores = [];
         } else {
             allScores = JSON.parse(allScores);
         }
         allScores.push(finalScore);
         var newScore = JSON.stringify(allScores);
         localStorage.setItem("allScores", newScore);
         // Travels to final page
         window.location.replace("./highscores.html ");
     }
 });
}
