// Logic for when HIGHSCORES button is clicked
var highscoresButton = document.getElementById("highscoresButton");
var highscoresScreen = document.getElementById("highscores");
var branding = document.getElementById("branding");
var homeScreen = document.getElementById("home");

highscoresButton.addEventListener("click", viewHighscores);

function viewHighscores() {
    highscoresScreen.style.display = "flex";
    hideHighscoresButton();
    viewBranding();
    hideHomeScreen();
}

function hideHighscoresButton() {
    highscoresButton.style.display = "none";
}

function viewBranding() {
    branding.style.display = "block";
}

function hideHomeScreen() {
    homeScreen.style.display = "none";
}

// Logic for when Color Quiz branding is clicked
branding.addEventListener("click", viewHomeScreen);

function viewHomeScreen() {
    homeScreen.style.display = "block";
    hideHighscores();
    hideBranding();
    viewHighscoresButton();
}

function hideHighscores() {
    highscoresScreen.style.display = "none";
}

function hideBranding() {
    branding.style.display = "none";
}

function viewHighscoresButton() {
    highscoresButton.style.display = "block";
}