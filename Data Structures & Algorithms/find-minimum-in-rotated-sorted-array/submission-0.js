class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0, right = nums.length - 1;
        //util left = right
        // until there is only one number in the range
        // not like normal binary search, which is to find a specific number
        while(left < right){
            const mid = Math.floor((left + right) / 2);
            if(nums[mid] > nums[right]){
               left = mid + 1;
            }else{
                // mid might be the smallest
                right = mid;
            }
        }
        return nums[left];
    }
}
