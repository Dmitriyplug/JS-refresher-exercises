function capitalizeFirstLetter(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

