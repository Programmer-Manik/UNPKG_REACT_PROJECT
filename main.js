const helloworld = () => {
    {
        return React.createElement('p',{},'helloworld')
    }
}
const  App = () => {
   {
    return React.createElement(
        'h1',
        {style:{color:'red'}},
        'this createElement world',
        helloworld()
     );
   }
} 

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(React.createElement(App));