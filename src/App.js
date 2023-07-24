// // // import React , {useState} from 'react';





// // // export default function App() {

// // // // const [state, setState] = useState({count:4, theme:'blue'})
// // // const [count, setCount] = useState(4)
// // // const [theme,setTheme] = useState('blue')


// // // function decrementCount() {
// // //  setCount(prevCount => prevCount -1)

// // // }
// // // function incrementCount() {
// // //   setCount(prevCount=> prevCount +1 )
// // //   setTheme('red')

// // // }


// // //   return (
// // //     <>
// // //    <button onClick={decrementCount}>-</button>
// // //    <span>{count}</span>
// // //    <span>{theme}</span>
// // //    <button onClick={incrementCount}>+</button>


// // //     </>
// // //   )

// // // }



// // // import React , {useState, useEffect} from 'react';

// // // export default function App(){
// // // const [resourceType, setResourceType] = useState('posts')
// // // const [items, setItems] = useState([])


// // // useEffect(()=>{
// // //   console.log('resource changed')

// // //   return () => {
// // //   console.log('return from resource changed')
// // //   }

// // // },[resourceType])
// // // return(
// // //   <>
// // //   <div>
// // //     <button onClick={()=> setResourceType('posts')}>Posts</button>
// // //     <button onClick={()=> setResourceType('users')}>Users</button>
// // //     <button onClick={()=> setResourceType('comments')}>Comments</button>
// // //   </div>
// // //   <h1>{resourceType}</h1>

// // //   </>
// // // )

// // // }


// // import React, {useState , useMemo, useEffect} from 'react'

// // export default function App(){
// //   const [number, setNumber] = useState(0)
// // const [dark, setDark] = useState(false)
// // const doubleNumber = useMemo(() => {
// //  return  slowFunction(number)
// // }, [number])

// // const themeStyles = useMemo(()=>{
// //   return {backgroundColor: dark? 'black' : 'white',
// //   color: dark? 'black' : 'white'}

// // },[dark])
// // useEffect(() =>{
// //   console.log('Theme Changed')
// // }, [themeStyles])

// // return(

// // <>
// // <input type="number" value={number} onChange={e=> setNumber(parseInt(e.target.value))} />

// // <button onClick={()=> setDark(prevDark=> !prevDark)} >Change Theme</button>
// // <div style={themeStyles}>{doubleNumber}</div>
// // </>
// // )
// // }

// // function slowFunction(num){
// //   console.log('Calling slow function')
// //   for(let i = 0; i <= 100000000; i++){}
// //     return num*2
// //   }


// import React, { useEffect, useState, useRef } from "react";

// export default function App(){
//   const [name,setName] = useState('')
// const inputRef = useRef()
// const prevName = useRef(' ')

// useEffect(()=>{
//   prevName.current=name
// },[name])

// function focus(){
//   inputRef.current.focus()

// }

// return (
//   <>
//   <input ref={inputRef} value={name} onChange={e=> setName(e.target.value)}/>
//   <div>My name is {name} and it used to be {prevName.current}</div>
//   <button onClick={focus}>Focus</button>

//   </>
// )

// }


import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvider } from './ThemeContext';

export default function App() {
  

  return (
    
      <ThemeProvider >        
        <FunctionContextComponent />        
      </ThemeProvider>

    
  )
}