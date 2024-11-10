// Source: https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/646/
/**
 Leet: Do not return anything, modify nums in-place instead.
 Me: Bad practice, don't do in real code,  but it's a requirement of the problem. ^
 */
export function rotate(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop() as number);
    }
};
