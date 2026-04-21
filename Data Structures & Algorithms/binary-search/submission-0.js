class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // PSEUDOCODE: set left pointer to start of array
    let l = 0;

    // PSEUDOCODE: set right pointer to end of array
    let r = nums.length - 1;

    // PSEUDOCODE: repeat while search space is valid (left <= right)
    while (l <= r) {

        // PSEUDOCODE: find middle index to split search space
        const m = l + Math.floor((r - l) / 2);

        // PSEUDOCODE: if middle value is greater than target
        if (nums[m] > target) {

            // PSEUDOCODE: discard right half, move right pointer left
            r = m - 1;

        // PSEUDOCODE: if middle value is less than target
        } else if (nums[m] < target) {

            // PSEUDOCODE: discard left half, move left pointer right
            l = m + 1;

        // PSEUDOCODE: if middle value equals target
        } else {

            // PSEUDOCODE: return index where target is found
            return m;
        }
    }

    // PSEUDOCODE: target not found, return failure indicator
    return -1;


    }
}




// My inital simple code
// search(nums, target) {

//         for(let i = 0; i < nums.length; i++){
//             if(nums[i] === target){
//                 return i;
//             }
//         } return -1;
//     }