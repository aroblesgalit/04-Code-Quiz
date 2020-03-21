// Targeting html objects
var highscoresButton = document.getElementById("highscoresButton");
var highscoresScreen = document.getElementById("highscores");
var branding = document.getElementById("branding");
var homeScreen = document.getElementById("home");


// Logic for when HIGHSCORES button is clicked
highscoresButton.addEventListener("click", viewHighscores);


// Logic for when Color Quiz branding is clicked
branding.addEventListener("click", viewHomeScreen);


// Functions for hiding contents
function hideHomeScreen() {
    homeScreen.style.display = "none";
}

function hideHighscores() {
    highscoresScreen.style.display = "none";
}


// Functions for viewing contents
function viewHighscores() {
    highscoresScreen.style.display = "flex";
    hideHighscoresButton();
    viewBranding();
    hideHomeScreen();
}

function viewHomeScreen() {
    homeScreen.style.display = "block";
    hideHighscores();
    hideBranding();
    viewHighscoresButton();
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