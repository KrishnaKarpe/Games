let myNumber;
let guessCount;
let playerName;
let leaderboard = [];

function startGame() {
    playerName = document.getElementById('playerName').value;
    if (playerName.trim() === '') {
        alert('Please enter your name');
        return;
    }
    myNumber = Math.floor(Math.random() * 100);
    guessCount = 0;
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('result').innerHTML = '';
    document.getElementById('guessCount').innerHTML = '';
}

function displayGuess(){
    document.getElementById('guessCount').innerHTML = `Total guesses: ${guessCount}`;
}
function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;
    let result = document.getElementById('result');
    guessCount++;
    if (userGuess == myNumber) {
        result.innerHTML = '🎉 Congrats!! 🎉 🎉 🎉 🎉 !! Whoooooo correct ' + userGuess + ' it is 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉';
        // document.getElementById('guessCount').innerHTML = `Total guesses: ${guessCount}`;
        displayGuess();
        leaderboard.push({ name: playerName, guesses: guessCount });
        updateLeaderboard();
        myNumber = Math.floor(Math.random() * 100); // Reset the number
        guessCount = 0; // Reset guess count
        // document.getElementById('guessCount').innerHTML = `Total guesses: ${guessCount}`;
        displayGuess();
    } else if (userGuess > myNumber) {

        result.innerHTML = "Answer is less than " + userGuess ;
        // document.getElementById('guessCount').innerHTML = `Total guesses: ${guessCount}`;
        displayGuess();
    } else {
        result.innerHTML = "Answer is Greater than " + userGuess ;
        displayGuess();
    }
    document.getElementById('userGuess').value = ''; // Clear the input
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
}

function updateLeaderboard() {
    let leaderboardDiv = document.getElementById('leaderboard');
    leaderboardDiv.innerHTML = '<h3>Leaderboard</h3>';
    leaderboard.sort((a, b) => a.guesses - b.guesses);
    leaderboard.forEach(player => {
        leaderboardDiv.innerHTML += `<p>${player.name}: ${player.guesses} guesses</p>`;
    });
}