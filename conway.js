var Immutable = require('immutable')
var countAliveNeighbours = require('./countAliveNeighbours')
var nextCellState = require('./nextCellState')

function createBoard (size) {
  var board = Immutable.List()
  for (var i = 0; i < size; i++) {
    board = board.push(Immutable.List().setSize(size))
  }
  return board
}
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

exports.createBoard = createBoard
exports.nextBoard = nextBoard
