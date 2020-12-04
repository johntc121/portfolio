import React from 'react'
import './Home.css'
import Projects from '../Projects/Projects'
import Intro from '../Intro/Intro'

const Home = () => {
    return (
        <div>
            <div className="intro"><Intro /></div>
            <Projects />
        </div>
    )
}

export default Home;
