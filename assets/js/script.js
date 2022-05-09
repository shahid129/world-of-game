// main page
let letsPlay = document.getElementById('button');
let welcomePage = document.getElementById('welcome-page');
let gamePage = document.getElementById('game-page');

// click events for lets play button
letsPlay.addEventListener('click', showGamePage);
letsPlay.addEventListener('click', showFullName);
letsPlay.addEventListener('click', timer);

function showGamePage() {
    gamePage.style.display = 'block';
    welcomePage.style.display = 'none';
}

// display user name on second page
function showFullName() {
    let name = document.getElementById('name').value;
    let fullName = document.getElementById('fullName');
    fullName.innerHTML = `Hello, ${name}`;
}

// second page
let count = 0;
let negCount = 5;

let randomNum = Math.floor(Math.random() * 20 + 1);
console.log(randomNum);

let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', function guessNum(event) {
        number.setAttribute('style', 'background-color : brown');
        number.style.color = 'white';
        document.getElementById('numInput').innerHTML = event.target.innerHTML;
        let numInput = Number(document.getElementById('numInput').innerHTML);
        console.log(numInput);
        let name = document.getElementById('name').value;

        // console.log(x);
        if (numInput === randomNum) {
            document.getElementById('win').innerHTML = `congratulations! ${name}</br> you won the game.`;
            document.getElementById('win').style.color = "green"
            // hide number buttons
            document.getElementById('numberSubmit').remove();
            // hide the timer 
            document.getElementById('timer').style.display = 'none';
            // hide this div if game wins
            document.getElementById('hide').style.display = 'none';
            //  hide hint
            document.getElementById('hint').style.display = 'none';
            // win git pops up
            document.getElementById('wingif').style.display = 'block';
            return; // stops rest of the code if numInput === randomNum

        } else if (numInput < randomNum) {
            document.getElementById('hint').innerHTML = `almost there ${name}, go up a bit more!! `;
            document.getElementById('hint').style.color = 'green';

        } else {
            document.getElementById('hint').innerHTML = `getting there ${name}, go down a bit more!!`;
            document.getElementById('hint').style.color = 'brown';
        }

        count++;
        negCount--;
        document.getElementById('submitted').innerHTML = ` ${count} times`;
        document.getElementById('chance-left').innerHTML = ` ${negCount} times`;

        if (count === 5) {
            document.getElementById('numberSubmit').remove();
            document.getElementById('win').innerHTML = `Oopss... ${name}</br> you lost the game. </br>The secret number was ${randomNum}`;
            // hide this div if game lost
            document.getElementById('hide').style.display = 'none';
            // hide this div
            document.getElementById('hint').style.display = 'none';
            document.getElementById('timer').style.display = 'none';
            // lost gif pops up
            document.getElementById('lostGif').style.display = 'block';
        }

    });
});

// enter key function to main page user name and lets play button
document.getElementById('name').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        showGamePage();
    }
});

// restart game  with restart button
// let gameArea = document.getElementById("game-area");

let restart = document.getElementById('restart');
restart.addEventListener('click', restartGame);

function restartGame() {
    window.location.reload();
    return false;
}

// timer
let timeleft = 29;

function timer() {
    let name = document.getElementById('name').value;
    let getTimer = setInterval(function () {

        if (timeleft === 0) {
            clearInterval(getTimer);
            document.getElementById("timer").innerHTML = "Time's Up";
            document.getElementById('numberSubmit').remove();
            document.getElementById('win').innerHTML = `Uh-oh!!! Time's Up ${name} </br> please try again`;

            // pop up timer gif
            document.getElementById('timesUp').style.display = 'block';

            // hide these div
            document.getElementById('hide').style.display = 'none';
            document.getElementById('hint').style.display = 'none';

        } else {
            document.getElementById("timer").innerHTML = timeleft + " seconds ";
        }
        timeleft -= 1;
    }, 1000);
}

// disable lets play button initially
letsPlay.disabled = true;

// listen for key up
document.getElementById('name').addEventListener('keyup', function (event) {
    if (event.target.value === '') {
        letsPlay.disabled = true;
    } else {
        letsPlay.disabled = false;
    }
});