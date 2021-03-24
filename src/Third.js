const swap = (arr) => {
    if (!arr) return ''
    if (!arr.length) return ''
    if (arr.length === 1) return `${arr[0]}`

    const firstItem = arr[0]
    const leftArray = arr.slice(0, firstItem)
    const rightArray = arr.slice(firstItem)
    return [...rightArray, ...leftArray].reduce((c, i) => c + i, '')
}


export default swap