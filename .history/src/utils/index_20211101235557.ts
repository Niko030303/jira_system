import { useEffect, useState } from "react";

export const isFalsy = (value: any) => value === 0 ? false : !value

//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object: object) => {
    const result = {...object}
    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
};

export const useMount = (callback: ()=>void) => {
    useEffect(() => {
        callback()
    }, [])
};

export const useDebounce = (value: any, delay: ) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        //每次在value变化以后，设置一个定时器
        const timeout = setTimeout(() => setDebouncedValue(value), delay)
        //每次在上一个useEffect处理完以后再运行
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debouncedValue
}

