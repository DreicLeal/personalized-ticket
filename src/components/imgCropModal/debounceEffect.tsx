import { DependencyList, useEffect } from "react"

export const useDebounceEffect = (
    fn:() => void,
    waitTime:number,
    deps?:DependencyList 
) => {
useEffect(() => {
    const t =  setTimeout(() => {
        fn.apply(undefined, deps)}, waitTime
    )
    return () => {
        clearTimeout(t)
    }
}, deps)
}