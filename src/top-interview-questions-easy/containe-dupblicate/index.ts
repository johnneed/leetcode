 // Source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
function containsDuplicate(nums: number[]): boolean {
  const sorted = nums.sort();
  for(let i = 0; i < sorted.length; i++) {
    if(sorted[i] === sorted[i + 1]) {
      return true;
    }
  }
  return false;
};

export {
  containsDuplicate
}
