import React from 'react'
import DemoNav from './DemoNav'
import './first.css'

const First = () => {
  return (
    <>
    <DemoNav/>
    <h1 className='demo'>This is first component</h1>
    <h2 className='title'>This is just a heading</h2>
    <hr/>
    <div className='col-6'>
      <img src='/images/abc1.jpg' alt='no images' title='image title' className='img-fluid'/>
      <img src='/images/mountain.jpg' alt='no images' title='image title' className='img-fluid'/>
    </div>
    </>
  )
}

export default First