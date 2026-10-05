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

function uniqueValues(arr) {
  return [...new Set(arr)];
}

function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

function calculateFactorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function generateMultiplicationTable(n) {
  for (let num = n; num <= n; num++) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} * ${i} = ${num * i}`);
    }
  }
}

function sumOfDigits(num) {
  let sum = 0;
  let current = Math.abs(num);
  while (current > 0) {
    sum += current % 10;
    current = Math.floor(current / 10);
  }
  return sum;
}

