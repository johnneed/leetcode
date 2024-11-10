// Source: https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/

export function maxProfit(prices: number[]): number {
  return prices.slice(1).reduce((acc, curr, i) => (curr > prices[i] ? curr - prices[i] + acc : acc), 0);
};
