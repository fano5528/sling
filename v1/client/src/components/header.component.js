import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import { useSpring, animated } from 'react-spring'

export default function Header() {
    const [showHeader,setShowHeader] = useState(false);

    function checkScroll() {
        window.scrollY>400 ? setShowHeader(true) : setShowHeader(false)
    }

    useEffect(()=>{
        window.addEventListener('scroll', checkScroll)
    })
    
    return (
        <animated.header style={ useSpring({ config: { duration: 150 }, to: {opacity: showHeader ? 1 : 0, display: "flex", y: showHeader ? 0 : -95}, from: {opacity: 0, display: "none", y: -95} }) }>
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
                <span className="material-symbols-outlined hola">person</span>
            </div>
        </animated.header>
    )
}