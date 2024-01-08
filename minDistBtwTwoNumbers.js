class Solution {
  
    minDist(a, n, x, y)
    {
      let x_idx=-1
      let y_idx=-1
      let min=Infinity;
      for(let i=0; i<n; i++){
          if(a[i]==x){
                 x_idx=i; 
          }
          if(a[i]==y){
              y_idx=i;
              
          }
          if(x_idx!==-1 && y_idx!==-1){
              let dis=Math.abs(y_idx-x_idx);
              min=Math.min(dis, min);
              
          }
          
      }
      if(x_idx==-1 || y_idx==-1){
          return -1;
      }
      else{
          return min;
      }
        
    }
}