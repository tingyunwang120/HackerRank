function surfaceArea(A) {
  let sum = 0
  for(let i = 0; i < A.length; i++){
    for(let j = 0; j < A[i].length; j++){
      let ii = i - 1
      let jj = j
      if(ii < 0)
        sum = sum + A[i][j]
      else if (A[i][j] - A[ii][jj] > 0)
        sum = sum + A[i][j] - A[ii][jj] 
      
      ii = i + 1
      jj = j
      if(ii > A.length - 1)
        sum = sum + A[i][j]
      else if (A[i][j] - A[ii][jj] > 0)
        sum = sum + A[i][j] - A[ii][jj]

      ii = i
      jj = j - 1
      if(jj < 0)
        sum = sum + A[i][j]
      else if (A[i][j] - A[ii][jj] > 0)
        sum = sum + A[i][j] - A[ii][jj]

      ii = i
      jj = j + 1
      if(jj > A[i].length - 1)
        sum = sum + A[i][j]
      else if (A[i][j] - A[ii][jj] > 0)
        sum = sum + A[i][j] - A[ii][jj]
    

      
    }
  }
  sum = sum + (A.length * A[0].length)*2
  return sum
}

