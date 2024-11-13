// Source: https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/646/
/**
 * Rotate Array
 *
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 *
 * Constraints:
 * 1 <= nums.length <= 105
 * -231 <= nums[i] <= 231 - 1
 * 0 <= k <= 105
 */


export function rotate(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop() as number);
    }
}
