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



// function twoSum(arr, target) {
//     arr.sort((a, b) => a - b); // ensure sorting

//     let left = 0, right = arr.length - 1;

//     while (left < right) {
//         let sum = arr[left] + arr[right];

//         if (sum === target) return true;
//         else if (sum < target) left++;
//         else right--;
//     }

//     return false;
// }






                     
                }
            }
        }
    }
}
