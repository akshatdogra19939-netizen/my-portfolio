import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateMagnetOffset,
  calculateMarqueeOffset,
  calculateCharProgressRange,
  calculateCardScale,
} from './math';

test('calculateMagnetOffset returns zero when cursor is outside padding boundary', () => {
  const rect = { left: 100, top: 100, width: 200, height: 200 };
  // Center is (200, 200). Half-width is 100, with padding 150, max distance is 250.
  // A point at x = 500 is 300px away, outside boundary.
  const result = calculateMagnetOffset(500, 200, rect, 150, 3);
  assert.equal(result.isActive, false);
  assert.equal(result.x, 0);
  assert.equal(result.y, 0);
});

test('calculateMagnetOffset calculates correct offset inside boundary', () => {
  const rect = { left: 100, top: 100, width: 200, height: 200 };
  // Center is (200, 200). Point at (230, 260) -> dx = 30, dy = 60.
  // With strength 3: x = 10, y = 20.
  const result = calculateMagnetOffset(230, 260, rect, 150, 3);
  assert.equal(result.isActive, true);
  assert.equal(result.x, 10);
  assert.equal(result.y, 20);
});

test('calculateMarqueeOffset computes expected position based on scroll', () => {
  // (scrollY: 500, sectionTop: 400, innerHeight: 900) * 0.3 = (500 - 400 + 900) * 0.3 = 1000 * 0.3 = 300
  const offset = calculateMarqueeOffset(500, 400, 900, 0.3);
  assert.equal(offset, 300);
});

test('calculateCharProgressRange returns valid 0 to 1 normalized range', () => {
  const rangeFirst = calculateCharProgressRange(0, 10, 0.05);
  assert.equal(rangeFirst.start, 0);
  assert.equal(rangeFirst.end, 0.05);

  const rangeLast = calculateCharProgressRange(9, 10, 0.05);
  assert.equal(rangeLast.end, 1);
  assert(rangeLast.start < rangeLast.end);
});

test('calculateCardScale calculates card stacking scale down', () => {
  // totalCards = 3:
  // index 0 -> 1 - (3 - 1 - 0) * 0.03 = 1 - 2 * 0.03 = 0.94
  // index 1 -> 1 - (3 - 1 - 1) * 0.03 = 1 - 1 * 0.03 = 0.97
  // index 2 -> 1 - (3 - 1 - 2) * 0.03 = 1 - 0 = 1.00
  assert.equal(calculateCardScale(0, 3, 0.03), 0.94);
  assert.equal(calculateCardScale(1, 3, 0.03), 0.97);
  assert.equal(calculateCardScale(2, 3, 0.03), 1);
});
