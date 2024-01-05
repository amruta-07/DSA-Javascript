class Solution {
  transitionPoint(arr, n) {
    for(let i=0; i<n; i++){
        if(arr[i]==1){
           return i 
        }
    }
    return -1;
  }
}