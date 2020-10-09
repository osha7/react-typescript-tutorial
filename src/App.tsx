import React from 'react';
// import React, { Component } from 'react' (((and remove React. below after class)))
import logo from './logo.svg';
import './App.css';
import Message from './message'

// const initialState = {
//   name: 'Manny',
//   message: 'Typescript is cool!'
// }

// type State = Readonly<typeof initialState>
// Readonly: items that can only be read once created // can't change it

// interfaces:  how shape of our data will look like and
// the types of our properties
// only used by compiler to check for types (right types for compiling)
class App extends React.Component {
// class App extends React.Component<any, State> {
  // readonly state: State = initialState
  // ^pass a type to component could be <any> or <{}>
  // componentWillMount() {
  //   // ^before (((this is out of date funciton)))
  //   console.log('Almost There...')
  // }

  // componentDidMount() {
  //   // ^once mounted
  //   console.log('Finally...hello!')
  // }

  render() {
    return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            
                {/* <Message name='Manny' message='This is a simple message' /> */}
                <Message />
                {/* <Message name={this.state.name} message={this.state.message} /> */}

              </header>
            </div>
          )
        }
      }
      
      export default App;
      

// class App extends React.Component {
//   render() {
//     // let firstValue: string = 'Manny'
//     // let firstValue: number = 34
//     // let firstValue: boolean = true
//     // let firstValue: number[] = [2, 3, 56] 
//     // ^^ is object
//     // let firstValue: Array<number> = [2, 3, 56]
//     // let firstValue: Array<string> = ['2', '3', 'manny']

//     // tuple - type of array that you can insert multiple types
//     // let aTuple: [string, number] = ['Manny', 34]    
//     // ^^ didn't work

//     // enum - similar to objects, enum multiple items and initialize in enum itself
//     // enum Codes {first = 1, second = 2}

//     // any
//     // let firstName: any = 'Manny'
//     // let firstName: any = 34

//     // void - ex: void return type for functions
//     // const warning = (): void => {
//     //   console.log('Warning')
//     // }


//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           {/* <p> */}
//             {/* The value {firstValue} is of {typeof firstValue} type! */}
//             {/* The value {aTuple[1]} is of {typeof aTuple[1]} type! */}
//             {/* The value {firstName} is of {typeof firstName} type! */}
//           {/* </p> */}
//           <Message/>
      
//         </header>
//       </div>
//     )
//   }
// }

// export default App;
