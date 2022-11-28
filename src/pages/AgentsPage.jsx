import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { oneAgent, rol } from '../functions/functions'
import './AgentsPage.css'

const AgentsPage = () => {
  const [agent, setAgent] = useState([])
  const [role,setRole] = useState([])
  const params = useParams()

  useEffect(() => {
    oneAgent(params.id, setAgent)
    rol(params.id, setRole)
  },[])

  return (
    <div className='valorant'>
      {agent != [] ? (
        
        <div className="agent container">
          <div className='agent-box' data-aos="zoom-in">
            <div className="agent-img">
              <img className='img1' src={agent.background} alt="Banckground" />
              <img className='img2' src={agent.bustPortrait} alt="Agent" />
            </div>

            <div className="agent-info">
              <h1>{agent.displayName}</h1>

              <div className="agent-role">
                <h3>// ROL</h3>
                <p>{role.displayName}</p>
                <img src={role.displayIcon} alt="Logo Rol" />
              </div>

              <div className="agent-description">
                <h3>// BIOGRAPHY</h3>
                <p>{agent.description}</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      ) : ('No hay Agentes')}
    </div>
  )
}

export default AgentsPage