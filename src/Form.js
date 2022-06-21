import React from 'react'
import DemoNav from './DemoNav'

const Form = () => {
  return ( 
    <>
    <DemoNav/>
    <form className='shadow p-3'>
        <div className='col-6 mb-3'>
            <label htmlFor="fullname">FullName</label>
            
            <input type='text' id='fullname' placeholder='fullname' className='form-control'/>
        </div>
        <div className='col-6 mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Email' className='form-control'/>
        </div>
        <div className='col-6 mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Password' className='form-control'/>
        </div>
        <button className='btn btn-primary'>Register</button>
    </form>
    </>
  )
}

export default Form