function climbingLeaderboard(scores, alice) {
 // scores = scores.filter((v, i) => scores.indexOf(v) == i)
 let new_scores = []
 for (let i = 0; i < scores.length  ; ++i) {
        if (scores[i+1] != scores[i]){
          new_scores.push(scores[i])
        } 
    } 
  scores = new_scores

  let ranks = []
  let i = 0
  
  for(let i = 0; i < alice.length; i++){
    let j = scores.length - 1
    while(alice[i] >= scores[j] && j >= 0){    
      j--
      scores.pop()    
    }
    //console.log(scores)
    ranks.push(j + 2)
  }

  return ranks
}
