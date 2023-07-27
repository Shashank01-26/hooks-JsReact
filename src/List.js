// import React,{useEffect,useState} from 'react'

// export default function List({getItems}){
//     const [items,setitems] = useState([])

//     useEffect(()=>{
//         setitems(getItems(5))
//         console.log('Updating.....')
//     },[getItems])

//     return items.map(item=> <div key={item}>{item}</div>)
// }