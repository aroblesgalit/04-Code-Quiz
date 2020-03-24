// Target elements
var userNameInput = document.getElementById("userName");
var scoreListUl = document.getElementById("scoreList");
var clearScoreButton = document.getElementById("clearScoreButton");


// Create variables
var highscoresArray = []; // Array of objects [{name: "John Doe", score: 65}, {name: "Alice Wonderland", score: 55}]

// Initialize highscores
highscoreInit();

// Function to render highscoresArray
function renderHighscores() {
    // Clear the scoreList
    scoreListUl.innerHTML = "";

    // Render a new li for each highscore
    createScoreListItem();
}

// Function that creates li element for each item in the array
function createScoreListItem() {
    for (var i = 0; i < highscoresArray.length; i++) {
        var highscore = highscoresArray[i];
        // Create elements, set attributes, and uadd text content
        var scoreListItemLi = document.createElement("li");
        scoreListItemLi.setAttribute("class", "scoreListItem");
        scoreListItemLi.setAttribute("data-index", i);
        var placeNumberDiv = document.createElement("div");
        placeNumberDiv.setAttribute("class", "placeNumber");
        placeNumberDiv.textContent = i + 1;
        var userNameDiv = document.createElement("div");
        userNameDiv.setAttribute("class", "userName");
        userNameDiv.textContent = highscore["name"]; // Grab user's name from the array
        var userScoreDiv = document.createElement("div");
        userScoreDiv.setAttribute("class", "userScore");
        userScoreDiv.textContent = highscore["score"]; // Grab userScore value from the array

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
submitScoreButton.addEventListener("click", function (event) {
    event.preventDefault();
    // Create an object for user with their name and score
    var userData = { name: "", score: 0 }
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
    

    // Sort highscores array
    sortHighscores();

    // Limit the length of highscores array to only 3
    if (highscoresArray.length > 3) {
        highscoresArray.length = 3;
    }

    // Store updated highscoresArray in localStorage, re-render the array
    storeHighscores();
    renderHighscores();

    // Clear username input
    clearInput();

    // View highscores screen
    viewHighscores();
});

// When clear highscores button is clicked
clearScoreButton.addEventListener("click", clearScore);

// Function to clear score
function clearScore() {
    // Empty out the array
    highscoresArray = [];

    // Sort array
    sortHighscores();

    // Store updated array in localStorage, re-render the list
    storeHighscores();
    renderHighscores();
}

// Function to re-order the array
function sortHighscores() {
    highscoresArray.sort(function (a, b) {
        var userA = a.score;
        var userB = b.score;

        return userB - userA;
    });
}

// Function to clear the userName input field
function clearInput() {
    userNameInput.value = "";
}