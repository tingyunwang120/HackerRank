function organizingContainers(container) {
    let n = container.length
    let con = []
    let type = []
    for (let i = 0; i < n; i++) {
        con[i] = 0
        type[i] = 0
        for (let j = 0; j < n; j++) {
            con[i] = con[i] + container[i][j]
            type[i] = type[i] + container[j][i]
        }
    }
    con.sort()
    type.sort()
    if(JSON.stringify(con) == JSON.stringify(type))
    return 'Possible'
    else
    return 'Impossible'
}
