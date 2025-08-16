import {singleNumber} from './index';

describe('single numberr', () => {
  test('finds the single number', () => {
    const inputArray = [2,2,1]
    const answer = singleNumber(inputArray);
    expect(answer).toBe(2);
  });


});
