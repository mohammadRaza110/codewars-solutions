/*
DESCRIPTION:
Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.


https://www.codewars.com/kata/56644a421b7c94c622000056
 */

function mostLikely(prob1, prob2) {
  let [num1, denom1] = prob1.split(":").map(Number);
  let [num2, denom2] = prob2.split(":").map(Number);

  let value1 = num1 / denom1;
  let value2 = num2 / denom2;

  return value1 > value2;
}
