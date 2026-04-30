class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        const set = new Set ();
        let left = 0;
        let result = 0;

        for(let right = 0; right < s.length; right++){
            while(set.has(s[right])){
                set.delete(s[left])
                left++;
            }
            set.add(s[right]);
            result = Math.max(result, right-left + 1);
        }
        return result;
    }
}


// lengthOfLongestSubstring(s) {

//     // Set to store unique characters in the current window
//     const set = new Set();

//     // Left pointer (start of window)
//     let left = 0;

//     // Store the maximum length found
//     let result = 0;

//     // Iterate with right pointer (end of window)
//     for (let right = 0; right < s.length; right++) {

//         // If character already exists in set, shrink window from left
//         while (set.has(s[right])) {

//             // Remove the leftmost character from the set
//             set.delete(s[left]);

//             // Move left pointer forward
//             left++;
//         }

//         // Add current character to the set
//         set.add(s[right]);

//         // Update max length of valid window
//         result = Math.max(result, right - left + 1);
//     }

//     // Return the longest length found
//     return result;
// }
