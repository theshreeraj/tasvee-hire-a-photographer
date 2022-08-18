import React from 'react'
import Appmcp from '../Components/Appmcp'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Services from '../Components/Services'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Appmcp />
            <Footer />
        </div>
    )
}

export default Home