var test = require('tape')
var getNeighbours = require('../getNeighbours')
var createBoard = require('../createBoard')

test('getNeighbours in middle', function (t) {
  var board = createBoard(10)
  var total = 0
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (i === 1 && j === 1) continue
      var rando = Math.random()
      total += rando
      board = board.setIn([ i, j ], rando)
    }
  }
  var neighbours = getNeighbours(1, 1, board)
  t.equal(neighbours.reduce(function (sum, val) { return sum + val }, 0), total)
  t.end()
})
test('getNeighbours in corner', function (t) {
  var board = createBoard(10)
  var total = 0
  for (var i = -1; i < 2; i++) {
    for (var j = -1; j < 2; j++) {
      if (i === 0 && j === 0) continue
      var rando = Math.random()
      total += rando
      board = board.setIn([ i, j ], rando)
    }
  }
  var neighbours = getNeighbours(0, 0, board)
  t.equal(neighbours.reduce(function (sum, val) { return sum + val }, 0), total)
  t.end()
})
