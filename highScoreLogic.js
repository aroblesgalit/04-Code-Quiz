// Target elements
var userNameInput = document.getElementById("userName");
var scoreListUl = document.getElementById("scoreList");
var clearScoreButton = document.getElementById("clearScoreButton");

// Create variables
var position = 1; // index of user's object + 1 Hard coded for now, but it should equal user's position based on score
var highscoresArray = []; // Array of objects [{name: "John Doe", score: 65}, {name: "Alice Wonderland", score: 55}] -- then use a method to order them

// Event listeners
submitScoreButton.addEventListener("click", submitScore);
clearScoreButton.addEventListener("click", clearScore);


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


// Function to clear score
function clearScore() {
    var scoreListItemLi = document.querySelector(".scoreListItem");
    scoreListItemLi.parentNode.removeChild(scoreListItemLi);
}