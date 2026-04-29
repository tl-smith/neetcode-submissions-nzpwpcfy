class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let result = 0;

        while(l < r){
            const area = Math.min(heights[l], heights[r]) * (r-l);

            result = Math.max(result, area);
            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return result;
    }
}


// maxArea(heights) {

//     // Initialize left pointer at the beginning of the array
//     let l = 0;

//     // Initialize right pointer at the end of the array
//     let r = heights.length - 1;

//     // Store the maximum area found so far
//     let result = 0;

//     // Continue while the two pointers have not crossed
//     while (l < r) {

//         // Calculate the height of the container (limited by the shorter bar)
//         // Multiply by width (distance between pointers)
//         const area = Math.min(heights[l], heights[r]) * (r - l);

//         // Update result if this area is larger than previous max
//         result = Math.max(result, area);

//         // If left bar is shorter or equal, move left pointer inward
//         // (trying to find a taller bar to increase height)
//         if (heights[l] <= heights[r]) {
//             l++;

//         // Otherwise, right bar is shorter, so move right pointer inward
//         } else {
//             r--;
//         }
//     }

//     // Return the maximum area found
//     return result;
// }
