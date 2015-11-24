var test = require('tape')
var conway = require('../conway.js')

test('createBoard', function (t) {
  var length = 5
  var board = conway.createBoard(length)
  t.equal(board.length, length, 'dimension 1 of the array is the length passed into the constructor')
  t.equal(board[0].length, length, 'dimension 2 of the array is the length passed into the constructor')
  t.end()
})

test('nextBoard', function (t) {
  (function () {
    var board = conway.createBoard(10)
    board[0][0] = true
    var newBoard = conway.nextBoard(board)
    t.false(newBoard[0][0], 'Example one is correct')
  })()
  ;(function () {
    var board = conway.createBoard(10)
    board[1][1] = true
    board[1][2] = true
    board[2][1] = true
    board[2][2] = true
    var newBoard = conway.nextBoard(board)
    t.true(newBoard[2][2])
    t.true(newBoard[1][1])
    t.true(newBoard[2][1])
    t.true(newBoard[1][2])
  })()
  ;(function () {
    var board = conway.createBoard(10)
    board[0][0] = true
    board[0][1] = true
    board[1][0] = true
    var newBoard = conway.nextBoard(board)
    t.true(newBoard[1][1])
  })()
  t.end()
})
