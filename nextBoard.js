var countAliveNeighbours = require('./countAliveNeighbours')
var createBoard = require('./createBoard')
var nextCellState = require('./nextCellState')

function nextBoard (currentBoard) {
  var nextBoard = createBoard(currentBoard.count())
  for (var i = 0; i < currentBoard.count(); i++) {
    for (var j = 0; j < currentBoard.count(); j++) {
      var cell = currentBoard.getIn([i, j])
      var neighbourCount = countAliveNeighbours(i, j, currentBoard)
      var nextCell = nextCellState(cell, neighbourCount)
      nextBoard = nextBoard.setIn([i, j], nextCell)
    }
  }
  return nextBoard
}

module.exports = nextBoard
