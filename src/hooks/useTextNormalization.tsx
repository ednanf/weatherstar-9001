export default function removeAccents(word: String) {
  return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
