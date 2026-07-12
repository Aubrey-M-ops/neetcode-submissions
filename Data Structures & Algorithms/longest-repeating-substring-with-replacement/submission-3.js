class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqMap = new Map();
        let left = 0, res = 0, maxFreq = 0;
        for(let right = 0; right < s.length; right++){
            freqMap.set(s[right], (freqMap.get(s[right])|| 0) + 1);
            maxFreq = Math.max(maxFreq, freqMap.get(s[right]));
            // to replace: right - left + 1 - maxFreq
            // shrink until it is qualified
            while(right - left + 1 - maxFreq > k){
                freqMap.set(s[left], freqMap.get(s[left]) - 1);
                left++;
            }

            res = Math.max(res, right - left + 1)
        }

        return res;
    }
}
