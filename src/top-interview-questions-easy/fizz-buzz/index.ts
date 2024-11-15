// Source: https://leetcode.com/explore/featured/card/top-interview-questions-easy/102/math/743/
/**
 Given an integer n, return a string array answer (1-indexed) where:

 answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 answer[i] == "Fizz" if i is divisible by 3.
 answer[i] == "Buzz" if i is divisible by 5.
 answer[i] == i (as a string) if none of the above conditions are true.

 Constraints:1 <= n <= 10^4
 **/


export function fizzBuzz(n: number): string[] {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        answer.push('FizzBuzz');
        break;
      case i % 3 === 0:
        answer.push('Fizz');
        break;
      case i % 5 === 0:
        answer.push('Buzz');
        break;
      default:
        answer.push(i.toString());
    }
  }
  ;
  return answer;
}
