
import './App.css'
import Navbar from './layouts/Navbar'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SkillPage from './pages/SkillPage'
import ProjectPage from './pages/ProjectPage'
import EducationPage from './pages/EducationPage'
import Footer from './layouts/Footer'
import CertificatePage from './pages/CertificatePage'
import ContactPage from './pages/ContactPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/skills' element={<SkillPage />}></Route>
          <Route path='/projects' element={<ProjectPage />}></Route>
          <Route path='/educations' element={<EducationPage />}></Route>
          <Route path='/certificates' element={<CertificatePage />}></Route>
          <Route path='/contacts' element={<ContactPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
