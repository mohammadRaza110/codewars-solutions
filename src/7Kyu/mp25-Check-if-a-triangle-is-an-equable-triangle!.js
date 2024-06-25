/*
DESCRIPTION:
A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding!

https://www.codewars.com/kata/57d0089e05c186ccb600035e
 */

function equableTriangle(a, b, c) {
  const perimeter = a + b + c;

  const s = perimeter / 2;

  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area === perimeter;
}
