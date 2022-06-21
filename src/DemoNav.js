 import React from 'react'
import { Link } from 'react-router-dom'
 
 const DemoNav = () => {
   return (
     <>
     <header>
         <h2>Title</h2>
         <nav>
             <ul>
                 <li><Link to="/">FirstPage</Link></li>
                 <li><Link to="/test">SecondPage</Link></li>
                 <li><Link to="/form">Form</Link></li>
             </ul>
         </nav>
     </header>
     </>
   )
 }
 
 export default DemoNav