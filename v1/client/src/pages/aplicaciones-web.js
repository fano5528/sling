//third parties
import { React, useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Parallax } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import qs1 from '../qs1.png'
import qs2 from '../qs2.png'
import white from '../white.png'

//sling
import style from '../scss/aplicaciones-web.module.scss'
import Whitebanheader from '../components/whitebanheader.component'

//images
import aplicacionesbanner from '../aplicacionesbanner.png'

export default function AplicacionesWeb() {
    return (
        <>
            <Helmet>
                <title>Aplicaciones web | Internaut</title>
            </Helmet>
            <div className={style.banner}>
                <Whitebanheader/>
                <div className={style.bannercontent}>
                    <div className={style.bannertext}>
                        <h5>Aplicaciones web</h5>
                        <h2>Nosotros hacemos tu app,<br/><strong>tu te enfocas en tu negocio.</strong></h2>
                        <animated.p style={ useSpring( {to: { y: 0 }, from: {y: -10} } ) } >Comprendemos todas las complicaciones que puede tener un negocio: ¡no te la compliques aún más! Nosotros nos encargamos de tu aplicacion web, del punto A al punto Z.</animated.p>
                        <div className={style.applinks}>
                            <a href="mailto:hola@internaut.mx" className={style.hablemos}>Hablemos</a>
                            <a href="#" className={style.saber}>Quiero saber mas...</a>
                        </div>
                    </div>
                    <div className={style.bannerimg}>
                        <img src={aplicacionesbanner}/>
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <div className={ `${style.alternado} ${style.alt1}` }>
                    <Parallax speed={1} className={style.alttext}>
                        <h5>Diseño de UX/UI</h5>
                        <h3>Un <strong>prototipo bien diseñado</strong> es el primer paso al éxito.</h3>
                        <p>El desarrollo de una aplicación web comienza desde un paso atrás: durante su diseño. Nosotros nos encargamos de hacer prototipos hermosos, teniendo una alta funcionalidad en mente. Nuestra pasión por el diseño nos motiva a construir prototipos que no dejan nada que desear.</p>
                    </Parallax>
                    <Parallax speed={4}>
                        <img src={qs1} className={style.altimg}/>
                    </Parallax>
                </div>
                <div className={`${style.alternado} ${style.alt2}` }>
                    <Parallax speed={1} className={style.alttext}>
                        <h5>Desarrollo web</h5>
                        <h3>Deja de pagar por hora, <strong>mejor paga por resultados.</strong></h3>
                        <p>En la industria del desarrollo web, se tiene la convención de pagar por hora de desarrollo. Nosotros, en cambio, preferimos cobrar por proyecto. Olvídate de pagar horas extras: con sling, tu cotización será tu precio final.</p>
                    </Parallax>
                    <Parallax speed={4}>
                        <img src={qs2} className={style.altimg}/>
                    </Parallax>
                </div>
                <div className={style.idea}>
                    <img src={white}/>
                    <h3>¿Tienes una idea?</h3>
                    <p>Hablemos...</p>
                    <Link to="mailto:hola@internaut.mx">hola@internaut.mx</Link>
                </div>
            </div>
        </>
    )
}