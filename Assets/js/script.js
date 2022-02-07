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