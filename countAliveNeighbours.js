var getNeighbours = require('./getNeighbours')
function countAliveNeighbours (r, c, board) {
  var neighbours = getNeighbours(r, c, board)
  return neighbours.filter(function (cell) { return cell }).count()
}

module.exports = countAliveNeighbours
