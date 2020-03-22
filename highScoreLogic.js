// Target elements
var userNameInput = document.getElementById("userName");
var scoreListUl = document.getElementById("scoreList");

// Create variables
var position = 1; // Hard coded for now, but it should equal user's position based on score
var highscoresArray = [];

// Event listeners
submitScoreButton.addEventListener("click", submitScore);



// Function that takes in the score and adds it to the highscores list
function submitScore() {
    // Push user input into highscoresArray
        // highscoresArray.push();
    // Create li element -- can be a function
    createScoreListItem();
    // Show high score screen
    viewHighscores();
}


// Function that creates li element
function createScoreListItem() {
    var scoreListItemLi = document.createElement("li");
    scoreListItemLi.setAttribute("id", position);
    scoreListItemLi.setAttribute("class", "scoreListItem");
    var placeNumberDiv = document.createElement("div");
    placeNumberDiv.setAttribute("class", "placeNumber");
    placeNumberDiv.textContent = position;
    var userNameDiv = document.createElement("div");
    userNameDiv.setAttribute("class", "userName");
    userNameDiv.textContent = userNameInput.value // Grab user's name from input field
    var userScoreDiv = document.createElement("div");
    userScoreDiv.setAttribute("class", "userScore");
    userScoreDiv.textContent = userScore.textContent; // Grab userScore value from quizLogic

    // Append elements
    scoreListItemLi.appendChild(placeNumberDiv);
    scoreListItemLi.appendChild(userNameDiv);
    scoreListItemLi.appendChild(userScoreDiv);
    scoreListUl.appendChild(scoreListItemLi);
}