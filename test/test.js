/* eslint-env mocha */

'use strict';

const assert = require('assert');
const coordinates2tile = require('../src/index');

describe('long2tile', () => {
  it('should return number when the value is present', () => {
    assert(coordinates2tile.long2tile(139.76713241608934, 16) === 58211);
  });
});

describe('lat2tile', () => {
  it('should return number when the value is present', () => {
    assert(coordinates2tile.lat2tile(35.68082367164773, 16) === 25806);
  });
});
