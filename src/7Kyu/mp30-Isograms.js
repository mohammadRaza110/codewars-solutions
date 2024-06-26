/*
DESCRIPTION:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

https://www.codewars.com/kata/54ba84be607a92aa900000f1
 */
function isIsogram(str) {
  str = str.toLowerCase();

  const charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }

  return true;
}
