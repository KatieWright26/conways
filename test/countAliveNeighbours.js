var test = require('tape')

var countAliveNeighbours = require('../countAliveNeighbours')
var createBoard = require('../conway').createBoard
test('countAliveNeighbours', function (t) {
  var board = createBoard(5)
  board = board.setIn([0, 0], true)
  board = board.setIn([0, 1], true)
  board = board.setIn([0, 2], true)
  board = board.setIn([1, 0], true)
  board = board.setIn([2, 0], true)
  board = board.setIn([2, 1], true)
  board = board.setIn([2, 2], true)
  board = board.setIn([1, 2], true)
  board = board.setIn([1, 1], true)
  t.equal(countAliveNeighbours(1, 1, board), 8)
  t.equal(countAliveNeighbours(0, 0, board), 3)
  t.end()
})
