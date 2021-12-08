// https://www.geeksforgeeks.org/count-strings-can-formed-using-b-c-given-constraints/
/**
 * Find out all the combinations with a, b and c such that there could be at max 1b and 2c
 * e.g. 3 - 
 * bbc - Invalid
 * bac - valid
 * aac - valid
 * ccc - invalid
 * Idea is to make a recursive function
 * Complexity O(2^n)
 * Performance - Memoization
 */
    
let main_arr = [];
const main = (str = '', num = 0)=>{
    // base case
    if(num < 3){
        main(str+'a', num+1);
        //check if there is b in the present str
        if(str.indexOf('b') == -1)
            main(str+'b', num+1);
        //check if there are no already 2 c
        if(str !== 'cc')
            main(str+'c', num+1);
    }else{
        main_arr.push(str);
    }
}

main();
console.log(main_arr.length);
