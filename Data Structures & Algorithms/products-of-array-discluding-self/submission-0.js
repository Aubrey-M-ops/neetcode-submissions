class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
        const res = new Array(nums.length).fill(1);
        let leftProduct = 1;
        for(let i = 0; i < nums.length; i++){
            res[i] *= leftProduct;
            leftProduct *= nums[i]
        }
        let rightProduct = 1;
        for(let j = nums.length - 1; j >= 0; j--){
            res[j] *= rightProduct;
            rightProduct *= nums[j]
        }
        return res;

        
    }
}
