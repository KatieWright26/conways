var countAliveNeighbours = require('./countAliveNeighbours')
var nextCellState = require('./nextCellState')

function nextBoard (currentBoard) {
  return currentBoard.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      var neighbourCount = countAliveNeighbours(rowIndex, cellIndex, currentBoard)
      return nextCellState(cell, neighbourCount)
    })
  })
}

module.exports = nextBoard
