class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      
      // Create result array filled with 1s
    const result = new Array(nums.length).fill(1);

    // Step 1: Build prefix (left products)
    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {

        // Store product of all elements to the left
        result[i] = prefix;

        // Update prefix by multiplying current number
        prefix *= nums[i];
    }

    // Step 2: Build suffix (right products)
    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {

        // Multiply existing left product with right product
        result[i] *= suffix;

        // Update suffix by multiplying current number
        suffix *= nums[i];
    }

    return result;
    }
}


// // Function to return product of array except self
// productExceptSelf(nums) {

//     // Get length of input array
//     const n = nums.length;

//     // Create result array (final answer)
//     const res = new Array(n);

//     // Create prefix array: stores product of all elements to the LEFT
//     const pref = new Array(n);

//     // Create suffix array: stores product of all elements to the RIGHT
//     const suff = new Array(n);


//     // Base case: first element has nothing to the left
//     pref[0] = 1;

//     // Base case: last element has nothing to the right
//     suff[n - 1] = 1;


//     // Build prefix array from left → right
//     for (let i = 1; i < n; i++) {

//         // Current prefix = previous prefix × previous number
//         // Meaning: product of everything before index i
//         pref[i] = nums[i - 1] * pref[i - 1];
//     }


//     // Build suffix array from right → left
//     for (let i = n - 2; i >= 0; i--) {

//         // Current suffix = next suffix × next number
//         // Meaning: product of everything after index i
//         suff[i] = nums[i + 1] * suff[i + 1];
//     }


//     // Combine prefix and suffix to get final result
//     for (let i = 0; i < n; i++) {

//         // Result at i = product of left side × product of right side
//         res[i] = pref[i] * suff[i];
//     }


//     // Return final result array
//     return res;
// }