class Solution {
    
    sort012(arr, N)
    {
         let zero=0;
         let one=0;
         let two=0;
         for(let i=0; i<N; i++){
             if(0==arr[i]){
                 zero+=1;
             }
             if(arr[i]==1){
                 one+=1;
             }
             if(arr[i]==2){
                 two+=1;
             }
         }
    
    let index=0;
       for(let i=0; i<zero; i++){
           arr[index]=0
           index+=1
       }
       for(let i=0; i<one; i++){
         arr[index]=1
         index+=1
       }
       for(let i=0; i<two; i++){
             arr[index++]=2
       }
   
  
    }
}