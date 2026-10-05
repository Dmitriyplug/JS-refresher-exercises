function capitalizeFirstLetter(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

function truncateText(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

function removeSpaces(str) {
  return str.replaceAll(' ', '');
}

function sumArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function findMax(arr) {
  return Math.max(...arr);
}

function flattenArray(arr) {
  return arr.flat(1);
}

