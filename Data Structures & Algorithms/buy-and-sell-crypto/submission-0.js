class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // dp: everyday, the maxProfit is max or prices[i] - minPrice
        let minPrice = Infinity;
        let maxProfit = 0;
        for(let price of prices){
            minPrice = Math.min(price, minPrice);
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
        return maxProfit
        
    }
}
