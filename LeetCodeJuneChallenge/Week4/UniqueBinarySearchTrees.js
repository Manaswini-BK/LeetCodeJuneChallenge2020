/*Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?
Example:
Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3 */

/*A few key facts we have to understand:

The question is simply asking the sum of different combinations of BST if every number between 1 - n is used as a root node
If number i is the root node, then the total combinations for i will equal to the combination of BST to its left [1... i-1] times the combination of BST to its right [i+1]...n.
Think of BST are just combination of nodes instead of actual numbers, this means, the BST combinations for [1,2,3,4] equals to the BST combinations for [7,8,9,10] because they all have 4 elements. */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let bst = new Array(n+1).fill(0);
    bst[0] = 1;
    bst[1] = 1;
    for(let i=2; i<=n; i++){
        for(let j=1; j<=i; j++){
            bst[i]+= bst[j-1] * bst[i-j];
        }
    }
    
    return bst[n];
};