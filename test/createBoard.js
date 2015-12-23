var test = require('tape')
var createBoard = require('../createBoard')

test('createBoard', function (t) {
  var length = 5
  var board = createBoard(length)
  var shape = board.shape
  t.plan(2)
  t.equal(shape[0], length, 'dimension 1 of the array is the length passed into the constructor')
  t.equal(shape[1], length, 'dimension 1 of the array is the length passed into the constructor')
})
