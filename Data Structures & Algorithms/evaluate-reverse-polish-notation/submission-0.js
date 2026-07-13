class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for(let token of tokens){
            if(!["+","-", "*", "/"].includes(token)){
                stack.push(Number(token))
            }else{
                let result = 0
                const b = stack.pop();
                const a = stack.pop();
                switch(token){
                    case "+":
                        result = a + b;
                        break;
                    case "-":
                        result = a - b;
                        break;
                    case "*":
                        result = a * b;
                        break
                    case "/":
                        result = Math.trunc(a/b)
                        break;
                }
                stack.push(result)
            }
        }
        return stack.pop()
    }
}
