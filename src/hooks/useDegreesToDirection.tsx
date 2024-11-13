const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

/**
 * Converts a degree value to a cardinal direction.

 * @param {number} number - The angle in degrees (0-360).
 * @returns {string} The corresponding cardinal direction (N, NE, E, SE, S, SW, W, NW).
 */
const useDegreesToDirection = (number: number): string => {
  const index = Math.round((number % 360) / 45);
  return directions[index];
};

export default useDegreesToDirection;
