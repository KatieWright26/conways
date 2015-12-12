var test = require('tape')
var getNeighbours = require('../getNeighbours')
var createBoard = require('../conway.js').createBoard

test('getNeighbours in corner', function (t) {
  var board = createBoard(10)
  board[0][1] = 3
  board[1][0] = 5
  board[1][1] = 11
  var neighbours = getNeighbours(0, 0, board)
  t.equal(neighbours.reduce(function (sum, val) { return sum + val }, 0), 19)
  t.end()
})
