class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {

        // PSEUDOCODE:
    // 1. Create a mapping (rank) from each character in "order" to its index position
    //    This defines the custom sort priority for each character

    const rank = {};
    for (let i = 0; i < order.length; i++) {
        rank[order[i]] = i;
        // rank[char] = priority index in custom order string
    }

    // PSEUDOCODE:
    // 2. Convert string s into an array of characters so we can sort it

    return [...s]
        .sort((a, b) => {
            // PSEUDOCODE:
            // 3. For each pair of characters, look up their rank
            //    If a character is not in "order", assign it a default low priority (26)

            const ra = rank[a] ?? 26;
            const rb = rank[b] ?? 26;

            // PSEUDOCODE:
            // 4. Sort based on rank difference (lower rank comes first)

            return ra - rb;
        })
        .join('');
        // PSEUDOCODE:
        // 5. Convert sorted array back into a string and return it
    }
}
