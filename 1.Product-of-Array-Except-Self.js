/**
 * @param {number[]} nums
 * @return {number[]}
 */

const nums = [1, 2, 3, 4];
const productExceptSelf = function (nums) {
  //**** This one has O(n2) time comlexity */
  // let result = [];
  // nums.forEach((element, idx) => {
  //   let t = [...nums];
  //   t.splice(idx, 1);
  //   result.push(t.reduce((a, b) => a * b, 1));
  // });
  // return result;

  const n = nums.length;
  const result = [...nums];

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};

console.log(productExceptSelf(nums));
