var Immutable = require('immutable')

var relativeNeighbours = Immutable.List([
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
])

function neighbourPositions (r, c) {
  return relativeNeighbours.map(function (relativeNeighbour) {
    return [relativeNeighbour[0] + r, relativeNeighbour[1] + c]
  })
}
function getNeighbours (r, c, board) {
  return neighbourPositions(r, c).map(function (neighbourPosition) {
    return board.getIn(neighbourPosition)
  })
}

module.exports = getNeighbours
