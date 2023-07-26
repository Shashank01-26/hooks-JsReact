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


// import React from 'react';
// import FunctionContextComponent from './FunctionContextComponent';
// import { ThemeProvider } from './ThemeContext';

// export default function App() {


//   return (

//       <ThemeProvider >        
//         <FunctionContextComponent />        
//       </ThemeProvider>


//   )
// }

// import React, { useReducer } from 'react';

// const ACTIONS={
//   INCREMENT:'increment',
//   DECREMENT:'decrement',
// }

// function reducer(state, action) {

//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return { count: state.count + 1 }
//     case ACTIONS.DECREMENT:
//       return { count: state.count - 1 }
//     default:
//       return state;

//   }
// }


// export default function App() {

//   const [state, dispatch] = useReducer(reducer, { count: 0 })

//   function increment() {
//     dispatch({ type: ACTIONS.INCREMENT })
//   }

//   function decrement() {
//     dispatch({ type: ACTIONS.DECREMENT })
//   }

//   return (
//     <>
//       <button onClick={decrement}>-</button>
//       <span>{state.count}</span>
//       <button onClick={increment}>+</button>

//     </>
//   )

// }

// __________________________________
// |    TODO_APP                     |                           
// |            USING                |             
// |                  useReducer     |
// |_________________________________| 


// import React, { useState, useReducer } from 'react';
// import Todo from './Todo';

// export const ACTIONS = {
//   ADD_TODO: 'add-todo',
//   TOGGLE_TODO: 'toggle-todo',
//   DELETE_TODO: 'delete-todo'
// }

// function reducer(todos, action) {
//   switch (action.type) {
//     case ACTIONS.ADD_TODO:
//       return [...todos, newTodo(action.payload.name)]
//     case ACTIONS.TOGGLE_TODO:
//       return todos.map(todo => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, complete: !todo.complete }
//         }
//         return todo;
//     })
//     case ACTIONS.DELETE_TODO:
//     return todos.filter(todo => todo.id !== action.payload.id)
//     default:
//   return todos;
// }

// }

// function newTodo(name) {
//   return { id: Date.now(), name: name, complete: false }
// }


// export default function App() {
//   const [state, dispatch] = useReducer(reducer, [])
//   const [name, setName] = useState('')

//   function handleSubmit(e) {
//     e.preventDefault()
//     dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
//     setName('')
//   }

//   console.log(state)

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
//       </form>
//       {state.map(todo => {
//         return <Todo key={todo.id} todo={todo} dispatch={dispatch} />

//       })}
//     </>
//   )

// }


import React, { useState, useCallback } from 'react'
import List from './List.js'

export default function App(){
    const [number,setNumber] = useState(1)
    const [dark,setDark] = useState(false)

    const getItems = useCallback((incremer)=>{
        return [number+incremer, number+incremer+1, number+2+incremer]
    },[number])


const theme = {
    backgroundColor:dark? '#333':'#fff',
    color:dark?'#fff': '#333',
}
return(
    <div style ={theme}>
<input 
type='number'
value={number}
onChange={e => setNumber(parseInt(e.target.value))}
/>
<button onClick={()=> setDark(prevDark=> !prevDark)}>Toggle theme</button>
<List getItems={getItems}/>
    </div>
)

}