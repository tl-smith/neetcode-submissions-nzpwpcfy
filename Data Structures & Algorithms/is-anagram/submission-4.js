class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sWord = s.split("").sort().join("");
    let tWord = t.split("").sort().join("");
       return sWord === tWord;

    }
}



// function isAnagram(s, t) {
//     if (s.length !== t.length) return false;

//     let count = {};

//     for (let char of s) {
//         count[char] = (count[char] || 0) + 1;
//     }

//     for (let char of t) {
//         if (!count[char]) return false;
//         count[char]--;
//     }

//     return true;
// }

// Frequency map
// function isAnagram(s, t) {
// If the strings are different lengths, they can’t be anagrams.
//     if (s.length !== t.length) return false;

// This will store how many times each letter appears.
//     let count = {};

// Go through each letter in s, Increase its count.f count[char] exists → use it
// If not → use 0
// Then add 1
//     for (let char of s) {
//         count[char] = (count[char] || 0) + 1; 
//     }
// Now we go through the second string and remove letters. If the letter doesn’t exist
// OR Its count is already 0. Then t is using a letter that s doesn’t have → NOT an anagram
//     for (let char of t) {
//         if (!count[char]) return false;
//         count[char]--;
//     }

//     return true;
// }





