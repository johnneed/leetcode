import {maxProfit} from './index';

describe('maxProfit', () => {
    test('finds max profit', () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const profit = maxProfit(prices);
        expect(profit).toBe(7);
    });


    test('finds max profit 0f 4', () => {
        const prices = [1, 2, 3, 4, 5];
        const profit = maxProfit(prices);
        expect(profit).toBe(4);
    });


    test('finds max profit of 0', () => {
        const prices = [7, 6, 4, 3, 1];
        const profit = maxProfit(prices);
        expect(profit).toBe(0);
    });
});
