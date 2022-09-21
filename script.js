
const board = [null, null, null, null, null, null, null, null, null];
const Game = (() => {
    const O_text = "O";
    const X_text = "X";
    let currentPlayer = O_text;
    const playText = document.querySelector('.playtext');
    const restartBtn = document.querySelector('#restartBtn')
    const boxes = document.querySelectorAll('.box');

    const players = (name) => {
        return {name}
    }
    
    const playGame = () => {
        boxes.forEach((box) => {
            box.addEventListener('click', boxClicked)
        })
    }
    const boxClicked = (e) => {
        const id = e.target.id;
        if (!board[id]) {
            board[id] = currentPlayer;
            e.target.innerText = currentPlayer;
            if (playerHasWon(currentPlayer)) {
                playText.innerText = `${currentPlayer} has won!`;
                return;

            }
            currentPlayer = currentPlayer === O_text ? X_text : O_text;
        }
    }

    const playerHasWon = (player) => {
        if (board[0] === player) {
            if (board[1] === player && board[2] === player) {
              console.log(`${player} wins up top`);
              return true;
            }
            if (board[3] === player && board[6] === player) {
              console.log(`${player} wins on the left`);
              return true;
            }
            if (board[4] === player && board[8] === player) {
              console.log(`${player} wins on the diagonal`);
              return true;
            }
        }
        if (board[8] === player) {
            if (board[2] === player && board[5] === player) {
            console.log(`${player} wins on the right`);
            return true;
            }
            if (board[7] === player && board[6] === player) {
            console.log(`${player} wins on the bottom`);
            return true;
            }
        }
        if (board[4] === player) {
            if (board[3] === player && board[5] === player) {
              console.log(`${player} wins on the middle horizontal`);
              return true;
            }
            if (board[1] === player && board[7] === player) {
              console.log(`${player} wins on the middle vertical`);
              return true;
            }
          }
    };

    const restart = () => {
        board.forEach((box, index) => {
            board[index] = null;
        })
        boxes.forEach(box => {
            box.innerText = '';
        })
        playText.innerText = 'Play a Game!'
        currentPlayer = O_text;
    }

    restartBtn.addEventListener('click', restart);

    return {board, playGame, players, restart}
})();


Game.playGame();