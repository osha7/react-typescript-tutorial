import React from 'react'
import messageHoc from './hoc'

const example = (props: any): any => <p>{props.name}, {props.message}</p>

const Message = messageHoc(example)

export default Message;

// functional component
 
// define props in interface
// pass them into component
// prevents any security issues (if not type defined) or execution errors in data
// Example for default or optional props: Interface Warrior { money?: number } ===== use ? at end of prop name ==== then you don't have to pass initial value (no money yet)

// interface UserMessage {
//     name: string,
//     message: string
//     // message: number ===> would break code because expecting number but gave string
// }

// const Message = (props: {message: string} ): any => {
// const Message = (props: UserMessage): any => {
//     return (
//         // <p>This is a quick message!!!</p>
//         // <p>{props.message}</p>
//         <p>{props.name}, {props.message}</p>
//     )
// }

// export default Message;
