//third parties
import { React, useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Parallax } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'

//sling
import style from '../scss/aplicaciones-web.module.scss'
import Whitebanheader from '../components/whitebanheader.component'

//images
import aplicacionesbanner from '../aplicacionesbanner.png'

export default function AplicacionesWeb() {
    return (
        <>
            <div className={style.banner}>
                <Whitebanheader/>
                <div className={style.bannercontent}>
                    <div className={style.bannertext}>
                        <h5>Aplicaciones web</h5>
                        <h2>Nosotros hacemos tu app,<br/><strong>tu te enfocas en tu negocio.</strong></h2>
                        <animated.p style={ useSpring( {to: { y: 0 }, from: {y: -10} } ) } >Comprendemos todas las complicaciones que puede tener un negocio: ¡no te la compliques aún más! Nosotros nos encargamos de tu aplicacion web, del punto A al punto Z.</animated.p>
                        <div className={style.applinks}>
                            <a href="mailto:hola@sling.mx" className={style.hablemos}>¡Hablemos!</a>
                            <a href="#" className={style.saber}>Quiero saber mas...</a>
                        </div>
                    </div>
                    <div className={style.bannerimg}>
                        <img src={aplicacionesbanner}/>
                    </div>
                </div>
            </div>
        </>
    )
}