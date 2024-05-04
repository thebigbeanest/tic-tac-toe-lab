//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.



/*-------------------------------- Constants --------------------------------*/
const resetBtnEl = document.querySelector('#reset')
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5,],
    [6, 7, 8,],
    [0, 3, 6,],
    [2, 5, 8],
    [1, 4, 7,],
    [0, 4, 8],
    [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
let board= [];
let turn = "X";
let winner = false;
let tie = false;


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
    document.querySelector('body').addEventListener("load", init());

function init() {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = "X";
    winner = false;
    tie = false;
    console.log("it loaded");
    console.log(board);
    console.log(messageEl);
    console.log(squareEls);
    console.log(turn);
    console.log(winner);
    console.log(tie);
    render();
}
function render() {
    updateBoard();
    updateMessage();
}
function updateBoard() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerText= board[i];
        console.log(document.getElementById(i).innerText);
    }
}
function updateMessage() {
    if (winner == false && tie == false) {
        messageEl.innerText = `It is player ${turn}'s turn`
    } else if (winner == false && tie == true) {
        messageEl.innerText = `It's a tie!`
    } else {
        messageEl.innerText = `Player ${turn} is the winner!`
    }
}
function checkForWinner() {
    winningCombos.forEach((combo) => {
        console.log(`combos are ${combo[0]} ${combo[1]} ${combo[2]}`)
        if (board[combo[0]] != "" && board[combo[0]] == board[combo[1]] && board[combo[1]] == board[combo[2]]) {
            winner = true
        }
    })
}
function checkForTie() {
    if (winner == true) {return}
    let counter = 0
    board.forEach((index) => {
        if (index == '') {
            return
        } else {
            counter++
        }
    })
    if (counter == 9) {
        tie = true
    }

}
/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('body').addEventListener("load", init());

resetBtnEl.addEventListener("click", init);




squareEls.forEach(function(square) {
    square.addEventListener('click', function() {
        if (square.innerText == "X" || square.innerText == "O") {
            return
        } else {
            square.innerText = turn
        }
        let index = parseInt(square.getAttribute('id'))
        board[index] = turn
        checkForWinner()
        checkForTie()
        updateMessage()
        if (winner == true) {return}
        // console.log(board)
        if (turn == "X") {
            turn = "O"
        } else if (turn == "O" ) {
            turn = "X"
        } else {
            turn = "error"
        }
        updateMessage()
    });
});


/*----------------------------- Console Log ----------------------------------*/

// I WORKED ON THIS ASSIGNMENT WITH WILL ISENBERG










