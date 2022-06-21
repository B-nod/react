import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import First from './First'
import Form from './Form'
import DataFetch from './hooks/DataFetch'
import IncrementDecrement from './hooks/IncrementDecrement'
import NewTest from './hooks/NewTest'
import Homepage from './pages/Homepage'
import Test from './Test'

const MyRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/test" element={<Test/>} />
            <Route path="/form" element={<Form/>} />

            {/* hooks */}
            <Route path='/hook' element={<IncrementDecrement/>} />
            <Route path='/effect' element={<NewTest/>}/>
            <Route path='/datafetch' element={<DataFetch/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoute