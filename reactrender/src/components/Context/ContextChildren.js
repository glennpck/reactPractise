import React, {useContext} from 'react'
import { CountContext } from './ContextParent'

export const ChildA = () => {
    console.log("ChildA Render")
    return (
        <>
        <div>Child A</div>
        <ChildB />
        </>
    )
}

export const ChildB = () => {
    console.log("ChildB Render")
    return (
        <>
        <div>Child B</div>
        <ChildC />
        </>
    )
}

export const ChildC = () => {

    const count = useContext(CountContext)
    console.log("ChildC Render")
    return (
        <>
        <div>Child C count = {count}</div>
        </>
    )
}