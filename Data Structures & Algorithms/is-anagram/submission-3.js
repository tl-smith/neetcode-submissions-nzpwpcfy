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



// Frequency map
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