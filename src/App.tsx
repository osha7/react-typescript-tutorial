import React from 'react';
// import React, { Component } from 'react' (((and remove React. below after class)))
import logo from './logo.svg';
import './App.css';
import Message from './message'


class App extends React.Component<any> {
  // ^pass a type to component could be <any> or <{}>
  componentWillMount() {
    // ^before (((this is out of date funciton)))
    console.log('Almost There...')
  }

  componentDidMount() {
    // ^once mounted
    console.log('Finally...hello!')
  }

  render() {
    return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            
                <Message/>
            
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
