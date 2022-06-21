import React,{useState, useEffect} from 'react'
import Main from './Main'

const NewTest = () => {
    const [count,setCount] = useState(0)
    const [value,setValue] = useState(1)

    useEffect(()=>{
        alert('this is the effect after page render')
    },[count])
  return (
    <>
    <h2>{count}</h2>
    <button className='btn btn-success' onClick={()=>setCount(count+1)}>Click</button>

    <h2>{value}</h2>
    <button className='btn btn-info' onClick={()=>setValue(value+2)}>Click</button>

    <Main/>
    </> 
  )
}

export default NewTest