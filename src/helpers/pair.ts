export const assignPairs = <T,>(list: T[]) => {
    const pairs: T[][] = []
    let pair: T[] = []
    for (let i = 0; i < list.length; i++) {
        const player = list[i]
        pair.push(player)

        if (pair.length === 2) {
            pairs.push(pair)
            pair = []
        }
    }
    return pairs
}
