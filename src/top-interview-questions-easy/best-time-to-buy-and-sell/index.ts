// Source: https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/
/**
 * Best Time to Buy and Sell Stock
 *
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 *
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock
 * at any time. However, you can buy it then immediately sell it on the same day.
 *
 * Find and return the maximum profit you can achieve.
 **/

export function maxProfit(prices: number[]): number {
  return prices.slice(1).reduce((acc, curr, i) => (curr > prices[i] ? curr - prices[i] + acc : acc), 0);
};
