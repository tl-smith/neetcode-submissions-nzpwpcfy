class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
          for ( let j = i + 1; j < nums.length; j++) {
                 if( nums[i] === nums[j] ) {
                    return true
                 }

            }
        }
        return false
    }
}


// function containsDuplicate(nums) {
//     // INITIALIZE empty collection "seen"
//     let seen = {};

//     // FOR EACH number IN nums
//     for (let num of nums) {

//         // IF number is already in "seen"
//         if (seen[num]) {
//             // RETURN true (a value appears more than once)
//             return true;
//         }

//         // OTHERWISE, ADD number to "seen"
//         seen[num] = true;
//     }

//     // AFTER checking all numbers
//     // RETURN false (no duplicates found)
//     return false;
// }