export const shuffleArray = (arr: string[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let k = arr[i]
        arr[i] = arr[j]
        arr[j] = k
    }

    return arr
}
