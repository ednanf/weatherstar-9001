/**
 * Capitalizes the first letter of each word in a given string.
 * @param {string} [str] - The input string to be capitalized.
 * @returns {string | undefined} - Returns the string with the first letter of each word capitalized, or undefined if the input is null or undefined.
 */
export default function capitalizeFirstLetter(str?: String) {
  if (str) {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
