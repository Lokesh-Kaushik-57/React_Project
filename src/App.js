import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cards from './pages/cardInvitations'
import SampleCards from './pages/sampleCard'
import PageNotFound from './pages/PageNotFound'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/card-invitations" element={<Cards />} />
          <Route path="/card-invitations/sample-card-slide" element={<SampleCards />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App