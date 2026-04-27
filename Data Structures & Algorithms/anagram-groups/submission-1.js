class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for(let string of strs){

            const count = new Array(26).fill(0);

            for(let char of string){
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

                count[index] +=1;
            }

            const key = count.join(",");
            if (!map[key]){

                map[key] = [];
            }
            map[key].push(string);
        }
        return Object.values(map);
    }
}


// // Function to group words that are anagrams
// groupAnagrams(strs) {

//     // Create a hashmap to store: key (letter count) → list of words
//     const res = {};

//     // Loop through each string in the input array
//     for (let s of strs) {

//         // Create an array of size 26 (for each letter a–z), initialized to 0
//         // This will count how many times each letter appears
//         const count = new Array(26).fill(0);

//         // Loop through each character in the current string
//         for (let c of s) {

//             // Convert character to index (0–25)
//             // Example: 'a' → 0, 'b' → 1, ..., 'z' → 25
//             const index = c.charCodeAt(0) - 'a'.charCodeAt(0);

//             // Increment the count for this letter
//             count[index] += 1;
//         }

//         // Convert the count array into a string key
//         // This uniquely represents the letter frequency
//         const key = count.join(',');

//         // If this key does not exist in the hashmap yet
//         if (!res[key]) {

//             // Create a new group (array) for this anagram pattern
//             res[key] = [];
//         }

//         // Add the current string to the correct anagram group
//         res[key].push(s);
//     }

//     // Return all grouped anagrams as an array of arrays
//     return Object.values(res);
// }