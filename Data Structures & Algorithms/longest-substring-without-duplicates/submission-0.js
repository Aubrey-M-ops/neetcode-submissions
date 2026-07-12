class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let count = 0;
        let left = 0;
        const set = new Set();
        for(let right = 0; right < s.length; right++){
             //先写特殊的
             //keep moving left
            while(set.has(s[right])){
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            count = Math.max(count, right - left + 1);
           
        }
        return count;
    }
}
