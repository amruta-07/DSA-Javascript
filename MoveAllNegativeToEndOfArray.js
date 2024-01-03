class Solution{
    segregateElements(arr,n){
        let positiveArray=[];
        for(let i=0; i<n; i++){
            if(arr[i]>0){
                positiveArray.push(arr[i]);
            }
            
        }
        for(let i=0; i<n; i++){
            if(arr[i]<0){
                positiveArray.push(arr[i]);
            }
        }
        for(let i=0; i<positiveArray.length; i++){
            arr[i]=positiveArray[i]
        }
    }
}