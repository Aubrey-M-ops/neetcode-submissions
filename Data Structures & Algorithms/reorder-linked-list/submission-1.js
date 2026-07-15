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
     * @return {void}
     */
    reorderList(head) {
        let slow = head, fast = head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        let head2 = slow.next;
        slow.next = null;

        // reverse head2;
        let prev = null, cur = head2;
        while(cur){
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        let tail = prev;

        // merge head and tail
        let p1 = head, p2 = tail;
        while(p1 && p2){
            let next1 = p1.next, next2 = p2.next;
            p1.next = p2;
            p2.next = next1;
            //move
            p1 = next1;
            p2 = next2
        }    
        return head;
    }
    //Time: 
    //找中点：O(n)
//反转后半段：O(n)
//合并：O(n)
}
