class Solution {
    hasArrayTwoCandidates(arr,n,x){
        let set=new Set();
        for(let i=0; i<n; i++){
         let diff=x-arr[i]
         if(set.has(diff)){
            return true; 
         }
         set.add(arr[i])
            
        }
        return false;
    }
}