class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        
        nums.sort((a,b) => a -b);
        const result = [];

        for(let i = 0; i < nums.length; i++){
            if (nums[i] > 0) break;
            if( i > 0 && nums[i] === nums[i -1]) continue;

          let left = i + 1;
          let right = nums.length -1;
          while(left < right){
            const sum = nums[i] + nums[left] + nums[right];
            if(sum > 0) {
                right--;
            } else if (sum < 0){
                left++;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left -1])
                left++;
                
            }
          }

        }
    
       return result;
    }
}

// threeSum(nums) {

//     // Sort the array in ascending order so we can use the two-pointer technique
//     nums.sort((a,b) => a - b);

//     // Create an array to store all unique triplets that sum to 0
//     const result = [];

//     // Loop through each number in the array (this will be our first number)
//     for (let i = 0; i < nums.length; i++) {

//         // If the current number is greater than 0, no three numbers can sum to 0 (since array is sorted)
//         if (nums[i] > 0) break;

//         // Skip duplicate values for the first number to avoid repeating triplets
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         // Set left pointer just after current index
//         let left = i + 1;

//         // Set right pointer at the end of the array
//         let right = nums.length - 1;

//         // Continue searching while left pointer is less than right pointer
//         while (left < right) {

//             // Calculate the sum of the three numbers
//             const sum = nums[i] + nums[left] + nums[right];

//             // If sum is too large, move right pointer left to decrease sum
//             if (sum > 0) {
//                 right--;

//             // If sum is too small, move left pointer right to increase sum
//             } else if (sum < 0) {
//                 left++;

//             // If sum is exactly 0, we found a valid triplet
//             } else {

//                 // Add the triplet to the result array
//                 result.push([nums[i], nums[left], nums[right]]);

//                 // Move both pointers inward to look for next possible pair
//                 left++;
//                 right--;

//                 // Skip duplicate values for the second number to avoid duplicate triplets
//                 while (left < right && nums[left] === nums[left - 1])
//                     left++;
//             }
//         }
//     }

//     // Return all unique triplets that sum to 0
//     return result;
// }
