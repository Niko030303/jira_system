export const isFalsy = (value) => value === 0 ? ture : !!value

//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object) => {
    const result = {...object}
    Object.keys(object).forEach(key => {
        const value = object[key]
        if (isFalsy) {
            delete result[key]
        }
    })
    return result
}