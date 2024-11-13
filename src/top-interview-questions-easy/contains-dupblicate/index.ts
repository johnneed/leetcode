 // Source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

 /**
  * Given an integer array nums, return true if any value appears at least twice
  * in the array, and return false if every element is distinct.
  *
  * Constraints:
  * 1 <= nums.length <= 105
  * -109 <= nums[i] <= 109
  */


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
