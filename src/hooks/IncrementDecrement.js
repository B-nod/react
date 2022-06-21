import React,{useState} from 'react'

const IncrementDecrement = () => {
    const [num, setNum] = useState(1)
    //here num is a variable name which has initial value 1
    // here setNum is a function used to change the state of num
    //[] -> means array destructuring 

    // const increment = () =>(
    //     setNum(num+1)
    // )
  return (
    <>
    <h2>The Number is : {num}</h2>
    {/* <button className='btn btn-primary' onClick={increment}>Increment</button> */}

    <button className='btn btn-primary' onClick={()=>setNum(num+1)}>Increment</button> &nbsp; &nbsp;
    
    {num > 1 && <button className='btn btn-danger' onClick={()=>setNum(num-1)}>Decrement</button>}
    </>
  )
}

export default IncrementDecrement