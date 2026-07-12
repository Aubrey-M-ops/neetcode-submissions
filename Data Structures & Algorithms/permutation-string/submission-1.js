class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length){
            return false;
        }
        
        const s1Count = new Array(26).fill(0);
        const windowCount = new Array(26).fill(0);

        for(let i = 0; i<s1.length; i++){
            const index = s1[i].charCodeAt(0) - "a".charCodeAt(0);
            s1Count[index]++;
        }

        //sliding window
        let left = 0
        for(let right = 0; right < s2.length; right++){
            const index = s2[right].charCodeAt(0) - "a".charCodeAt(0);
            windowCount[index]++;
            
            if(right - left + 1 > s1.length){
                const index = s2[left].charCodeAt(0) - "a".charCodeAt(0);
                windowCount[index]--;
                left++;
            }

            if(this.isSameArray(s1Count, windowCount)){
                return true;
            }
            
        }
        return false;
        
    }

    isSameArray(arr1, arr2){
        for(let i = 0; i<26; i++){
            if(arr1[i]!==arr2[i]){
                return false;
            }
        }
        return true
    }
}
