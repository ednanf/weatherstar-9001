// TODO: ensure the conversion will only happen if the distance is greater than 1km

/**
 * Converts a number to kilometers if it's greater than 1000.

 * @param {number} number - The number to convert.
 * @returns {number} The converted number in kilometers or the original number if it's less than or equal to 1000.
 */
export const useConvertToKm = (number: number) => {
  if (number > 1000) {
    return `${number / 1000}km`;
  } else {
    return `${number}m`;
  }
};
