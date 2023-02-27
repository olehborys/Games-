const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

squares.forEach(square => {
  square.addEventListener('click', handleClick);
});

function handleClick(event) {
  const square = event.target;
  if (square.textContent !== '') {
    return;
  }
  square.textContent = currentPlayer;
  if (checkForWin()) {
    alert(currentPlayer + ' wins!');
    resetBoard();
  } else if (checkForDraw()) {
    alert('It is a draw!');
    resetBoard();
  } else {
    switchPlayer();
  }
}

function checkForWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winConditions.some(condition => {
    return condition.every(index => {
      return squares[index].textContent === currentPlayer;
    });
  });
}

function checkForDraw() {
  return [...squares].every(square => {
    return square.textContent !== '';
  });
}

function resetBoard() {
  squares.forEach(square => {
    square.textContent = '';
  });
  currentPlayer = 'X';
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
