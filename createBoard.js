var Immutable = require('immutable')

function createBoard (size) {
  var board = Immutable.List()
  for (var i = 0; i < size; i++) {
    board = board.push(Immutable.List().setSize(size))
  }
  return board
}
module.exports = createBoard
