const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


const Gameboard = (() => {
    let board = ["","","","","","","","",""];

    const getBoard = () => board;

    const placeMarker = (index, marker) => {
        if (board[index] !== "") return false;
        board[index] = marker;
        return true;
    };
    const resetBoard = () => {
        board = ["","","","","","","","",""];
    };
    return {
        getBoard,
        placeMarker,
        resetBoard,
    };
})();

function createPlayer (name, marker) {
    return {
        name,
        marker,
    };
};



const GameController = (() => {
    const playerOne = createPlayer("Player One", "X");
    const playerTwo = createPlayer("Player Two", "O");

    let activePlayer = playerOne;
    let gameOver = false;

    const getActivePlayer = () => activePlayer;

    // turn switching
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
    };
    //play round
    const playRound = (index) => {
        if (gameOver) return;


        const moveIsSuccess = Gameboard.placeMarker(index, activePlayer.marker);

        if (!moveIsSuccess) return;

        // check if active player has won
        const isWinner = () => {
            const board = Gameboard.getBoard();

            return winningLines.some((line) => {
                return line.every((index) => {
                    return board[index] === activePlayer.marker;
                });
            });
        };

        switchPlayerTurn();
    };

    return {
        playRound,
        getActivePlayer,
    };
})();
