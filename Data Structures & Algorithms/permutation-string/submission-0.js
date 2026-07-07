class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        // small big = freq directory
        const small = new Array(26).fill(0);
        const big = new Array(26).fill(0);

        const getCharIndex = (char) => (char.charCodeAt(0) - 'a'.charCodeAt(0))

        const getArrEqual = (arr1, arr2) => {
            for(let i = 0; i < 26; i++){
                if(arr1[i] !== arr2[i])return false;
            }
            return true;
        }

        // init a small window in big window
        for(let i = 0; i < s1.length; i++){
            small[getCharIndex(s1[i])]++;
            big[getCharIndex(s2[i])]++;
        }

        if(getArrEqual(small, big)) return true;

        for(let right = s1.length; right < s2.length ; right++){
            const left = right - s1.length;
            big[getCharIndex(s2[right])]++;
            big[getCharIndex(s2[left])]--;
            if(getArrEqual(small, big)) return true;
        }

        return false;
        
    }
}
