import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../../assets/valorant-logo.png'

const Header = () => {
  return (
    <header>
      <nav className='navbar container'>
        <ul className='navbar-menu'>
          <li className='navbar-link'><Link to='/valorant/'>Agents</Link></li>
          <li className='navbar-link'><Link to='/valorant/developers'>Developers</Link></li>
        </ul>
        <button className='navbar-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="navbar-svg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        <a href='https://playvalorant.com/es-mx/?gclid=Cj0KCQiAj4ecBhD3ARIsAM4Q_jGNNjeN2KAog6nxh9_UuvDHUyejxGeZQBPvufaw-R6Oz3jHKuUrp4caAqgwEALw_wcB&gclsrc=aw.ds' target='_blank' rel="noopener noreferrer">
          <img src={Logo} alt='Logo Valorant' className='navbar-logo' /> 
        </a>
      </nav>
    </header>
  )
}

export default Header