class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length){
            return false;
        }

        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);

        for(let i = 0; i < s1.length; i++){
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for(let i = 0; i < 26; i++){
            if(s1Count[i] === s2Count[i]){
                matches++;
            }
        }

         
         let left = 0;
         for(let right = s1.length; right < s2.length; right++){
            if(matches === 26){
                return true;
            }
              //ADD NEW RIGHT CHARACTER
            let index = s2.charCodeAt(right) - 97;
            s2Count[index]++;

            if (s1Count[index] === s2Count[index]){
                matches++;
            } else if (s1Count[index] + 1 === s2Count[index]){
                matches--;
            }

              //REMOVE LEFT CHARACTER
             index = s2.charCodeAt(left) - 97;
             s2Count[index]--;
             
             if (s1Count[index] === s2Count[index]){
                matches++;
            } else if (s1Count[index] - 1 === s2Count[index]){
                matches--;
            }

            left++;

         }

      return matches === 26;

    }
}

// checkInclusion(s1, s2) {

//     // If s1 is longer than s2, no permutation can exist
//     if (s1.length > s2.length) {
//         return false;
//     }

//     // Create frequency arrays for s1 and the current window in s2
//     let s1Count = new Array(26).fill(0);
//     let s2Count = new Array(26).fill(0);

//     // Build frequency counts for s1 and the first window of s2
//     for (let i = 0; i < s1.length; i++) {
//         s1Count[s1.charCodeAt(i) - 97]++;
//         s2Count[s2.charCodeAt(i) - 97]++;
//     }

//     // Count how many of the 26 characters currently match in frequency
//     let matches = 0;

//     // Compare all 26 letters once to initialize matches
//     for (let i = 0; i < 26; i++) {
//         if (s1Count[i] === s2Count[i]) {
//             matches++;
//         }
//     }

//     // Left pointer for sliding window
//     let l = 0;

//     // Slide the window across s2 starting from the end of the first window
//     for (let r = s1.length; r < s2.length; r++) {

//         // If all 26 characters match, we found a permutation
//         if (matches === 26) {
//             return true;
//         }

//         // ---- ADD NEW RIGHT CHARACTER ----

//         // Get index of new character entering the window
//         let index = s2.charCodeAt(r) - 97;

//         // Add it to the window count
//         s2Count[index]++;

//         // If counts now match, we fixed a mismatch → increase matches
//         if (s1Count[index] === s2Count[index]) {
//             matches++;

//         // If counts were matching but now exceed → we broke a match
//         } else if (s1Count[index] + 1 === s2Count[index]) {
//             matches--;
//         }

//         // ---- REMOVE LEFT CHARACTER ----

//         // Get index of character leaving the window
//         index = s2.charCodeAt(l) - 97;

//         // Remove it from the window count
//         s2Count[index]--;

//         // If counts now match, we fixed a mismatch → increase matches
//         if (s1Count[index] === s2Count[index]) {
//             matches++;

//         // If counts were matching but now go below → we broke a match
//         } else if (s1Count[index] - 1 === s2Count[index]) {
//             matches--;
//         }

//         // Move left pointer forward to maintain window size
//         l++;
//     }

//     // Final check after loop ends
//     return matches === 26;
// }
