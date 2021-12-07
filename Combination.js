// https://www.geeksforgeeks.org/generate-all-binary-strings-from-given-pattern/
/**
 * Find out all the binary combination for the given number
 * e.g. 3 - 
 * 100
 * 001
 * 010
 * 101
 * 111
 * 000
 * 110
 * 011
 * Idea is to make a recursive function
 * Complexity O(2^n)
 * Performance - Memoization
 */
    
let main_arr = [];
const main = (str = '', num = 0)=>{
    // base case
    if(num < 3){
        main(str+1, num+1);
        main(str+0, num+1);
    }else{
        main_arr.push(str);
    }
}

main();
console.log(main_arr);
