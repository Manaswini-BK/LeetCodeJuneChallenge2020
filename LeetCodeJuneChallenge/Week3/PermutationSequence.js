/*The set [1,2,3,...,n] contains a total of n! unique permutations.
By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.
Note:
Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:
Input: n = 3, k = 3
Output: "213"
Example 2:
Input: n = 4, k = 9
Output: "2314"
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let factorial = [1];
    for (let i=1;i<=n;i++) factorial[i]= i * factorial[i-1];

    let nums = Array.from({length: n}, (v, i) => i+1);
    let res = "";
    for (let i=n;i>0;i--) {
        index = Math.ceil(k / factorial[i - 1]); // decide to use which permutation set
        res+=nums[index - 1];
        nums.splice(index - 1, 1);
        k -= (factorial[i-1] * (index - 1));
    }
    return res;
};