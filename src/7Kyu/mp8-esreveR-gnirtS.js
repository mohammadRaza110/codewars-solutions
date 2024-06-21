/*
Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"

https://www.codewars.com/kata/52b74e0936d582d9210005ff

*/

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};
