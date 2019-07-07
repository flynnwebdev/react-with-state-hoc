import React from 'react';

export let state
export let setState

export default function withState(WrappedComponent) {
    return class App extends React.Component {
        state = {
            value: 99,
            name: 'Matt'
        }
        render() {
            state = this.state
            setState = (newState) => this.setState({ ...this.state, ...newState })

            console.log(state)

            return <WrappedComponent {...this.props} />
        }
    }
}
