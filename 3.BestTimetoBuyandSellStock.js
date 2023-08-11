/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minA = Math.min(...prices);
  let minIdx = prices.indexOf(minA);
  if (minIdx === prices.length - 1) {
    minA = Math.min(...prices.slice(minIdx));
    minIdx = prices.indexOf(minA);
  }
  console.log("wwwws");
  let maxA = Math.max(...prices.slice(minIdx));
  return maxA - minA;
};

console.log(maxProfit([2, 4, 1]));
