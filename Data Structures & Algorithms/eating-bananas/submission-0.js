class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // use binary search to find the proper minEatingSpeed
        // minSpeed = 1, maxSpeed = Math.max(...piles)
        let left = 1, right = Math.max(...piles)
        while(left <= right){
            const mid = Math.floor((left + right) / 2);

            // how many hours
            let hours = 0;
            for(let pile of piles){
                const pileHours = Math.ceil(pile / mid);
                hours += pileHours
            }
            // left is always available and right is when you think is possible
            // so the result is left
            if(hours <= h){
                right = mid - 1;
            }else if(hours > h){
                left = mid + 1
            }
        }
        return left;
    }
    // TIME: O( n + n * log maxPile) = O(n*(1 + log maxPile)) = O(n*log maxPile)
}
