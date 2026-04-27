class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for(let string of strs){

            const count = new Array(26).fill(0);

            for(let char of string){
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

                count[index] +=1;
            }

            const key = count.join(",");
            if (!map[key]){

                map[key] = [];
            }
            map[key].push(string);
        }
        return Object.values(map);
    }
}
