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

// function isPalindrome(s) {
//   let left = 0;                 // pointer starting at the beginning
//   let right = s.length - 1;     // pointer starting at the end

//   while (left < right) {        // continue until pointers meet/cross

//     // move left pointer forward until it points to a letter/number
//     while (left < right && !(/[a-z0-9]/i.test(s[left]))) {
//       left++;                   // skip non-alphanumeric on the left
//     }

//     // move right pointer backward until it points to a letter/number
//     while (left < right && !(/[a-z0-9]/i.test(s[right]))) {
//       right--;                  // skip non-alphanumeric on the right
//     }

//     // compare the two valid characters (case-insensitive)
//     if (s[left].toLowerCase() !== s[right].toLowerCase()) {
//       return false;             // mismatch → not a palindrome
//     }

//     left++;                     // move left pointer inward
//     right--;                    // move right pointer inward
//   }

//   return true;                  // all comparisons matched
// }