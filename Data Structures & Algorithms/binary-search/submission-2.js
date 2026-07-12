class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // 左闭右开区间：the interval is closed on the left and open on the right
        let left = 0, right = nums.length - 1;
        while(left <= right){
            const mid = Math.floor((left + right) / 2);
            if(nums[mid] === target){
                return mid;
            }else if(nums[mid] < target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        return -1
    }
}
