/*
CRIPTION:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
 */

function solution(str) {
    let splitstr = str.split("");
    let result = [];
  
    for (let i = 0; i < splitstr.length; i += 2) {
      if (i + 1 < splitstr.length) {
          result.push(splitstr[i] + splitstr[i + 1]);
        } else {
          result.push(splitstr[i] + "_");
        }
    }return result
  }