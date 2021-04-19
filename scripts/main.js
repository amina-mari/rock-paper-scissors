/*  
    - Wait for button press
        - If button is pressed
            - Add 1 to number of matches
            - Make a random choice to beat the user choice
            - Show the result in a new div
                - If the user wins, add 1 to the score
                - If the user draws, add 1 to draws
                - If the user loses, add 1 to loses
            - Ask if the user want to play again
                - If it is true, go back to line 2
                 
    Future Tasks: 
        - Translate to Portuguese
        - Add Multiplayer Mode
*/


// function showComputerOption(computerOption) {
//     let arrayOptions = ["Rock", "Paper", "Scissors"];
//     alert("Computer choosed " + arrayOptions[computerOption - 1]);
// }

function showWinLoseDraw(option, computerOption) {
    
    if (option == 1) {
        figcaptionUserChoice.textContent = "Rock";
        imgUserChoice.setAttribute('src', "images/icons8-rock-80.png");
        if (computerOption == 2) {
            figcaptionCPUChoice.textContent = "Paper";
            imgCPUChoice.setAttribute('src', "images/icons8-paper-64.png");
            paraResult.textContent = 'Oh no, you lose';
            computerScore++;
        }
        else if (computerOption == 3) {
            figcaptionCPUChoice.textContent = "Scissors";
            imgCPUChoice.setAttribute('src', "images/icons8-cutting-96.png");
            paraResult.textContent = 'Yay! You won!';
            score++;
        }
        else {
            figcaptionCPUChoice.textContent = "Rock";
            imgCPUChoice.setAttribute('src', "images/icons8-rock-80.png");
            paraResult.textContent = 'It\'s a draw';
            draws++;
        }
    }
    else if (option == 2) {
        figcaptionUserChoice.textContent = "Paper";
        imgUserChoice.setAttribute('src', "images/icons8-paper-64.png");
        if (computerOption == 1) {
            figcaptionCPUChoice.textContent = "Rock";
            imgCPUChoice.setAttribute('src', "images/icons8-rock-80.png");
            paraResult.textContent = 'Yay! You won!';
            score++;
        }
        else if (computerOption == 3) {
            figcaptionCPUChoice.textContent = "Scissors";
            imgCPUChoice.setAttribute('src', "images/icons8-cutting-96.png");
            paraResult.textContent = 'Oh no, you lose';
            computerScore++;
        }
        else {
            figcaptionCPUChoice.textContent = "Paper";
            imgCPUChoice.setAttribute('src', "images/icons8-paper-64.png");
            paraResult.textContent = 'It\'s a draw';
            draws++;
        }
    }
    else {
        figcaptionUserChoice.textContent = "Scissors";
        imgUserChoice.setAttribute('src', "images/icons8-cutting-96.png");
        if (computerOption == 1) {
            figcaptionCPUChoice.textContent = "Rock";
            imgCPUChoice.setAttribute('src', "images/icons8-rock-80.png");
            paraResult.textContent = 'Oh no, you lose';
            computerScore++;
        }
        else if (computerOption == 2) {
            figcaptionCPUChoice.textContent = "Paper";
            imgCPUChoice.setAttribute('src', "images/icons8-paper-64.png");
            paraResult.textContent = 'Yay! You won!';
            score++;
        }
        else {
            figcaptionCPUChoice.textContent = "Scissors";
            imgCPUChoice.setAttribute('src', "images/icons8-cutting-96.png");
            paraResult.textContent = 'It\'s a draw';
            draws++;
        }
    }
    divGame.appendChild(matchResult);
}

// function showScores() {
//     alert("You played " + matchNumber + " matches" + "\nYour final score was: " + score +
//         "\nThe final computer score was: " + computerScore + "\nYou had " + draws + " draws");
//     score = 0;
//     computerScore = 0;
//     matchNumber = 0;
//     draws = 0;
// }

let matchNumber = 0;
let score = 0;
let computerScore = 0;
let draws = 0;

// Div to show match result

let divGame = document.querySelector(".game");
let matchResult = document.createElement("div");
matchResult.classList.add("game__result");

let paraResult = document.createElement('p');

let closeButton = document.createElement('button');
let closeImg = document.createElement("img")
closeImg.setAttribute('src', 'images/close.png');
closeButton.appendChild(closeImg);

let divUserChoice = document.createElement('div');
let paraUserChoice = document.createElement('p');
paraUserChoice.textContent = "User Choice";
divUserChoice.appendChild(paraUserChoice);


let figUserChoice = document.createElement('figure');
let imgUserChoice = document.createElement('img');
let figcaptionUserChoice = document.createElement('figcaption');
figUserChoice.appendChild(imgUserChoice);
figUserChoice.appendChild(figcaptionUserChoice);

divUserChoice.appendChild(figUserChoice);


/* img src and figcaption textContent is setted in the showWinLoseDraw function */

let divCPUChoice = document.createElement('div');
let paraCPUChoice = document.createElement('p');
paraCPUChoice.textContent = "Computer Choice";
divCPUChoice.appendChild(paraCPUChoice);

let figCPUChoice = document.createElement('figure');
let imgCPUChoice = document.createElement('img');
let figcaptionCPUChoice = document.createElement('figcaption');
figCPUChoice.appendChild(imgCPUChoice);
figCPUChoice.appendChild(figcaptionCPUChoice);

divCPUChoice.appendChild(figCPUChoice);

let paraVersus = document.createElement('p');
paraVersus.classList.add('versus')
paraVersus.textContent = "VS";

matchResult.appendChild(paraResult);
matchResult.appendChild(divUserChoice);
matchResult.appendChild(paraVersus);
matchResult.appendChild(divCPUChoice);

/*
<div>
    <p>User Choice</p>
    <figure>
        <img>
        <figcation></figcaption>
    </figure>
</div>

<p>VS</p>

<div>
    <p>Computer Choice</p>
    <figure>
        <img>
        <figcation></figcaption>
    </figure>
</div>
*/

matchResult.appendChild(closeButton)

// Event listener to close matchResult

closeButton.addEventListener('click', function(event){
    event.currentTarget.parentNode.classList.add('game__result--closed');
})

let buttons = document.querySelectorAll('.game__button')
 
buttons.forEach(button => button.addEventListener('mousedown', rockPaperScissors, {capture:true}));

function rockPaperScissors(event) {
    matchNumber++;
    let buttonPressed = event.currentTarget;
    let option = buttonPressed.getAttribute('data-option');
    let computerOption = parseInt((Math.random() * 2).toFixed(0)) + 1;
    if(matchResult.classList.contains('game__result--closed')){
        matchResult.classList.remove("game__result--closed")
    }
    showWinLoseDraw(option, computerOption);


    // if (checkValidOption(option)) {
    //     matchNumber++;
    

    //     showComputerOption(computerOption);
    //     showWinLoseDraw(option, computerOption);

    //     if (confirm("Wanna play again?")) {
        //         rockPaperScissors();
    //     } else {
    //         showScores();
    //     }
    // } else {
    //     alert("You need to enter a valid option.")
    // }
}
