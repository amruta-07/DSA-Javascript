class Solution {
  kthSmallest(arr,l,r,k){
    arr.sort((a,b)=>{
      return a-b;  
    })
    return arr[k-1];
  }
}