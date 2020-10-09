import React from 'react'


// HOC
// Higher Order Component
// ---functions that take a component and in turn return a new one

const initialState = {
    name: 'Manny',
    // message: 'Typescript is cool!'
    message: 'HOCs are cool!'
}

type State = Readonly<typeof initialState>

// don't use HOC's inside render methods
// HOC's are useful when an application needs to grow
const messageHoc = (WrappedComponent: any) => {
    class HOC extends React.Component<{}, State> {
        readonly state: State = initialState

        render(){
            return(
                <WrappedComponent name={this.state.name} message={this.state.message} />
            )
        }
    }
    return HOC
}

export default messageHoc;