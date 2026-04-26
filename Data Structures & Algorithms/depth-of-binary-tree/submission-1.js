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
     * @param {TreeNode} root
     * @return {number}
     */

    
    maxDepth(root) {

    // If the current node is null, it means we've gone past a leaf node
    // So there is no depth here → return 0
        if(root === null){
            return 0;
        }

    // Recursively find the maximum depth of the left subtree
    // (go down the left side of the tree)
    const leftDepth = this.maxDepth(root.left);

    // Recursively find the maximum depth of the right subtree
    // (go down the right side of the tree)
    const rightDepth = this.maxDepth(root.right);

    // Take the larger of the two depths, then add 1 for the current node
    // "1" represents the current node itself
    return 1 + Math.max(leftDepth, rightDepth);
    }
}
