import React from 'react'
import landing_page_image from '../assets/back-twitter 1.png'
import logo from '../assets/twitter-logo-4 1.png'
import gLogo from '../assets/google-icon 1.png'
import aLogo from '../assets/logo-apple 1.png'
import './style.css'
import ProviderBox from '../components/providerBox'
import { Link } from 'react-router-dom'


function LandingPage() {

  return (
    // All of landing page inside this main tag
    <main className='landing__page'>

    <section className="landing__right">
            <img src={landing_page_image} alt="img" />
        </section>

        <section className="landing__left">
            <div className="logo__container">
                <img src={logo} alt="logo" />
            </div>

            <div className="container">
                <div className="headings">
                    <h1>Happening Now</h1>
                    <h3>Join Twitter Today</h3>
                </div>
                
                {/* make a comonents for all the login boxes */}
                <ProviderBox imageSrc={gLogo} label="Sign up with Google"/>
                <ProviderBox imageSrc={aLogo} label="Sign up with Apple"/>
                <ProviderBox label="Sign up with phone or email"/>

                <p className='privacy__terms'>By signing up you agree to the <a >terms of service</a> and <a>Privacy policy</a>, including <a>cookies use</a></p>
                <p className='privacy__terms'>Already have an account? <Link to="/login">Login</Link></p>
                
            </div>
        </section>

    </main>

    
  )
}

export default LandingPage