function gridSearch(G, P) {
  let arr = []
  for(let i = 0; i < G.length - P.length + 1; i++){
    if (G[i].includes(P[0])){
   
      let k = 0
      let col = []
      do{
        let index = k == 0 ? G[i].indexOf(P[0]) : G[i].indexOf(P[0],col[k-1]+1)
      
        if( index >= 0)
          col.push( index)
        k++
        
      }while(col[k-1] < (G[0].length-P[0].length+1))

      let row = i
      arr = G.slice(i,i+P.length)
      for(let colI = 0; colI < col.length; colI++){
        arr = G.slice(i,i+P.length)
        if(arr.length >= P.length){
          for(let j = 0; j < P.length; j++)
            arr[j] = arr[j].substring(col[colI],col[colI] + P[0].length)
      }
     
     
        if (JSON.stringify(arr) == JSON.stringify(P))
          return 'YES'
      }
      
    }
  }
  return 'NO'
    
}
