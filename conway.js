var countAliveNeighbours = require('./countAliveNeighbours')
var nextCellState = require('./nextCellState')
var createBoard = require('./createBoard')

function nextBoard (currentBoard) {
  var nextBoard = createBoard(currentBoard.length)
  for (var i = 0; i < currentBoard.length; i++) {
    for (var j = 0; j < currentBoard.length; j++) {
      var cell = currentBoard[i][j]
      var neighbourCount = countAliveNeighbours(i, j, currentBoard)
      nextBoard[i][j] = nextCellState(cell, neighbourCount)
    }
  }
  return nextBoard
}

exports.nextBoard = nextBoard
