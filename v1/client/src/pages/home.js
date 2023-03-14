//third parties
import { React, useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Parallax } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

//sling
import style from '../scss/home.module.scss'
import Blackbanheader from '../components/blackbanheader.component'

//images
import homebanner from '../homebanner.png'
import home1 from '../home1.png'
import home2 from '../home2.png'
import home3 from '../home3.png'
import home4 from '../home4.png'
import home5 from '../home5.png'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home | Internaut</title>
            </Helmet>
            <div className={style.banner}>
                <Blackbanheader/>
                <h1>México, bienvenido al<br/>futuro del <strong>diseño web.</strong></h1>
                <p>Creamos soluciones digitales <strong>humanas,</strong> en la forma de sitios y aplicaciones web.</p>
                <img src={homebanner} className={style.homebanner}/>
            </div>
            <div className={style.content}>
                <div className={style.venimos}>
                    <div className={style.title}>
                        <h1>Venimos a cambiar la manera en la que se construye el internet.</h1>
                        <p>Tenemos una pasión por el diseño y la tecnología. Junto contigo, buscamos hacer del internet un lugar más humano.</p>
                    </div>
                    <div className={style.three}>
                        <div className={style.threeelement}>
                            <div className={style.whitecircle}>
                                <img src={home1}/>
                            </div>
                            <div className={style.elementtext}>
                                <h4>Diseño humano</h4>
                                <p>Soluciones construidas contigo en el centro.</p>
                            </div>
                        </div>
                        <div className={style.threeelement}>
                            <div className={style.whitecircle}>
                                <img src={home2}/>
                            </div>
                            <div className={style.elementtext}>
                                <h4>Alto rendimiento</h4>
                                <p>Sitios hechos con velocidad y eficiencia en mente.</p>
                            </div>
                        </div>
                        <div className={style.threeelement}>
                            <div className={style.whitecircle}>
                                <img src={home3}/>
                            </div>
                            <div className={style.elementtext}>
                                <h4>Bajos costos</h4>
                                <p>Todo el mundo debería poder tener un gran sitio web.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.centrados}>
                    <h1>Movemos al internet con 2 servicios<br/> de <strong>bajo costo y alto impacto.</strong></h1>
                </div>
                <div className={`${style.alternado} ${style.alt2}` }>
                    <Parallax speed={1} className={style.alttext}>
                        <h5>Sitios web</h5>
                        <h3>Para <strong>pequeñas empresas</strong> buscando darse a conocer.</h3>
                        <p>Diseñamos, programamos, y lanzamos tu sitio web; ¡por tan sólo $499 al mes! Además, el dominio y el hosting van por nuestra cuenta.</p>
                        <Link to="/sitios-web">Aprender más</Link>
                    </Parallax>
                    <Parallax speed={5}>
                        <img src={home4} className={style.altimg}/>
                    </Parallax>
                </div>
                <div className={`${style.alternado} ${style.alt1}` }>
                    <Parallax speed={1} className={style.alttext}>
                        <h5>Aplicaciones web</h5>
                        <h3>Soluciones comprensivas para <strong>empresas en crecimiento.</strong></h3>
                        <p>Conocemos lo difícil y confuso que puede ser comenzar una aplicación web desde cero. Por ello, estamos listos para hacer ese trabajo por ti.</p>
                        <Link to="/aplicaciones-web">Aprender más</Link>
                    </Parallax>
                    <Parallax speed={5}>
                        <img src={home5} className={style.altimg}/>
                    </Parallax>
                </div>
            </div>
        </>
    )
}