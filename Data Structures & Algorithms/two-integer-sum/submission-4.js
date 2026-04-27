class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        for(let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                     return [i, j];



// 


                     
                }
            }
        }
    }
}


// function twoSum(nums, target) {
//     const map = {};

//     for (let i = 0; i < nums.length; i++) {
//         const diff = target - nums[i];

//         if (map[diff] !== undefined) {
//             return [map[diff], i];
//         }

//         map[nums[i]] = i;
//     }

//     return [];
// }

// // Function to find two indices whose values add up to target
// twoSum(nums, target) {

//     // Create a hashmap (object) to store: number → index
//     const indices = {}; // val -> index

//     // First loop: store all numbers and their indices
//     for (let i = 0; i < nums.length; i++) {

//         // Save the current number as key, and its index as value
//         // Example: {2: 0, 7: 1, 11: 2, 15: 3}
//         indices[nums[i]] = i;
//     }

//     // Second loop: try to find a pair
//     for (let i = 0; i < nums.length; i++) {

//         // Compute the number needed to reach target
//         // diff = target - current number
//         let diff = target - nums[i];

//         // Check if this needed number exists in the hashmap
//         // AND make sure it's not the same index
//         if (indices[diff] !== undefined && indices[diff] !== i) {

//             // If found, return the two indices
//             return [i, indices[diff]];
//         }
//     }

//     // If no solution found, return empty array
//     return [];
// }