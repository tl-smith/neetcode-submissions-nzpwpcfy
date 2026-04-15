class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        // PSEUDOCODE:
    // 1. Loop through nums2
    // 2. Copy each element of nums2 into nums1 starting at index m
    // 3. After copying, sort nums1 in ascending order

    for (let i = 0; i < n; i++) {
        // Place nums2 elements into nums1 after the first m elements
        nums1[i + m] = nums2[i];
    }

    // Sort the combined array
    nums1.sort((a, b) => a - b);
    }
}
