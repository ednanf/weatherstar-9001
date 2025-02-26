enum CardinalDirection {
  N = 'N',
  NE = 'NE',
  E = 'E',
  SE = 'SE',
  S = 'S',
  SW = 'SW',
  W = 'W',
  NW = 'NW',
}

const directions: CardinalDirection[] = [
  CardinalDirection.N,
  CardinalDirection.NE,
  CardinalDirection.E,
  CardinalDirection.SE,
  CardinalDirection.S,
  CardinalDirection.SW,
  CardinalDirection.W,
  CardinalDirection.NW,
];

/**
 * Converts a degree value to a cardinal direction.
 *
 * @param {number} number - The angle in degrees (0-360).
 * @returns {CardinalDirection} The corresponding cardinal direction (N, NE, E, SE, S, SW, W, NW).
 */
const useDegreesToDirection = (number: number): CardinalDirection => {
  const index = Math.round((number % 360) / 45) % 8;
  return directions[index];
};

export default useDegreesToDirection;
