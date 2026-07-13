class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0, right = matrix[0].length - 1;
        let top = 0, bottom = matrix.length - 1;
        let rowId = 0;

        while(top <= bottom){
            const mid = Math.floor((top + bottom) / 2);
            if(target > matrix[mid][0]){
                top = mid + 1;
            } else if(target < matrix[mid][0]){
                bottom = mid - 1;
            } else{
                return true;
            }
        }
        rowId = bottom;
        if(bottom < 0) return false;

        while(left <= right){
            const mid = Math.floor((left + right) / 2);
            if(target == matrix[rowId][mid]){
                return true;
            }else if(target > matrix[rowId][mid]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        return false;
    }
}
