import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './CardsPage.css'
import logoCards from '../assets/logo-cards.png'
import { allAgents } from '../functions/functions'
// import logoRol from '../assets/displayicon.png'

const CardsPage = () => {
  const [agents, setAgents] = useState([])

  useEffect(() => {
    allAgents(setAgents)
  },[])

  return (
    <>
      {agents != [] ? (
        agents.map(agents => (
          <div key={agents.uuid} data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <Link to={`/valorant/agents/${agents.uuid}`} className='card-agent'>
              <div className='card-hea'>
                <img src={logoCards} alt="Logo Valorant" className='card-logo' />
                {/* <span className='agent-uuid'>N° 00</span> */}
              </div>
              <div className='card-img'>
                <img src={agents.displayIcon} alt='Agent' />
                <h2>{agents.displayName}</h2>
              </div>
              <div className='card-rol'>
                {/* <img src={logoRol} alt='Logo Rol' />
                <span className='rol'>Initiator</span> */}
              </div>
            </Link>
          </div>
        ))
      ) : ('No hay Agentes')}
    </>
  )
}

export default CardsPage