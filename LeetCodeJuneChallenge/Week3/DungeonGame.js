/*The demons had captured the princess (P) and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (K) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms; other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers).

In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.
Write a function to determine the knight's minimum initial health so that he is able to rescue the princess. */
// first, lets allow knight's health can be zero
    // A[i][j] shows the min health that knight needs to rescue the pricess from dungeon[i][j]
    // then we get the following DP formular
    //
    // A[i][j] = max{ min{A[i][j+1], A[i+1][j]} - dungeon[i][j], 0}
    //
    // explanation:
    // 1. min{A[i][j+1], A[i+1][j]}-dungeon[i][j] 
    // find the min health required and add the health cost at current position 
    // 2. max{ min{A[i][j+1], A[i+1][j]} - dungeon[i][j], 0}
    // if the min health required is negative, we set it as 0! 
    // (this is because that knight's health can not be negative)
    // 3. return A[0][0] + 1 (question does not allow 0 health, so we add 1)
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let m = dungeon.length
    let n = dungeon[0].length
    

    let A = new Array(m)
    for(let i=0; i<m; i++){
        A[i] = new Array(n)
    }

    
    for(let i = m-1; i>=0; i--) {
        for(let j = n-1; j>=0; j--) {
            let goLeft=Infinity, goDown=Infinity
            if(i+1>=m && j+1>=n){
                goLeft=0
                goDown=0
            }else if(i+1<m && j+1 <n){
                goLeft = A[i][j+1]
                goDown = A[i+1][j]
            } else if(j+1<n){
                goLeft = A[i][j+1]
            } else {
                goDown = A[i+1][j]
            }

            A[i][j] = Math.max(Math.min(goLeft,goDown)-dungeon[i][j], 0)

        }  
    }
    return A[0][0]+1    
};