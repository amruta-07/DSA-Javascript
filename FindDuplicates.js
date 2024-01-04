class Solution {
    
    duplicates(a, n)
    {
        a.sort((a,b)=>{
            return a-b;
        })
      const map=new Map();
      for(let i=0; i<n; i++){
          if(map.has(a[i])){
            map.set(a[i],map.get(a[i])+1) 
          }
          else{
              map.set(a[i],1)
          }
      }
      let result=[];
      for(let key of map.keys()){
          if(map.get(key)>1){
              result.push(key)
          }
      }
      if(result.length ==0){
          return [-1];
      }
      else{
          return result;
      }
    }
}