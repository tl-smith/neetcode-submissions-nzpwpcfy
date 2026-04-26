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
    diameterOfBinaryTree(root) {

        let diameter = 0;

        function depth(node) {
            // Base case: empty node has height 0
            if (!node) return 0;

            // Get height of left subtree
            const left = depth(node.left);

            // Get height of right subtree
            const right = depth(node.right);

            // Update diameter at this node
            // longest path THROUGH this node = left + right
            diameter = Math.max(diameter, left + right);

            // Return height of this node
            return 1 + Math.max(left, right);
        }

        depth(root);

        return diameter;
    }
    
}
