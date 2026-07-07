/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    isSame(root1, root2) {
        if(!root1 && !root2) return true;
        if(!root1 || !root2) return false;
        if(root1 && root2 && root1.val!==root2.val) return false;

        return root1.val === root2.val && this.isSame(root1.left, root2.left) && this.isSame(root1.right, root2.right);
    }
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        //prune
        if(!root || !subRoot) return false;

        return this.isSame(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }

}
