/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        // Create a dummy starting node to simplify list building
const dummy = { val: 0, next: null };

// Set a pointer (node) to track the end of the merged list
let node = dummy;

// Loop while both lists still have nodes
while (list1 && list2) {

    // Check which current node has the smaller value
    if (list1.val < list2.val) {

        // Attach the smaller node (from list1) to the merged list
        node.next = list1;

        // Move list1 forward to its next node
        list1 = list1.next;

    } else {

        // Otherwise, attach the node from list2
        node.next = list2;

        // Move list2 forward to its next node
        list2 = list2.next;
    }

    // Move the node pointer forward in the merged list
    node = node.next;
}

// After the loop, at least one list is empty
// If list1 still has nodes left, attach them to the merged list
if (list1) {
    node.next = list1;
} else {
    // Otherwise, attach the remaining nodes from list2
    node.next = list2;
}

// Return the merged list, skipping the dummy node
return dummy.next;
    }
}
