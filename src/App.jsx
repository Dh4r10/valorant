import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import AgentsPage from './pages/AgentsPage'
import Footer from './components/Footer/Footer'
import Developers from './pages/Developers'
import { useEffect, useState } from 'react'
import Load from './assets/gif/load.gif'
import './Loading.css'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
    setTimeout(() => {
      setLoading(true)
    }, 4000)
  }, [])

  return (
    <>
      <div className="App">
        {loading ?
          <>
            <Header />
            <Routes>
              <Route path='/valorant/' element={<Main />} />
              <Route path='/valorant/agents/:id' element={<AgentsPage />} />
              <Route path='/valorant/developers' element={<Developers />} />
            </Routes>
            <Footer />
          </>  
          : (
            <div className='box-load'>
              <img src={Load} alt="Loading" className='load'/>
            </div> 
            )}
      </div>
    </>
  )
}

export default App
