import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../gray.png'

export default function Blackbanheader() {
    return (
        <div className="blackbanheader">
            <Link to="/">
                <img src={logo} className="logo"/>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/quienes-somos">
                            Quienes somos
                        </Link>
                    </li>
                    <li>
                        <Link to="/sitios-web">
                            Sitios web
                        </Link>
                    </li>
                    <li>
                        <Link to="/aplicaciones-web">
                            Aplicaciones web
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="headericons">
                <span className="material-symbols-outlined">search</span>
                <span className="material-symbols-outlined hola">person</span>
            </div>
        </div>
    )
}