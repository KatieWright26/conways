var test = require('tape');
var overPopulated = require('../overPopulated')

test('#should return true with cell count > 3', function (t) {
  t.plan(1)
  t.true(overPopulated(4))
})

test('#should return true with cell count < 4', function (t) {
  t.plan(1)
  t.false(overPopulated(3))
})
