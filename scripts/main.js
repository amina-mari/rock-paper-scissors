/*  - Inform the user how to play the game 
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


function showRules() {
    alert("Rules:\n \n- Rock beats Scissors \n- Paper beats Rock \n- Scissors beats Paper");
    alert("You will play against the computer")
}

function checkValidOption(option) {
    if (option != null || option != undefined) {
        option = option.toLowerCase()
        if (option == "1" || option == "2" || option == "3" || option == "rock" || option == "paper" || option == "scissors") {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function showComputerOption(computerOption) {
    let arrayOptions = ["Rock", "Paper", "Scissors"];
    alert("Computer choosed " + arrayOptions[computerOption - 1]);
}

function showWinLoseDraw(option, computerOption) {
    if (option == "1" || option == "rock") {
        if (computerOption == 2) {
            alert("Oh no, you lose.")
            computerScore++;
        }
        else if (computerOption == 3) {
            alert("Yay! You won!")
            score++;
        }
        else {
            alert("It's a draw")
            draws++;
        }
    }
    else if (option == "2" || option == "paper") {
        if (computerOption == 1) {
            alert("Yay! You won!")
            score++;
        }
        else if (computerOption == 3) {
            alert("Oh no, you lose.")
            computerScore++;
        }
        else {
            alert("It's a draw")
            draws++;
        }
    }
    else {
        if (computerOption == 1) {
            alert("Oh no, you lose.")
            computerScore++;
        }
        else if (computerOption == 2) {
            alert("Yay! You won!")
            score++;
        }
        else {
            alert("It's  a draw")
            draws++;
        }
    }
}

function showScores() {
    alert("You played " + matchNumber + " matches" + "\nYour final score was: " + score +
        "\nThe final computer score was: " + computerScore + "\nYou had " + draws + " draws");
    score = 0;
    computerScore = 0;
    matchNumber = 0;
    draws = 0;
}

let matchNumber = 0;
let score = 0;
let computerScore = 0;
let draws = 0;

function rockPaperScissors() {
    alert("This is the Game Rock Papers Scissors");
    showRules();
    let option = prompt("Choose your option (no matter capitalization): \n- 1 or \"Rock\" to Rock \n- 2 or \"Paper\" to Paper \n- 3 or \"Scissors\" to Scissors");

    if (checkValidOption(option)) {
        matchNumber++;
        
        let computerOption = parseInt((Math.random() * 2).toFixed(0)) + 1;

        showComputerOption(computerOption);
        showWinLoseDraw(option, computerOption);

        if (confirm("Wanna play again?")) {
            rockPaperScissors();
        } else {
            showScores();
        }
    } else {
        alert("You need to enter a valid option.")
    }
}
