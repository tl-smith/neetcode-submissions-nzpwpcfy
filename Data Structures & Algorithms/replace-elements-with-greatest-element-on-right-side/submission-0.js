class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let result = [];


        for(let i = 0; i < arr.length; i++){
          let max = -1;
          console.log(arr[i]);

          for(let j = i + 1; j < arr.length; j++){
            if (arr[j] > max){
                max = arr[j];
                console.log(arr[j]);
                console.log(max);
            }
          }
           result.push(max);  

            console.log(`result is now: [${result}]`);  
            
        }
        return result;
    }
}
