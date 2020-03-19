import React from 'react'
import Header from '../../reusables/Header'
import '../../assets/styles/styles.css'
import Background from '../../assets/images/background-image.jpeg'

const Homepage = ({alt}) => {
    return (
        <div>
            <Header/>
            {alt &&
            <div className='left-side'>
               <section className='welcome-note'>
                   <div>
                   <h2>Welcome to pilltol app</h2>
                   <h4>An app that helps you keep track of your drug prescriptions</h4>
                   </div>
                   <img className='app-image' src={Background} alt='app-image'/>
               </section>
               </div>
}
        </div>
    )
}

export default Homepage
