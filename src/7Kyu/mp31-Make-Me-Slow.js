/*
DESCRIPTION:
Make me slow! Calling makeMeSlow() should take at least 7 seconds.

https://www.codewars.com/kata/57f59da8d3978bb31f000152
 */

function makeMeSlow() {
  const start = Date.now();
  while (Date.now() - start < 7000) {}
  console.log("Finished after at least 7 seconds.");
}
