var test = require('tape')
var createBoard = require('../createBoard')

test('createBoard', function (t) {
  var length = 5
  var board = createBoard(length)
  t.plan(2)
  t.equal(board.count(), length, 'dimension 1 of the array is the length passed into the constructor')
  t.equal(board.get(0).count(), length, 'dimension 2 of the array is the length passed into the constructor')
})
