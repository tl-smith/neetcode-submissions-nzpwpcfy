class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
// Step 1: Start with the first number
    let currentSum = nums[0];
    let maxSum = nums[0];

    // Step 2: Loop through the array starting from index 1
    for (let i = 1; i < nums.length; i++) {

        // Decide:
        // Should we continue the previous subarray OR start new?
        // Take the bigger of:
        // 1. current number alone
        // 2. current number + previous sum
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update the global maximum if needed
        maxSum = Math.max(maxSum, currentSum);
    }

    // Step 3: Return the best sum found
    return maxSum;

    }
}
