import React from 'react'
import { state, setState } from './State'

export default function IncrementButton() {
    const { value } = state

    return (
        <div>
            <button onClick={() => setState({ value: value + 1 })}>Add 1 to {value}</button>
        </div>
    )
}
