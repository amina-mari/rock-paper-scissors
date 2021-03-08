/*  - Inform the user how to play the game 
    - Ask if the user want to play
        - If the user want to play
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
        - Else, end the program.
*/


let matchNumber = 0;
let score = 0;

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

function showComputerOption(computerOption, optionsArray) {
    alert("Computer choosed " + optionsArray[computerOption - 1]);
}

function showWinLoseDraw(option, computerOption) {
    if (option == "1" || option == "rock") {
        if (computerOption == 2) {
            alert("Oh no, you lose.")
        }
        else if (computerOption == 3) {
            alert("Yay! You won!")
        }
        else {
            alert("It's a draw")
        }
    }
    else if (option == "2" || option == "paper") {
        if (computerOption == 1) {
            alert("Yay! You won!")
        }
        else if (computerOption == 3) {
            alert("Oh no, you lose.")
        }
        else {
            alert("It's a draw")
        }
    }
    else {
        if (computerOption == 1) {
            alert("Oh no, you lose.")
        }
        else if (computerOption == 2) {
            alert("Yay! You won!")
        }
        else {
            alert("It's  a draw")
        }
    }
}


function rockPaperScissors() {
    let arrayOptions = ["Rock", "Paper", "Scissors"];
    alert("This is the Game Rock Papers Scissors");
    if (confirm("Do you wanna play?")) {
        showRules();
        let option = prompt("Choose your option (no matter capitalization): \n- 1 or \"Rock\" to Rock \n- 2 or \"Paper\" to Paper \n- 3 or \"Scissors\" to Scissors");

        if (checkValidOption(option)) {

            let computerOption = parseInt((Math.random() * 2).toFixed(0)) + 1;
            
            showComputerOption(computerOption, arrayOptions);

            showWinLoseDraw(option, computerOption);
        } else {
            alert("You need to enter a valid option.")
        }

    } else {
        alert("No problem, have a good day!")
    }
}
