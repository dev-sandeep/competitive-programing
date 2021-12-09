// https://www.geeksforgeeks.org/find-largest-word-dictionary-deleting-characters-given-string//
/**
 * Find the lasrgest dictionary word from the given series
 * Dictionary - "ale", "apple", "monkey", "plea"
 * Sring - "apple"
 * 
 * Idea - With a simple while loop compare the sorted dictionary words 
 */
    
const dict = ["ale", "apple", "monkey", "plea"];
const str = "abpcplea";
let max = 0;
const main = ()=>{
    for(let index in dict){
        let thisDictWord = dict[index];
        let dict_i = 0, str_i = 0;
        while(str_i < str.length && dict_i < thisDictWord.length){
            if(thisDictWord[dict_i] === str[str_i]){
                dict_i++;
            }
            str_i++;
            
            if(dict_i >= thisDictWord.length){
                max = thisDictWord.length > max?thisDictWord.length:max;
            }
        }
    }
}

main();
console.log(max);
