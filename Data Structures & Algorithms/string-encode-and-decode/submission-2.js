class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       const encoded_string = strs.map(str => (`${str.length}#${str}`)).join('');
        return encoded_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let pointer = 0;
        const decoded_arr = [];
        let countStr = '';
        while(pointer < str.length){
            while(str[pointer] !== '#'){
                countStr += str[pointer];
                //update pointer
                pointer++;
            }
            if(str[pointer] === '#' && countStr !== ''){
                const count = Number(countStr);
                const _str = str.slice(pointer+1, pointer+count+1)
                decoded_arr.push(_str);

                //update pointer
                pointer += 1 + count;
                
                // reset
                countStr = '' 

            }
        }
        return decoded_arr;
    }
}
