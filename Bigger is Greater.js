function biggerIsGreater(w){
  let i = w.length - 1
  while( i >= 0 && w[i-1] >= w[i]){
    i--
  }
  if( i != 0){
   let warr = w.split('')
  let suffix = w.substring(i)
  let pivot = w.substring(i-1,i)
  
  //get the smallest number in suffix where still greater than pivot
  let temparr = suffix.split('').filter(v=>v>pivot)
  let swapnuminsuffix = temparr.reduce((v,a)=>{if(v<a) a=v; return a},temparr[0])

  let index = suffix.split('').findIndex(v=>v==swapnuminsuffix)+i
 
  //swap
  warr[i-1] = swapnuminsuffix
  warr[index] = pivot

  
  //get new suffixs
  let suffixarr= warr.slice(i)
  //sort suffix
  suffixarr.sort()

  let word = warr.slice(0,i).join('') + suffixarr.join('')
  return word
  }
  else
    return 'no answer'
 
}
