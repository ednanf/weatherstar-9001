/**
 * Removes accents from a given word by converting it to its decomposed form and then removing diacritical marks.
 * @param {string} word - The input string that may contain accents.
 * @returns {string} A normalized version of the input string with accents removed.
 */
export default function removeAccents(word: string): string {
  return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
