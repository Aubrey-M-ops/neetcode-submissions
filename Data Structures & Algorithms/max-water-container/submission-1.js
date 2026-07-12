class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // the amount of water depends on the shorter bar, so move the shorter side
        // Greedy means: always choosing the better option in the whole process
        let left = 0, right = heights.length - 1;
        let max = 0;
        while(left < right){
            const amount = Math.min(heights[left], heights[right]) * (right - left);
            max = Math.max(amount, max);
            if(heights[left] < heights[right]){
                left++;
            }else{
                right--
            }

        }
        return max;
        
    }
}
