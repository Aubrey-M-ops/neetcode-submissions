class MinStack {
    constructor() {
        // 要同步栈，stack pop了一个之后，剩下的getMin仍然是当前最小
        this.stack = [];
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if(this.min.length === 0){
             this.min.push(val)
        }else{
            const curMin = this.min[this.min.length - 1]
            this.min.push(Math.min(curMin, val));
        }
    }

    /**
     * @return {void}
     */
    pop() {
       this.stack.pop();
       this.min.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1]
    }
}
