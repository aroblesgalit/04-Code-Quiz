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

// quizAnswerLetter array
var letterChoices = ["A", "B", "C", "D"];


// Declare variables
var quizNum = 1;
var quizNumTotal = questions.length;
var quizId = 0;
var userScore = 0;

// On click event listeners
startButton.addEventListener("click", createQuizUI);


// Create quiz ui divs dynamically and append to body, then insert question
function createQuizUI() {

    // Switch to Done screen when no more questions available
    if (quizNum > quizNumTotal) {
        // Show done screen
        alert("You're done!")
        viewDoneScreen();
        // Stop timer
    }


    // questionWrapper div and give it class -- only when question exist
    if (quizNum < quizNumTotal + 1) {
        var questionWrapperDiv = document.createElement("div");
        questionWrapperDiv.setAttribute("class", "questionWrapper");
    }
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
    // quizAnswerChoices ul and give it class
    var quizAnswerChoicesUl = document.createElement("ul");
    quizAnswerChoicesUl.setAttribute("class", "quizAnswerChoices");

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
    quizQuestionDiv.innerHTML = questions[quizId]["question"];

    // Loop through array choices to create quizAnswerChoice li's
    var choicesArr = questions[quizId]["choices"];

    for (var i = 0; i < choicesArr.length; i++) {
        // quizAnswerChoice li and give it class, and set id
        var quizAnswerChoiceLi = document.createElement("li");
        quizAnswerChoiceLi.setAttribute("class", "quizAnswerChoice");
        quizAnswerChoiceLi.setAttribute("id", i);
        // quizAnswerLetter span and give it class
        var quizAnswerLetterSpan = document.createElement("span");
        quizAnswerLetterSpan.setAttribute("class", "quizAnswerLetter");
        // quizAnswerText span and give it class
        var quizAnswerTextSpan = document.createElement("span");
        quizAnswerTextSpan.setAttribute("class", "quizAnswerText");

        // Append divs to each other
        quizAnswerChoiceLi.appendChild(quizAnswerLetterSpan);
        quizAnswerChoiceLi.appendChild(quizAnswerTextSpan);
        quizAnswerChoicesUl.appendChild(quizAnswerChoiceLi);
        // Append main div to body
        quizUI.appendChild(quizAnswerChoicesUl);
        // Grab choices and append them to created spans
        quizAnswerLetterSpan.innerHTML = letterChoices[i];
        quizAnswerTextSpan.textContent = choicesArr[i];
    }


    // Logic for when an answer choice is clicked
    quizAnswerChoicesUl.addEventListener("click", function (event) {

        if (event.target.matches("li")) {
            // If correct answer then add to userScore
            var userChoicePlusLetter = event.target.textContent;
            var userChoice = userChoicePlusLetter.substring(1, userChoicePlusLetter.length + 1);

            if (userChoice === questions[quizId]["answer"]) {
                console.log("Correct!");
                userScore += 5;
                console.log(userScore);
            } else {
                // Subtract from time
                console.log("Wrong!");
                console.log(userScore);
            }

            // Increment quizNum and quizId by 1
            quizNum++;
            quizId++;
            // Remove previous quiz ui
            questionWrapperDiv.remove();
            quizAnswerChoicesUl.remove();
            // Create next quiz ui
            createQuizUI();

            // When no more questions, go to done screen

        }
    });
}