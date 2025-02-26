/**
 * Converts a distance in meters to miles if it's greater than 1609.34 meters (1 mile).
 *
 * @param {number} distance - The distance to convert.
 * @returns {string} The converted distance in miles or the original distance in feet if it's less than or equal to 1609.34 meters.
 */
export const useConvertToMiles = (distance: number): string => {
  const metersToMiles = 1609.34;
  if (distance > metersToMiles) {
    return `${(distance / metersToMiles).toFixed(2)}mi`;
  } else {
    return `${(distance * 3.28084).toFixed(2)}ft`;
  }
};

/**
 * Converts a speed in meters per second to miles per hour.
 *
 * @param {number} speed - The speed to convert.
 * @returns {string} The converted speed in miles per hour.
 */
export const useConvertToMph = (speed: number): string => {
  const metersPerSecondToMph = 2.23694;
  return `${(speed * metersPerSecondToMph).toFixed(2)}mph`;
};

/**
 * Converts a temperature in Celsius to Fahrenheit.
 *
 * @param {number} temperature - The temperature to convert.
 * @returns {string} The converted temperature in Fahrenheit.
 */
export const useConvertToFahrenheit = (temperature: number): string => {
  return `${((temperature * 9) / 5 + 32).toFixed(2)}°F`;
};
