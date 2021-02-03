function encryption(s) {
    s = s.split(" ").join("")
    let l = s.length
    let left = Math.floor(Math.sqrt(l))
    let right = Math.ceil(Math.sqrt(l))
    if (left * right < l)
        left = right
    let str = []
    let i = 0

     while(i < l){
      
      for (let j=0; j<right; j++){
        if(str[j] == undefined)
          str[j] = ''
        str[j] = str[j] + s.charAt(j+i)  
       }
        i = i + right

    }
  return str.join(' ')   
}
