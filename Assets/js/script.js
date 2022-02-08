var questions = [
    {
        title: "The <script> tag is placed at the top of the page?",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        title: "What HTML element is used for the Javascript tag?",
        choices: ["<java>", "<js>", "<script>", "<javascript>"],
        answer: "<script>"
    },
    {
        title: "Java and Javascript are the Same thing?",
        choices: ["True", "False"],
        answer: "True" 
    },
];

// variables

var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// 15 seconds for each question
var secondsleft = 76;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul")

// Timer for Button
timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function (){
            secondsleft--;
            currentTime.textContent = "Time: " + secondsleft;

            if (secondsleft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's Up!";
            }
    
        }, 1000);
    }
    render(questionIndex);
});

// questions

function render(questionIndex) {
// will remove and currently existing data

    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }    
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

// This will compare your choices to the actual answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
        } else {
            // Penalizes -5 seconds off for wrong answer
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }

    questionIndex++;

    if (questionIndex >= questions.length) {
        // last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}

function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);


        // calculates time remaining and replaces it with score
        if (secondsLeft >= 0) {
            var timeRemaining = secondsLeft;
            var createP2 = document.createElement("p");
            clearInterval(holdInterval);
            createP.textContent = "Your final score is: " + timeRemaining;
    
            questionsDiv.appendChild(createP2);
        } 
    
  // event listener to capture initials and local storage for initials and score
            createSubmit.addEventListener("click", function () {
            var initials = createInput.value;

            if (initials === null) {

            console.log("No value entered!");

            } else {
                var finalScore = {
                    initials: initials,
                    score: timeRemaining
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
            // goes to final page
            window.location.replace("./HighScores.html");
    }
});

}