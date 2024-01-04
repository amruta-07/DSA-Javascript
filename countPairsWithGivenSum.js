class Solution {
    getPairsCount(arr,n,k){
        let count=0;
      const map=new Map();
      for(let i=0; i<n; i++){
          let sum=k-arr[i];
          if(map.has(sum)){
             count+=map.get(sum);
           
          }
          if(map.has(arr[i])){
              
           map.set(arr[i], map.get(arr[i])+1) 
          }
          else{
            map.set(arr[i],1)
          }
      }
      return count;
    }
}