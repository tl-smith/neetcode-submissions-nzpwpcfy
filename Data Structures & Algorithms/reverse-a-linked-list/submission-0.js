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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // Initialize a pointer to store the previous node (starts as null)
    let prev = null;

    // Start from the head of the list
    let curr = head;

    // Traverse the list until we reach the end (curr becomes null)
    while (curr) {

        // Save the next node so we don't lose the rest of the list
        let temp = curr.next;

        // Reverse the current node's pointer to point to the previous node
        curr.next = prev;

        // Move the prev pointer forward to the current node
        prev = curr;

        // Move to the next node in the original list
        curr = temp;
    }

    // At the end, prev will be the new head of the reversed list
    return prev;
    }
}
