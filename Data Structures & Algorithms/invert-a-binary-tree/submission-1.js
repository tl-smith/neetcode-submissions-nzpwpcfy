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
     * @return {TreeNode}
     */
    invertTree(root) {
        // Base case:
    // If the current node is null, there is nothing to invert
    if (!root) return null;

    // Swap the left and right children of the current node
    // (store left in temp implicitly via destructuring)
    [root.left, root.right] = [root.right, root.left];

    // Recursively invert the left subtree
    // (which was originally the right subtree before the swap)
    this.invertTree(root.left);

    // Recursively invert the right subtree
    // (which was originally the left subtree before the swap)
    this.invertTree(root.right);

    // Return the current node after its subtree has been inverted
    return root;
    }
}
