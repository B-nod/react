import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetch = () => {
  const [posts,setPost] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err=> console.log(err))

    },[])
  return (
    <>
    {posts.map((item)=>(
      <div key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
      </div>
    ))}
    </>
  )
}

export default DataFetch