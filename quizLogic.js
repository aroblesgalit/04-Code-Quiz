// Questions array 
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
        answer: "<script>"
    },
    {
        question: "What is the correct format for a comment in JavaScript",
        choices: ["{#...#}", "<!--...-->", "//...", "\\..."],
        answer: "<!--...-->"
    },
    {
        question: "JavaScript is the same as Java.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: ["<script name='xxx.js'>", "<script src='xxx.js'>", "<script href='xxx.js'>"],
        answer: "<script src='xxx.js'>"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox('Hello World');", "msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
        answer: "alert('Hello World');"
    },
    {
        question: "Which of the following is the correct way to increment by 1?",
        choices: ["i =+ 1", "i += 1", "i = i++1", "+i+"],
        answer: "i += 1"
    },
    {
        question: "Which of the following is NOT a reserved word in JavaScript?",
        choices: ["interface", "throws", "program", "short"],
        answer: "program"
    },
    {
        question: "Which of these is not a comparison operator?",
        choices: ["<", ">", "=", "!="],
        answer: "="
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["function:myFunction()", "function = myFunction()", "function myFunction()"],
        answer: "function myFunction()"
    }
];

// quizAnswerLetter array
var letterChoices = ["A", "B", "C", "D"];


// Declare variables
var quizNum = 1;
var quizNumTotal = questions.length;
var quizId = 0;
var userScore = document.getElementById("score");
var submitScoreButton = document.getElementById("submitScoreButton");

// On click event listeners
startButton.addEventListener("click", createQuizUI);
// When submit button is clicked
submitScoreButton.addEventListener("click", function (event) {
    event.preventDefault();
});


// Create quiz ui divs dynamically and append to body, then insert question
function createQuizUI() {
    // Clear quiz contents
    quizUI.innerHTML = "";

    // Switch to Done screen when no more questions available
    if (quizNum > quizNumTotal) {
        // Show done screen
        viewDoneScreen();
        // Stop timer
        stopTimer();
    }


    // questionWrapper div and give it class -- only when question exist
    if (quizNum <= quizNumTotal) {
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

            timeLeft = parseInt(time.textContent);
            if (userChoice === questions[quizId]["answer"]) {
                time.textContent = timeLeft;
                // displayFeedback();
            } else {
                // Subtract from time
                if (timeLeft > 10) {
                    timeLeft -= 10;
                    // Update displayed time
                    time.textContent = timeLeft;
                } else if (timeLeft <= 10) {
                    timeLeft = 0;
                    // Display Done screen
                    viewDoneScreen();
                    time.textContent = "00";
                    // Stop timer
                    clearInterval(interval);
                }
            }

            // Display feedback
            displayFeedback();

            // Increment quizNum and quizId by 1
            quizNum++;
            quizId++;
            // Remove previous quiz ui
            questionWrapperDiv.remove();
            quizAnswerChoicesUl.remove();
            // Create next quiz ui
            createQuizUI();
        }
    });
}


// Function to display score in done screen
function displayScore() {
    if (timeLeft < 10) {
        userScore.textContent = "0" + timeLeft;
    } else {
        userScore.textContent = timeLeft;
    }
}


// Function to display feedback
function displayFeedback() {
    // Target the feedback div
    var quizFeedbackDiv = document.querySelector(".quizFeedback");
    var quizFeedbackText = document.querySelector(".quizFeedbackText");

    if (userChoice === questions[quizId]["answer"]) {
        quizFeedbackText.style.color = "#62D872";
        quizFeedbackDiv.textContent = "Correct!";
    } else {
        quizFeedbackText.style.color = "#D86262";
        quizFeedbackDiv.textContent = "Wrong! (-10s)";
    }

    // Add the "show" class to div
    quizFeedbackDiv.classList.add("show");
    // After 3 seconds, remove the show class from the div
    setTimeout(function() {
        quizFeedbackDiv.classList.remove("show");
    }, 3000);
}