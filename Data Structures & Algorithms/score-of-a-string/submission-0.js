class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let score = 0;

        for(let i = 0; i < s.length-1; i ++){
            let current = s.charCodeAt(i);
            let next = s.charCodeAt(i + 1);
            score += Math.abs(current - next);


        console.log(`i = ${i}`);
        console.log(`current char: '${s[i]}' -> ${current}`);
        console.log(`next char:    '${s[i + 1]}' -> ${next}`);
        }

        console.log("Final score:", score);
        return score;
    }
}
