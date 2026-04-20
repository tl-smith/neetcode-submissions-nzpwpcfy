class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {// PSEUDOCODE:
        // 1. While the string contains any valid adjacent pair:
        //      - "()", "{}", or "[]"
        //
        // 2. Repeatedly remove all occurrences of these pairs from the string
        //
        // 3. After no more removals are possible:
        //      - If the string is empty, all brackets were properly matched → return true
        //      - Otherwise, unmatched or incorrectly ordered brackets remain → return false

        while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
            s = s.replace('()', '');
            s = s.replace('{}', '');
            s = s.replace('[]', '');
        }

        return s === '';
    }
}
