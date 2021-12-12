// https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/
/**
 * Find the longest substring with k unique strings
 * str = "aabbcc"
 * k = 2
 * ans = "aab"
 * 
 * Idea - put everything in a object and then get it
 */
    
const str = "aabbcc";
const k = 2;
const main = ()=>{
    let i = 0, uniq_char = 0;
    let obj = {}, final_str = "";
    while(uniq_char <= k && i < str.length){
        if(!obj[str[i]]){
            obj[str[i]] = true;
            uniq_char++;
        }
        final_str += str[i];
        i++;
    }
}

main();
console.log(final_str);
