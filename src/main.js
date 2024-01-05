// import React from 'react'
// import { ReactDOM } from 'react';
import {helloworld, othersFunction} from './others'
const  App = () => {
   {
    return React.createElement(
        'h1',
        {style:{color:'red'}},
        'this createElement world',
        helloworld(),
        othersFunction()
     );
   }
} 


// babel  

// const HelloWorld = () => {
//     return(
//         <h1>my name is mrt</h1>
//     )
// }

// const App = () => {
//     return (
//         <React.Fragment>
//             <HelloWorld />
//             <div>this is a fakir react app</div>
//         </React.Fragment>
//     )
// }


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(React.createElement(App));

// root.render(<App />)