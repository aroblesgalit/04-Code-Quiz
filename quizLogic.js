// Questions array 
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
        answer: "<script>"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the following HTML element? <p id='demo'>This is a demonstration.</p>",
        choices: ["document.getElementByName('p').innerHTML = 'Hello World!';", "document.getElement('p').innerHTML = 'Hello World';", "document.getElementByID('demo').innerHTML = 'Hello World!';", "#demo.innerHTML = 'Hello World!';"],
        answer: "document.getElementByID('demo').innerHTML = 'Hello World!';"
    },
    {
        question: "Where is the correct place to insert a JavaScript",
        choices: ["The <body> section", "Both the <head> section and the <body> section are correct", "The <head> section"],
        answer: "Both the <head> section and the <body> section are correct"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: ["<script name='xxx.js'>", "<script src='xxx.js'>", "<script href='xxx.js'>"],
        answer: "<script src='xxx.js'>"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        choices: ["False", "True"],
        answer: "False"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox('Hello World');", "msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
        answer: "alert('Hello World');"
    }
];


// On click event listeners
startButton.addEventListener("click", createQuizUI);

// Declare variables
var quizNum = 1;
var quizNumTotal = questions.length;

// Create quiz ui divs dynamically and append to body, then insert question
function createQuizUI() {
    // questionWrapper div and give it class
    var questionWrapperDiv = document.createElement("div");
    questionWrapperDiv.setAttribute("class", "questionWrapper");
    // quizNumWrapper div and give it class
    var quizNumWrapperDiv = document.createElement("div");
    quizNumWrapperDiv.setAttribute("class", "quizNumWrapper");
    // quizNum span and give it class
    var quizNumSpan = document.createElement("span");
    quizNumSpan.setAttribute("class", "quizNum");
    // quizNumTotal span and give it class
    var quizNumTotalSpan = document.createElement("span");
    quizNumTotalSpan.setAttribute("class", "quizNumTotal");
    // quizQuestion div and give it class
    var quizQuestionDiv = document.createElement("div");
    quizQuestionDiv.setAttribute("class", "quizQuestion");
    // Append divs to each other
    quizNumWrapperDiv.appendChild(quizNumSpan);
    quizNumWrapperDiv.appendChild(quizNumTotalSpan);
    questionWrapperDiv.appendChild(quizNumWrapperDiv);
    questionWrapperDiv.appendChild(quizQuestionDiv);

    // Append main divs to body
    quizUI.appendChild(questionWrapperDiv);

    // Grab questions and append them to created quiz ui
    // Grab quizNum
    quizNumSpan.innerHTML = quizNum;
    // Grab quizNumTotal
    quizNumTotalSpan.innerHTML = "of " + quizNumTotal;
    // Grab quizQuestion
    quizQuestionDiv.innerHTML = questions[quizNum - 1]["question"];
}