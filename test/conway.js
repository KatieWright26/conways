var test = require('tape')
var conway = require('../conway.js')

test('createBoard', function (t) {
  var length = 5
  var board = conway.createBoard(length)
  t.equal(board.count(), length, 'dimension 1 of the array is the length passed into the constructor')
  t.equal(board.get(0).count(), length, 'dimension 2 of the array is the length passed into the constructor')
  t.end()
})

test('nextBoard', function (t) {
  (function () {
    var board = conway.createBoard(10).setIn([0, 0], false)
    var newBoard = conway.nextBoard(board)
    t.false(newBoard.getIn([0, 0]), 'Example one is correct')
  })()
  ;(function () {
    var board = conway.createBoard(10)
    board = board.setIn([1, 1], true)
    board = board.setIn([1, 2], true)
    board = board.setIn([2, 1], true)
    board = board.setIn([2, 2], true)
    var newBoard = conway.nextBoard(board)
    t.true(newBoard.getIn([2, 2]), 'Example two is correct')
    t.true(newBoard.getIn([1, 1]), 'Example two is correct')
    t.true(newBoard.getIn([2, 1]), 'Example two is correct')
    t.true(newBoard.getIn([1, 2]), 'Example two is correct')
  })()
  ;(function () {
    var board = conway.createBoard(10)
    board = board.setIn([0, 0], true)
    board = board.setIn([0, 1], true)
    board = board.setIn([1, 0], true)
    var newBoard = conway.nextBoard(board)
    t.true(newBoard.getIn([1, 1]), 'Example three is correct')
  })()
  t.end()
})
