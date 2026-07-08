class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for(let num of nums){
            freq.set(num, (freq.get(num) || 0) + 1)
        }
        // 二维数组
        const bucket = Array.from({length: nums.length + 1}, ()=>[])
        for(let [num, count] of freq.entries()){
            bucket[count].push(num);
        }

        const result = [];

        for(let i = bucket.length - 1; i >=0; i--){
            for(const num of bucket[i]){
                result.push(num);
                if(result.length === k){
                    return result;
                }
            }
        }
        return result;
    }
}

// 复杂度：https://chatgpt.com/s/t_6a4db3ab1a188191917df0f44f0c2226