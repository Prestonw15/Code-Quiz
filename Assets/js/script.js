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
