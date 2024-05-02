import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './home'
import Header from './components/Header-Footer/header'
import Footer from './components/Header-Footer/footer'
import Student from './student'
import Exams from './exams'

function App() {
  return (
    <Router>

      <Header />

      <div className='mt-20'>

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/exam" element={<Exams />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
