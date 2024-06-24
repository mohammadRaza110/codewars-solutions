/*
DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
 */

function findShort(str) {
  const words = str.split(" ");
  let minLength = Number.POSITIVE_INFINITY;

  for (let i = 0; i < words.length; i++) {
    const currentLength = words[i].length;
    if (currentLength < minLength) {
      minLength = currentLength;
    }
  }

  return minLength;
}
