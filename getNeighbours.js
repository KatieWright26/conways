var Immutable = require('immutable')

var relativeNeighbours = Immutable.List([
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, -1]
])

function neighbourPositions (r, c) {
  console.log(relativeNeighbours)
  return relativeNeighbours.map(function (relativePosition) {
    return [relativePosition[0] + r, relativePosition[1] + c]
  })
}
function getNeighbours (r, c, board) {
  return neighbourPositions(r, c).map(function (neighbour) {
    return board.getIn(neighbour)
  })
}

module.exports = getNeighbours
