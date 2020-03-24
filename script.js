// Targeting html objects
var highscoresButton = document.getElementById("highscoresButton");
var highscoresScreen = document.getElementById("highscores");
var branding = document.getElementById("branding");
var homeScreen = document.getElementById("home");
var quizUI = document.getElementById("quiz");
var startButton = document.getElementById("startButton");
var backButton = document.getElementById("backButton");
var time = document.getElementById("time");
var doneScreen = document.getElementById("done");


// Logic for when things are clicked
highscoresButton.addEventListener("click", viewHighscores);
branding.addEventListener("click", init);
startButton.addEventListener("click", startQuiz);
backButton.addEventListener("click", init);


init();

// Start quiz function
function startQuiz() {
    // View Quiz UI contents
    viewQuizScreen();
    // Start timer
    startTimer();
}



// Timer logic
var interval;
var timeLeft;
function startTimer() {
    timeLeft = parseInt(time.textContent);
    interval = setInterval(function () {

        timeLeft--;
        if (timeLeft >= 10) {
            time.textContent = timeLeft;
        } else {
            time.textContent = "0" + timeLeft;
            // Set color to red
            time.style.color = "#D86262";
        }

        if (timeLeft === 0) {
            clearInterval(interval)
            // Switch to done screen
            viewDoneScreen();
        }

    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}


// Functions for hiding contents
function hideHomeScreen() {
    homeScreen.style.display = "none";
}

function hideHighscores() {
    highscoresScreen.style.display = "none";
}

function hideQuizUI() {
    quizUI.style.display = "none";
}

function hideDoneScreen() {
    doneScreen.style.display = "none";
}


// Functions for viewing contents
function viewHighscores() {
    // Display Highscores
    highscoresScreen.style.display = "flex";
    // Hide HIGHSCORES button
    hideHighscoresButton();
    // View Branding
    viewBranding();
    // Hide Home contents
    hideHomeScreen();
    // Hide Done contents
    hideDoneScreen();
}

function init() {
    // Display Home contents
    homeScreen.style.display = "block";
    // Change body background color
    document.body.style.backgroundColor = "#2B90D9";
    // Hide Highscores contents
    hideHighscores();
    // Hide branding
    hideBranding();
    // View HIGHSCORES button
    viewHighscoresButton();
    // Hide Quiz UI contents
    hideQuizUI();
    // Hide Done contents
    hideDoneScreen();
    // Stop timer and set it back to default
    clearInterval(interval);
    time.textContent = 75;
    time.style.color = "#D9E1E8";
    // Reset variables
    quizNum = 1;
    quizId = 0;
}

function viewQuizScreen() {
    // Display Quiz contents
    quizUI.style.display = "block";
    // Change body background color
    document.body.style.backgroundColor = "#D9E1E8";
    // Hide highscores button
    hideHighscoresButton();
    // View branding 
    viewBranding();
    // Hide home screen content
    hideHomeScreen();
}

function viewDoneScreen() {
    // Display Done contents
    doneScreen.style.display = "flex";
    // Change body background color
    document.body.style.backgroundColor = "#2B90D9";
    // Hide Quiz contents
    hideQuizUI();
    // Display user's score
    displayScore();
}



// Functions for hiding buttons
function hideHighscoresButton() {
    highscoresButton.style.display = "none";
}

function hideBranding() {
    branding.style.display = "none";
}


// Functions for viewing buttons

function viewHighscoresButton() {
    highscoresButton.style.display = "block";
}

function viewBranding() {
    branding.style.display = "block";
}