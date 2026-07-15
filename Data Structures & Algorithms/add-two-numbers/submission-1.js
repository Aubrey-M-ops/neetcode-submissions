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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let p1 = l1, p2 = l2;
        let dummy = new ListNode();
        let cur = dummy;
        let carry = 0;
        while(p1 || p2 || carry){
            const val1 = p1 ? p1.val : 0;
            const val2 = p2 ? p2.val:0;
            let sum = val1 + val2 +carry
            let digit = sum%10;
            cur.next = new ListNode(digit);
            cur = cur.next;
            carry = Math.floor(sum/10)
            if(p1) p1 = p1.next;
            if(p2) p2 = p2.next;
        }
        return dummy.next;   
    }
}
//Time: O(max(m,n))
