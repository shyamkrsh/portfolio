import React from 'react'
import Intro from '../components/Intro'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'
import Contact from '../components/Contact'
import Footer from '../layouts/Footer'

function HomePage() {
    return (
        <>
            <Intro />
            <Skills />
            <Projects />
            <Education />
            <Certificates />
            <Contact />
        </>
    )
}

export default HomePage