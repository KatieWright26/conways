var Immutable = require('immutable')

function getNeighbours (r, c, board) {
  var neighbours = Immutable.List()
  for (var i = -1; i < 2; i++) {
    for (var j = -1; j < 2; j++) {
      var _r = r + i
      var _c = c + j
      if (i === 0 && j === 0) {
        continue
      }
      neighbours = neighbours.push(board.getIn([_r, _c]))
    }
  }
  return neighbours
}
module.exports = getNeighbours
