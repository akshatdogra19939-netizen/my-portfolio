/**
 * Pure helper functions for calculations in Akshat 3D Creator portfolio
 */

/**
 * Calculates mouse magnet offset when cursor is within element bounds + padding.
 * Returns { x, y, isActive }.
 */
export function calculateMagnetOffset(
  clientX: number,
  clientY: number,
  rect: { left: number; top: number; width: number; height: number },
  padding: number = 150,
  strength: number = 3
): { x: number; y: number; isActive: boolean } {
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const dx = clientX - centerX;
  const dy = clientY - centerY;

  const maxDistX = rect.width / 2 + padding;
  const maxDistY = rect.height / 2 + padding;

  const isWithin = Math.abs(dx) <= maxDistX && Math.abs(dy) <= maxDistY;

  if (!isWithin) {
    return { x: 0, y: 0, isActive: false };
  }

  return {
    x: dx / strength,
    y: dy / strength,
    isActive: true,
  };
}

/**
 * Calculates marquee scroll offset based on scroll position and section position:
 * offset = (scrollY - sectionTop + innerHeight) * 0.3
 */
export function calculateMarqueeOffset(
  scrollY: number,
  sectionTop: number,
  innerHeight: number,
  factor: number = 0.3
): number {
  return (scrollY - sectionTop + innerHeight) * factor;
}

/**
 * Calculates start and end progress thresholds for character-by-character scroll reveal.
 * Total characters N, index i: character lights up gradually between start and end.
 */
export function calculateCharProgressRange(
  index: number,
  totalChars: number,
  windowSpread: number = 0.05
): { start: number; end: number } {
  if (totalChars <= 1) return { start: 0, end: 1 };
  const step = (1 - windowSpread) / (totalChars - 1);
  const start = index * step;
  const end = Math.min(1, start + windowSpread);
  return { start, end };
}

/**
 * Calculates target card scale for sticky card stacking:
 * targetScale = 1 - (totalCards - 1 - index) * 0.03
 */
export function calculateCardScale(
  index: number,
  totalCards: number,
  scaleStep: number = 0.03
): number {
  return 1 - (totalCards - 1 - index) * scaleStep;
}
