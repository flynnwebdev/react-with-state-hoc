import React from 'react'
import IncrementButton from './IncrementButton';
import { state } from './State'

export default function ShowValue() {
    const { value, name } = state

    return (
        <div>
            <h1>Hi {name}!</h1>
            <h2>Value is: {value}</h2>
            <IncrementButton />
        </div>
    )
}
