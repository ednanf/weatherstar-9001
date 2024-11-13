/**
 * Converts a numerical weather condition code to its corresponding textual description.
 * @param {number} code - The numerical code representing the weather condition.
 * @returns {string} A string describing the weather condition, or undefined if the code is not recognized.
 */
export default function useConditionCode(code: number): string {
  switch (code) {
    case 0:
      return 'clear sky';
    case 1:
      return 'mainly clear';
    case 2:
      return 'partly cloudy';
    case 3:
      return 'overcast';
    case 45:
      return 'fog';
    case 48:
      return 'fog';
    case 51:
      return 'light drizzle';
    case 53:
      return 'drizzle';
    case 55:
      return 'heavy drizzle';
    case 56:
      return 'freezing drizzle';
    case 57:
      return 'freezing drizzle';
    case 61:
      return 'light rain';
    case 63:
      return 'rain';
    case 65:
      return 'heavy rain';
    case 66:
      return 'freezing rain';
    case 67:
      return 'freezing rain';
    case 71:
      return 'light snow';
    case 73:
      return 'snow';
    case 75:
      return 'heavy snow';
    case 77:
      return 'snow grains';
    case 80:
      return 'light showers';
    case 81:
      return 'showers';
    case 82:
      return 'heavy showers';
    case 85:
      return 'snow showers';
    case 86:
      return 'snow showers';
    case 95:
      return 'thunderstorm';
    case 96:
      return 'thunderstrom';
    default:
      return 'error';
  }
}
