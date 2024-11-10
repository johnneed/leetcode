// Source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
export function removeDuplicates(nums: number[]): number {
  const deDuped = nums.reduce(
    (acc: number[], num:number) => (acc.slice(-1)[0] === num) ? acc : [...acc, num],
    []);
  // Parameter mutation is bad practice, but it's what the question asks for.
  nums.unshift(...deDuped);
  return deDuped.length;
}
