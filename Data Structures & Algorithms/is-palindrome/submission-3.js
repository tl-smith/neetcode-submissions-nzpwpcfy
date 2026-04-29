class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
     
     let cleaned = s
     .toLowerCase()
     .replace(/[^a-z0-9]/g, '')

      let string = cleaned.split("").reverse().join("");

      return cleaned === string;
      

    }
}

// isPalindrome(s) {
//     let l = 0,                  // start pointer at beginning of string
//         r = s.length - 1;       // end pointer at last index of string

//     while (l < r) {             // keep checking while pointers haven't crossed

//         // move left pointer forward until it points to a valid letter/number
//         while (l < r && !this.alphaNum(s[l])) {
//             l++;                // skip invalid character on the left
//         }

//         // move right pointer backward until it points to a valid letter/number
//         while (r > l && !this.alphaNum(s[r])) {
//             r--;                // skip invalid character on the right
//         }

//         // compare the characters (case-insensitive)
//         if (s[l].toLowerCase() !== s[r].toLowerCase()) {
//             return false;       // if mismatch → not a palindrome
//         }

//         l++;                    // move left pointer inward
//         r--;                    // move right pointer inward
//     }

//     return true;                // if all matched → it's a palindrome
// }

// alphaNum(c) {
//     return (
//         (c >= 'A' && c <= 'Z') ||   // check if uppercase letter
//         (c >= 'a' && c <= 'z') ||   // check if lowercase letter
//         (c >= '0' && c <= '9')      // check if number
//     );
// }