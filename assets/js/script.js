// main page
let signUp = document.getElementById('button');
let welcomePage = document.getElementById('welcome-page');
let gamePage = document.getElementById('game-page')
signUp.addEventListener('click', showGamePage);
signUp.addEventListener('click', showfullName);

function showGamePage() {
    gamePage.style.display = 'block';
    welcomePage.style.display = 'none';
}

// display user name on second page
function showfullName() {
    let name = document.getElementById('name').value;
    let fullName = document.getElementById('fullName');
    fullName.innerHTML = `Welcome to the game, ${name}`;
}

// second page
submit.addEventListener('click', getNumber);

let randomNum = Math.floor(Math.random() * 21);

let count = 0;
let negCount = 5;


function getNumber() {
    let input = Number(document.getElementById('user-input').value);

    // cursor stays on the input value
    document.getElementById('user-input').focus();

    // always give empty string on the user input
    document.getElementById('user-input').value = '';

    let submit = document.getElementById('submit')

    let name = document.getElementById('name').value;

    if(input === randomNum) {
        submit.remove();
        document.getElementById('win').innerHTML = `congratualations! ${name}</br> you won the game.`;
        // hide this div if game wins
        document.getElementById('hide').style.display = 'none';
        // hide the timer 
        document.getElementById('timer').style.display = 'none';

    }else if(input < randomNum) {
        document.getElementById('hint').innerHTML = `almost there ${name}, go up a bit more!! `;
    } else {
        document.getElementById('hint').innerHTML = `getting there ${name}, go down a bit more!!`;
    }
    count ++;
    negCount --;
    document.getElementById('span').innerHTML = ` ${count} times`;
    document.getElementById('chance-left').innerHTML = ` ${negCount} times`;

    if (count === 5) {
        submit.remove();
        document.getElementById('win').innerHTML = `oppss... ${name}</br> you lost the game. </br>The secret number was ${randomNum}`;
        // hide this div if game lost
        document.getElementById('hide').style.display = 'none';
        // hide the timer 
        document.getElementById('timer').style.display = 'none';

    }
}

// enter key function to user-input and submit button
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        getNumber();
    }
})

// enter key function to main page user name and lets play button
document.getElementById('name').addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        showGamePage();
    }
})

// restart game  with restart button
let gameArea = document.getElementById("game-area");

let restart = document.getElementById('restart');
restart.addEventListener('click', restartGame);

function restartGame() {
    window.location.reload();
    return false;
}

// timer
let timeleft = 30;
let getTimer = setInterval(function(){
  if(timeleft === 0){
    clearInterval(getTimer);
    document.getElementById("timer").innerHTML = "Time's Up";
    submit.remove();
    document.getElementById('win').innerHTML = `Uh-Ahh!!! ${name} </br> please try again`;
    document.getElementById('hide').style.display = 'none';
  } else {
    document.getElementById("timer").innerHTML = timeleft + " seconds ";
  }
  timeleft -= 1;
}, 1000);