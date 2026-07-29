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

const playerOne = createPlayer("Player One", "X");
const playerTwo = createPlayer("Player Two", "O");