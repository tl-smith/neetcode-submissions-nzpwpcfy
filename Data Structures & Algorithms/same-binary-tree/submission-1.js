/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(p === null && q === null){
            return true;
        }
        if(p === null || q === null){
            return false;
        }

        if(p.val !== q.val){
            return false;
        }

        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}



// function isSameTree(p, q) {
//     // If both nodes are null → trees match at this branch
//     if (p === null && q === null) return true;

//     // If one node is null and the other is not → trees differ
//     if (p === null || q === null) return false;

//     // If values at current nodes are different → trees differ
//     if (p.val !== q.val) return false;

//     // Recursively check:
//     // 1. left subtree of both nodes
//     // 2. right subtree of both nodes
//     // Both must be true for trees to be identical
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// }
