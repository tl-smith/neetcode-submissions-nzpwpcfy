class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};

        for(let num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        const buckets = Array(nums.length + 1).fill().map(() => []);

        for(let num in count){
           const freq = count[num];
           buckets[freq].push(Number(num)); 
        }

        const result = [];

        for(let i = buckets.length - 1; i >=0 && result.length < k; i--){
            for (let num of buckets[i]){
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }


    }
}


// // Function to return the k most frequent elements
// function topKFrequent(nums, k) {

//     // Step 1: Create a hashmap to count frequency of each number
//     const count = {};

//     // Loop through each number in the input array
//     for (let num of nums) {

//         // If number already exists, increment count
//         // Otherwise initialize it to 1
//         count[num] = (count[num] || 0) + 1;
//     }

//     // Step 2: Create "buckets"
//     // Index = frequency, Value = list of numbers with that frequency
//     const buckets = Array(nums.length + 1).fill().map(() => []);

//     // Loop through each number in the frequency map
//     for (let num in count) {

//         // Get frequency of current number
//         const freq = count[num];

//         // Place the number into the bucket matching its frequency
//         buckets[freq].push(Number(num));
//     }

//     // Step 3: Collect top k frequent elements
//     const result = [];

//     // Loop from highest frequency to lowest
//     for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {

//         // Loop through all numbers in the current bucket
//         for (let num of buckets[i]) {

//             // Add number to result
//             result.push(num);

//             // If we have collected k elements, stop early
//             if (result.length === k) {
//                 return result;
//             }
//         }
//     }
// }