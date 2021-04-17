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
                 

            
- Inform the user how to play the game 
    - Ask the user to enter rock, paper or scissors
        - If the user enter a valid option
            - Add 1 to number of matches
            - Make a random choice to beat the user choice
            - Show the result
                - If the user wins, add 1 to the score
            - Ask if the user want to play again
                - If the user want, go back to line 2
                - If not, show score and end the program    
        - Else, ask the user to enter a valid option and go back to line 3
*/


// function showComputerOption(computerOption) {
//     let arrayOptions = ["Rock", "Paper", "Scissors"];
//     alert("Computer choosed " + arrayOptions[computerOption - 1]);
// }

function showWinLoseDraw(option, computerOption) {
    
    if (option == 1) {
        if (computerOption == 2) {
            paraResult.textContent = 'Oh no, you lose';
            //alert("Oh no, you lose.")
            computerScore++;
        }
        else if (computerOption == 3) {
            paraResult.textContent = 'Yay! You won!';
            //alert("Yay! You won!")
            score++;
        }
        else {
            paraResult.textContent = 'It\'s a draw';
            //alert("It's a draw")
            draws++;
        }
    }
    else if (option == 2) {
        if (computerOption == 1) {
            paraResult.textContent = 'Yay! You won!';
            //alert("Yay! You won!")
            score++;
        }
        else if (computerOption == 3) {
            paraResult.textContent = 'Oh no, you lose';
            //alert("Oh no, you lose.")
            computerScore++;
        }
        else {
            paraResult.textContent = 'It\'s a draw';
            //alert("It's a draw")
            draws++;
        }
    }
    else {
        if (computerOption == 1) {
            paraResult.textContent = 'Oh no, you lose';
            //alert("Oh no, you lose.")
            computerScore++;
        }
        else if (computerOption == 2) {
            paraResult.textContent = 'Yay! You won!';
            //alert("Yay! You won!")
            score++;
        }
        else {
            paraResult.textContent = 'It\'s a draw';
            //alert("It's  a draw")
            draws++;
        }
    }
    matchResult.appendChild(paraResult);
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
