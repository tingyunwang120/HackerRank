function queensAttack(n, k, r, c, obstacles) {
  let or = ol = ot = od = otr = odr = odl = otl = -1
  for (let i = 0; i < obstacles.length; i++) {

    //right
    if ((obstacles[i][1] < or || or == -1)
      && obstacles[i][0] == r
      && obstacles[i][1] > c) {
      or = obstacles[i][1]
    }

    //left
    else if ((obstacles[i][1] > ol || ol == -1)
      && obstacles[i][0] == r
      && obstacles[i][1] < c) {
      ol = obstacles[i][1]
    }

    //down
    else if ((obstacles[i][0] > od || od == -1)
      && obstacles[i][1] == c
      && obstacles[i][0] < r) {
      od = obstacles[i][0]
    }

    //top
    else if ((obstacles[i][0] < ot || ot == -1)
      && obstacles[i][1] == c
      && obstacles[i][0] > r) {
      ot = obstacles[i][0]
    }

    //top right
    else if ((obstacles[i][0] < otr || otr == -1)
      && obstacles[i][1] > c
      && obstacles[i][0] > r
      && Math.abs(obstacles[i][1] - c) == Math.abs(obstacles[i][0] - r)
    ) {
      otr = obstacles[i][0]
    }

    //down right
    else if ((obstacles[i][0] > odr || odr == -1)
      && obstacles[i][1] > c
      && obstacles[i][0] < r
      && Math.abs(obstacles[i][1] - c) == Math.abs(obstacles[i][0] - r)
    ) {
      odr = obstacles[i][0]
    }

    //down left
    else if ((obstacles[i][0] > odl || odl == -1)
      && obstacles[i][1] < c
      && obstacles[i][0] < r
      && Math.abs(obstacles[i][1] - c) == Math.abs(obstacles[i][0] - r)
    ) {
      odl = obstacles[i][0]
    }

    //top left
    else if ((obstacles[i][0] < otl || otl == -1)
      && obstacles[i][1] < c
      && obstacles[i][0] > r
      && Math.abs(obstacles[i][1] - c) == Math.abs(obstacles[i][0] - r)
    ) {
      otl = obstacles[i][0]
    }



  }
  let moves = 0
  moves += or == -1 ? n - c : or - c - 1 
  moves += ol == -1 ? c - 1 : c - ol - 1
  moves += ot == -1 ? n - r : ot - r - 1
  moves += od == -1 ? r - 1 : r - od - 1


  moves += otr == -1 ? Math.min(n-r,n-c) : otr - r - 1
  moves += odr == -1 ? Math.min(r-1,n-c) : r - odr - 1
  moves += odl == -1 ? Math.min(r-1,c-1) : r - odl - 1
  moves += otl == -1 ? Math.min(n-r,c-1) : otl - r - 1

return moves
  //console.log(moves)
 // console.log(or, ol, ot, od, otr, odr, odl, otl)
}


let n = 5, k = 3, r = 4, c = 3
let obstacles = [[5, 5], [4, 2], [2, 3]]
queensAttack(n, k, r, c, obstacles)
