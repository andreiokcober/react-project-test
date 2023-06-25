export const getPages = (totalCount,limits) => {
    return Math.ceil(totalCount / limits)
}


export const getPageArray = (totalPage) => {
    const result = []
    for(let i = 0;i<=totalPage;i++){
        result.push(i + 1)
    }
    return result
}