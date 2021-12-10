// https://www.geeksforgeeks.org/find-subarray-with-given-sum/
/**
 * Find the subarray with the given sum
 * arr = 1,4,20,3,10,5
 * sum = 33
 * ans = 2,4
 * 
 * Idea - have 2 pointers and move them to get the sum in between them, while this_sum <= sum
 */
    
let arr = [1, 4, 0, 0, 3, 10, 5];    
const sum = 7;
const main = ()=>{
    let i = 0, j = 1, t_sum = arr[i];
    while(j < arr.length){//while j is not at the end
       
        if(t_sum == sum){
            console.log(i,j);
            return;
        }
        
        if(t_sum > sum){
            t_sum -= arr[i]
            i++;
        }else{
            t_sum += arr[j];
            j++;   
        }
    }
}

main();
