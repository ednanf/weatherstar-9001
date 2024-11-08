/* 
    The parameter has to be optional to accept an undefined value. It will only
    return if it isn't, so it will always work. Error handling will be applied
    as needed.
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
