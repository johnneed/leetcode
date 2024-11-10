import {containsDuplicate} from './index';

describe('Contains Duplicate', () => {
    test('returns true if duplicates', () => {
        const nums = [1,2,3,1];
        const result = containsDuplicate(nums);
        expect(result).toBe(true)
    });


    test('return false if no duplicates', () => {
        const nums = [1,2,3,4];
        const result = containsDuplicate(nums);
        expect(result).toBe(false)
    });

    test('returns true if duplicates', () => {
        const nums = [1,1,1,3,3,4,3,2,4,2];
        const result = containsDuplicate(nums);
        expect(result).toBe(true)
    });


});
