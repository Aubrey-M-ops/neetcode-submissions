class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    getKey(str){
        const dir = new Array(26).fill(0);
        for(let char of str){
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            dir[index]++;
        }
        return dir.join('#');
    }
    groupAnagrams(strs) {
        const map = new Map();
        for(let str of strs){
            const key = this.getKey(str);
            map.set(key, map.get(key) ? [...map.get(key), str] : [str]);
        }
        // 学到了学到了
        return Array.from(map.values());
        
    }
}
