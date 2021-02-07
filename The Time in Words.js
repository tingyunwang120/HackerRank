function timeInWords(h, m) {

let a = [
    '', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ]
  if (m != 0){
    
    let b = ['', '', 'twenty', 'half']

    let mm = m > 30 ? 60 - m : m
    let hh = m > 30 ? h + 1 : h
    hh = a[hh]
     let w = ''
    if (mm > 1 && mm != 15 && mm != 30)
      w = m > 30  ? 'minutes to' : 'minutes past'
    else if (mm == 1)
      w = m > 30  ? 'minute to' : 'minute past'
    else
      w = m > 30  ? 'to' : 'past'
    let min = ''
  
    if (mm > 0 && mm < 20)
      min = a[mm]
  
    else if( mm >= 20 && mm % 10 == 0)
      min = b[mm / 10]
  
    else if (mm > 20 && mm % 10 != 0)
      min = b[Math.floor(mm / 10)] +' ' + a[mm % 10]

    return `${min} ${w} ${hh}`
  
  }
  else if (m == 0){
    return `${a[h]} o' clock`
  }
}
