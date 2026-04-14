class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // If the array is empty, there is no prefix
        if (!strs.length) return "";
        
        // Step 1: Sort the array alphabetically
    // This puts the most different strings at the ends
        strs.sort();

      // Step 2: Take the first and last strings
        let first = strs[0];
        let last =strs[strs.length -1];

// Step 3: Compare characters one by one
    // Goal: find where they stop matching
        for(let i = 0; i < first.length; i++) {

            // If characters are different:
        // → we found the end of the common prefix
            if (first[i] != last[i]) {

                // Return substring from start up to (but not including) i
                return first.slice(0, i);
            }
        }
        // Step 4: If we never found a mismatch,
    // the entire 'first' string is the common prefix
             return first;
    }
}
