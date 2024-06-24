/*
DESCRIPTION:
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

https://www.codewars.com/kata/59557b2a6e595316ab000046
 */

function convertHashToArray(hash) {
  const arrayFromHash = [];
  for (let key in hash) {
    if (hash.hasOwnProperty(key)) {
      arrayFromHash.push([key, hash[key]]);
    }
  }
  return arrayFromHash;
}
