class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const dir = {
            "(":")",
            "[":"]",
            "{":"}"
        }
        for(let char of s){
            if(["[","(","{"].includes(char)){
                stack.push(char);
            }else{
                const leftSide = stack[stack.length - 1];
                if(char === dir[leftSide]){
                    stack.pop();
                }else{
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
