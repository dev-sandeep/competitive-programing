const arr = [0, -1, 2, -3, 1];
// we have to find the triplets which could make the sum 0
// Note: never use bad named variables
// From: https://www.programiz.com/javascript/online-compiler/
/**
 * Approach #1: We could use DP, with the help of recursion
 * Idea: loop throgh the main array and the pass it to the next recursion
 * Complexity: O(n)
 * Performance: Memoization
 * 0 -> [-1,2,-3,1], [0,-1] -> ....
 * 
 * @todo - check how to do memoization
 */
 
 /**
  * Approach #2: We could sort the array and then try to find the triplets, using binary search
  * > Sort the array, wih O(nlogn) 
  * > Select 2 elements with O(n2) and then find the 3rd element with binary search
  * > O(n2) + O(nlogn)
  */
 
 /**
  * Approach #3: With the help of an object
  * > Put every thing in the object with number of times they exists 
  * > Select 2 elements with O(n2) and then for 3rd element check, what elements would satify the condition of making the sum to zero, and then check if you could find it
  * > Catch - While selecting with 2 loop, we may have to decrease the count by 1 from the object 
  */
 
 const memo_main = (arr, level = 0) => {
     // traverse through the array to get the next set of array
     for(let ind arr){
         //remove the selected index | also check if this no more than 3rd level
         if(level < 3){
            let remaining_array = [...arr.slice(0,ind), ...arr.slice(ind+1)]
            main(remaining_array, level+1);   
         }
     }
 }
 
 const main = ()=>{
    
 }
 
 main(arr);
 
