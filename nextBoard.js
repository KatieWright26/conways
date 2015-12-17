var countAliveNeighbours = require('./countAliveNeighbours')
var nextCellState = require('./nextCellState')

function nextBoard (currentBoard) {
  return currentBoard.map(function (row, rowIndex) {
    return row.map(function (cell, cellIndex) {
      var neighbourCount = countAliveNeighbours(rowIndex, cellIndex, currentBoard)
      return nextCellState(cell, neighbourCount)
    })
  })
}

module.exports = nextBoard
