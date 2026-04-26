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


// Helper function that computes the height of a node
function depth(node) {

    // If the node is null, there is no height here
    // Base case: reached past a leaf
    if (!node) return 0;

    // Recursively compute the height of the left subtree
    // "How tall is everything on the left side?"
    const left = depth(node.left);

    // Recursively compute the height of the right subtree
    // "How tall is everything on the right side?"
    const right = depth(node.right);

    // Compute the longest path that passes THROUGH this node
    // That path is: left side height + right side height
    // Update global maximum diameter if this is bigger
    diameter = Math.max(diameter, left + right);

    // Return the height of this node to its parent
    // Height = 1 (current node) + taller of left or right subtree
    return 1 + Math.max(left, right);
}


// Start DFS traversal from the root of the tree
depth(root);


// After exploring all nodes, return the largest diameter found
return diameter;
    }
    
}
