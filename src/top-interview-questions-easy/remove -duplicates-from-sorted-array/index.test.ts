import {removeDuplicates} from './index';

test('removes the right number of dupes', () => {
    const nums = [1,1,2]; // Input array
    const expectedNums = [1,2]; // The expected answer with correct length

    const k = removeDuplicates(nums); // Calls your implementation
    console.log("NUMS", nums);
    for (let i = 0; i < k; i++) {
        console.log(nums[i], expectedNums[i]);
        expect(nums[i]).toEqual(expectedNums[i]);
    }
    expect(k).toBe(expectedNums.length);
});
