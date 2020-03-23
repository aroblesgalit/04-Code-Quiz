// Target elements
var userNameInput = document.getElementById("userName");
var scoreListUl = document.getElementById("scoreList");
var clearScoreButton = document.getElementById("clearScoreButton");


// Event listeners



// Function that takes in the score and adds it to the highscores list
// function submitScore() {
//     // Add user input into an object
//     // Push user input object into highscoresArray
//     // Reorder array
//     // Loop through array and create li element for each -- can be a function
//     createScoreListItem();
//     // Show high score screen
//     viewHighscores();
// }


// Function that creates li element -- ORIGINAL
// function createScoreListItem() {
//     var scoreListItemLi = document.createElement("li");
//     scoreListItemLi.setAttribute("id", position);
//     scoreListItemLi.setAttribute("class", "scoreListItem");
//     var placeNumberDiv = document.createElement("div");
//     placeNumberDiv.setAttribute("class", "placeNumber");
//     placeNumberDiv.textContent = position;
//     var userNameDiv = document.createElement("div");
//     userNameDiv.setAttribute("class", "userName");
//     userNameDiv.textContent = userNameInput.value // Grab user's name from input field
//     var userScoreDiv = document.createElement("div");
//     userScoreDiv.setAttribute("class", "userScore");
//     userScoreDiv.textContent = userScore.textContent; // Grab userScore value from quizLogic

//     // Append elements
//     scoreListItemLi.appendChild(placeNumberDiv);
//     scoreListItemLi.appendChild(userNameDiv);
//     scoreListItemLi.appendChild(userScoreDiv);
//     scoreListUl.appendChild(scoreListItemLi);
// }



/////////////////////////////////////////////// NEW SOLUTION
// Add user input into an object
// Push user input object into highscoresArray
// Reorder array

// Create variables
// var position = 1; // index of user's object + 1 Hard coded for now, but it should equal user's position based on score after reordering the aray
var highscoresArray = []; // Array of objects [{name: "John Doe", score: 65}, {name: "Alice Wonderland", score: 55}] -- then use a method to order them
var scoreListCount = 0;

highscoreInit();

// Function to render highscoresArray
function renderHighscores() {
    // Clear the scoreList and update list count
    scoreListUl.innerHTML = "";
    scoreListCount = highscoresArray.length;

    // Render a new li for each highscore
    createScoreListItem();
}

// Function that creates li element for each item in the array
function createScoreListItem() {
    for (var i = 0; i < highscoresArray.length; i++) {
        var highscore = highscoresArray[i];

        var scoreListItemLi = document.createElement("li");
        scoreListItemLi.setAttribute("class", "scoreListItem");
        scoreListItemLi.setAttribute("data-index", i);
        var placeNumberDiv = document.createElement("div");
        placeNumberDiv.setAttribute("class", "placeNumber");
        placeNumberDiv.textContent = i + 1;
        var userNameDiv = document.createElement("div");
        userNameDiv.setAttribute("class", "userName");
        userNameDiv.textContent = highscore["name"]; // Grab user's name from input field
        var userScoreDiv = document.createElement("div");
        userScoreDiv.setAttribute("class", "userScore");
        userScoreDiv.textContent = highscore["score"]; // Grab userScore value from quizLogic

        // Append elements
        scoreListItemLi.appendChild(placeNumberDiv);
        scoreListItemLi.appendChild(userNameDiv);
        scoreListItemLi.appendChild(userScoreDiv);
        scoreListUl.appendChild(scoreListItemLi);
    }
}

function highscoreInit() {
    // Get stored highscores array from localStorage
    // Parsing the JSON string to an object
    var storedHighscoresArray = JSON.parse(localStorage.getItem("highscoresArray"));

    // If highscoresArray were retrieved from localStorage, update the highscoresArray to it
    if (storedHighscoresArray !== null) {
        highscoresArray = storedHighscoresArray;
    }

    // Render highscoresArray to the DOM
    renderHighscores();
}

function storeHighscores() {
    // Stringify and set "highscoresArray" key in localStorage to highscoresArray
    localStorage.setItem("highscoresArray", JSON.stringify(highscoresArray));
}



// When score is submitted
submitScoreButton.addEventListener("click", function(event) {
    event.preventDefault();

    var userData = {name: "", score: 0}
    var name = userNameInput.value.trim();
    var score = parseInt(timeLeft);

    // Return from function early if submitted name is blank
    if (name === "" || score === 0) {
        return;
    }

    // Add new name and score to object and push into array
    userData["name"] = name;
    userData["score"] = score;
    highscoresArray.push(userData);

    // Store updated highscoresArray in localStorage, re-render the array
    storeHighscores();
    renderHighscores();

    // View highscores screen
    viewHighscores();
});

// When clear highscores button is clicked
clearScoreButton.addEventListener("click", clearScore);

// Function to clear score
function clearScore() {
    // Empty out the array
    highscoresArray = [];

    // Store updated array in localStorage, re-render the list
    storeHighscores();
    renderHighscores();
}