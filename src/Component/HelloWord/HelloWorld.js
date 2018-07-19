import React, { Component } from 'react'

// export default class HelloWorld extends Component {
//     render() {
//         return <p> HelloWorld </p>
//     }
// }

export const HelloWorld = ({nombre, apellido}) => {
     return (<p>Hello World {nombre} {apellido} </p>)
}