// https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/
/**
 * Find the longest substring with k unique strings
 * str = "aabbcc"
 * k = 2
 * ans = "aab"
 * 
 */
    
const main = ()=>{
    let i = 0, uniq_char = 0;
    let obj = {};
    while(uniq_char <= k){
        if(!str[i] in obj)
            obj[str[i]] = true;
    }
}

main();
