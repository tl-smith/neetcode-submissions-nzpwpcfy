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





// isValid(s) {
//     // PSEUDOCODE:
//     // 1. Create an empty stack to keep track of opening brackets
//     const stack = [];

//     // 2. Create a mapping of closing brackets → their matching opening brackets
//     //    This helps us quickly check what each closing bracket expects
//     const closeToOpen = {
//         ')': '(',
//         ']': '[',
//         '}': '{',
//     };

//     // 3. Loop through each character in the input string
//     for (let c of s) {

//         // PSEUDOCODE:
//         // 4. If the character is a closing bracket:
//         if (closeToOpen[c]) {

//             // 5. Check if the stack is not empty AND
//             //    the top of the stack matches the expected opening bracket
//             if (
//                 stack.length > 0 &&
//                 stack[stack.length - 1] === closeToOpen[c]
//             ) {

//                 // 6. If it matches, remove (pop) the opening bracket from stack
//                 //    because we found a valid pair
//                 stack.pop();

//             } else {

//                 // 7. If it doesn't match or stack is empty,
//                 //    brackets are invalid → return false immediately
//                 return false;
//             }

//         } else {

//             // PSEUDOCODE:
//             // 8. If it's not a closing bracket, it must be an opening bracket
//             //    Push it onto the stack to wait for a matching closing bracket
//             stack.push(c);
//         }
//     }

//     // 9. After processing all characters:
//     //    If stack is empty → all opening brackets were properly matched
//     //    If not empty → some opening brackets were never closed

//     return stack.length === 0;
// }```

// ---

// ## Big intuition (in simple terms)

// - The stack stores **opening brackets we haven’t matched yet**
// - When we see a closing bracket:
//   - we check if it matches the most recent opening one
// - If everything matches correctly → stack ends empty → valid string

// ---

// If you want, I can also:
// - Walk through an example like `"{[()]}"` step-by-step with the stack changes
// - Or draw a visual table of how the stack evolves at each character
