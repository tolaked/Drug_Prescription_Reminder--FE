import React from 'react'
import { Route } from "react-router-dom";
import Header from '../../reusables/Header'
import '../../assets/styles/styles.css'
import Background from '../../assets/images/background-image.jpeg'
import Login from '../auth/Login'
import Register from '../auth/Register'

function homepage() {
    return (
        <div>
            <Header/>
            <div className='left-side'>
               <section className='welcome-note'>
                   <div>
                   <h2>Welcome to pilltol app</h2>
                   <h4>An app that helps you keep track of your drug prescriptions</h4>
                   </div>
                   <img className='app-image' src={Background} alt='app-image'/>
               </section>
               </div>
               <Route exact path='/' component={Login}/>
               <Route exact path='/register' component={Register}/>
               
        </div>
    )
}

export default homepage
