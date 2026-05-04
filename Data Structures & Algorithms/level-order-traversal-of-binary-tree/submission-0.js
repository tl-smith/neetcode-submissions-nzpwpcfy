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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root){
            return [];
        }

        const result = [];

        const queue = [root];

        while(queue.length > 0){
            const levelSize = queue.length;

            const currentLevel = [];

            for(let i = 0; i < levelSize; i++){
                const node = queue.shift();

                currentLevel.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }

            result.push(currentLevel);


        }

        return result;
    }
}

// function levelOrder(root) {
//     // If tree is empty → return empty list
//     if (!root) return [];

//     // Initialize result array
//     const result = [];

//     // Initialize queue with root node
//     const queue = [root];

//     // While there are nodes to process
//     while (queue.length > 0) {
//         // Get number of nodes at current level
//         const levelSize = queue.length;

//         // Store values for current level
//         const currentLevel = [];

//         // Process all nodes in this level
//         for (let i = 0; i < levelSize; i++) {
//             // Remove node from front of queue
//             const node = queue.shift();

//             // Add node value to current level
//             currentLevel.push(node.val);

//             // Add left child to queue (if exists)
//             if (node.left) queue.push(node.left);

//             // Add right child to queue (if exists)
//             if (node.right) queue.push(node.right);
//         }

//         // Add completed level to result
//         result.push(currentLevel);
//     }

//     return result;
// }
