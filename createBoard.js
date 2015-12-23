var nd = require('ndarray')
function createBoard (size) {
  var board = nd(new Uint8Array(size * size), [size, size])
  return board
}
module.exports = createBoard
