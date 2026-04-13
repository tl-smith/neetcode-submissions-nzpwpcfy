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