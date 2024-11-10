import {rotate} from './index';

describe('Rotate Array', () => {
    test('rotates array 1', () => {
        const nums = [1,2,3,4,5,6,7];
        const k = 3;
        rotate(nums, k);
        expect(nums).toEqual([5,6,7,1,2,3,4]);
    });


    test('rotates array 2', () => {
        const nums = [-1,-100,3,99];
        const k = 2;
        rotate(nums, k);
        expect(nums).toEqual([3,99,-1,-100]);
    });


});
