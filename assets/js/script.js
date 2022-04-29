// main page
let letsPlay = document.getElementById('button');
let welcomePage = document.getElementById('welcome-page');
let gamePage = document.getElementById('game-page')

// click events for lets play button
letsPlay.addEventListener('click', showGamePage);
letsPlay.addEventListener('click', showfullName);
letsPlay.addEventListener('click', timer);

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
// submit.addEventListener('click', getNumber);

// let randomNum = Math.floor(Math.random() * 20);

let count = 0;
let negCount = 5;

let randomNum = Math.floor(Math.random() * 20 + 1);
console.log(randomNum)

let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', function guessNum(event){
        number.setAttribute('style', 'background-color:red');
        document.getElementById('numInput').innerHTML = event.target.innerHTML;
        let numInput = Number(document.getElementById('numInput').innerHTML)
        console.log(numInput)
        
        let name = document.getElementById('name').value;

        // let x = parseFloat(document.getElementById('numInput'))
        // console.log(x);
        if (numInput === randomNum){
            document.getElementById('win').innerHTML = `congratulations! ${name}</br> you won the game.`;
            // hide number buttons
            document.getElementById('numberSubmit').style.display = 'none';
            // hide the timer 
            document.getElementById('timer').style.display = 'none';
            // hide this div if game wins
             document.getElementById('hide').style.display = 'none';

        }else if (numInput < randomNum){
            document.getElementById('showUserNum').innerHTML = `almost there ${name}, go up a bit more!! `;
            document.getElementById('showUserNum').style. color = 'green'

        }else {
            document.getElementById('showUserNum').innerHTML = `getting there ${name}, go down a bit more!!`;
            document.getElementById('showUserNum').style. color = 'brown'

        }

        count ++;
        negCount --;
        document.getElementById('submitted').innerHTML = ` ${count} times`;
        document.getElementById('chance-left').innerHTML = ` ${negCount} times`;
    
        if (count === 5) {
            document.getElementById('numberSubmit').remove();
            document.getElementById('win').innerHTML = `oppss... ${name}</br> you lost the game. </br>The secret number was ${randomNum}`;
            // hide this div if game lost
            document.getElementById('hide').style.display = 'none';
            // hide the timer 
            document.getElementById('timer').style.display = 'none';
            // hide this div
            document.getElementById('showUserNum').style.display = 'none'

    
        }
        
    })
    
    
})


// function getNumber() {
//     let input = Number(document.getElementById('user-input').value);

//     // cursor stays on the input value
//     document.getElementById('user-input').focus();

//     // always give empty string on the user input
//     document.getElementById('user-input').value = '';

//     let submit = document.getElementById('submit')

//     let name = document.getElementById('name').value;

//     if(input === randomNum) {
//         submit.remove();
//         document.getElementById('win').innerHTML = `congratulations! ${name}</br> you won the game.`;
//         // hide this div if game wins
//         document.getElementById('hide').style.display = 'none';
//         // hide the timer 
//         document.getElementById('timer').style.display = 'none';

//     }else if(input < randomNum) {
//         document.getElementById('hint').innerHTML = `almost there ${name}, go up a bit more!! `;
//         document.getElementById('hint').style. color = 'green'
//     } else {
//         document.getElementById('hint').innerHTML = `getting there ${name}, go down a bit more!!`;
//         document.getElementById('hint').style. color = 'brown'

//     }
//     count ++;
//     negCount --;
//     document.getElementById('submitted').innerHTML = ` ${count} times`;
//     document.getElementById('chance-left').innerHTML = ` ${negCount} times`;

//     if (count === 5) {
//         submit.remove();
//         document.getElementById('win').innerHTML = `oppss... ${name}</br> you lost the game. </br>The secret number was ${randomNum}`;
//         // hide this div if game lost
//         document.getElementById('hide').style.display = 'none';
//         // hide the timer 
//         document.getElementById('timer').style.display = 'none';

//     }
// }

// enter key function to user-input and submit button
// document.getElementById('user-input').addEventListener('keydown', function(event) {
//     if(event.key === 'Enter') {
//         getNumber();
//     }
// })

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
let timeleft = 29;
function timer(){
    let name = document.getElementById('name').value;
    let getTimer = setInterval(function(){
    if(timeleft === 0){
        clearInterval(getTimer);
        document.getElementById("timer").innerHTML = "Time's Up";
        // submit.remove();
        document.getElementById('numberSubmit').style.display = 'none';

        document.getElementById('win').innerHTML = `Uh-Ahh!!! ${name} </br> please try again`;
        document.getElementById('hide').style.display = 'none';
    } else {
        document.getElementById("timer").innerHTML = timeleft + " seconds ";
    }
    timeleft -= 1;
}, 1000);
}

// disable lets play button initially
letsPlay.disabled = true;

// listen for key up
document.getElementById('name').addEventListener('keyup', function(event) {
    if (event.target.value === '') {
        letsPlay.disabled = true;
    } else {
        letsPlay.disabled = false;
    }
})

// disable submit button if nothing is entered
// document.getElementById('submit').disabled = true;

// listen for key up to enable button

// document.getElementById('user-input').addEventListener('keyup', function(event){
//     if (event.target.value === 0){
//     document.getElementById('submit').disabled = true;
//     } else {
//     document.getElementById('submit').disabled = false;

//     }
// })
