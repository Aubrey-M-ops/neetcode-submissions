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
        const dummy = new ListNode();
        let cur = dummy;
        let p1 = list1, p2 = list2;
        while(p1 && p2){
            if(p1.val < p2.val){
                cur.next = p1;
                 p1 = p1.next;
            }else{
                cur.next = p2;
                p2 = p2.next;
            }
            cur = cur.next;
        }

        if(!p1 || !p2){
            cur.next = p1 ? p1 : p2
        }
        return dummy.next;

    }
}
