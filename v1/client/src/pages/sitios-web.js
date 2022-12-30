//third parties
import { React, useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Parallax } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'

//sling
import style from '../scss/sitios-web.module.scss'
import Whitebanheader from '../components/whitebanheader.component'

//images
import sitiosbanner from '../sitiosbanner.png'
import sitios1 from '../sitios1.png'
import sitios2 from '../sitios2.png'
import sitios3 from '../sitios3.png'
import sitios4 from '../sitios4.svg'


export default function SitiosWeb() {

    const [renta, setRenta] = useState(true);
    const [plus, setPlus] = useState(true);

    useEffect(()=>{
        document.title = "Sitios web | Sling"
    },[])

    useEffect(()=>{
        console.log(plus)
    },[plus])

    return (
        <>
            <div className={style.banner}>
                <Whitebanheader/>
                <div className={style.bannercontent}>
                    <div className={style.bannertext}>
                        <h5>Sitios web</h5>
                        <h2>Tu sitio web perfecto,<br/><strong>Desde solo $499/mes.</strong></h2>
                        <form>
                            <input type="email" required className={style.mailinput} placeholder="Ingresa tu correo"/>
                            <input type="submit" value="¡Comenzar!" className={style.bannersubmit}/>
                        </form>
                        <animated.p style={ useSpring( {to: { y: 0 }, from: {y: -10} } ) } >Habla con nosotros, cuéntanos de tu proyecto, y en 48 horas tendrás el primer vistazo de lo que será tu nuevo (e increíble) sitio web.</animated.p>
                    </div>
                    <div className={style.bannerimg}>
                        <img src={sitiosbanner}/>
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.centrados}>
                    <Parallax speed={0}>
                        <h1>Creemos que tu sitio web debe<br/>ser <strong>bueno, bonito y barato.</strong></h1>
                        <p>Imagínate una agencia de diseño web, pero sin los elevados precios. ¡Eso es sling! Obtén un sitio hecho por profesionales, y paga tan poco como si lo hubieras construido tú mismo.</p>
                    </Parallax>
                </div>
                <div className={ `${style.alternado} ${style.alt1}` }>
                    <Parallax speed={1} className={style.alttext}>
                        <h5>Bueno</h5>
                        <h3>Un buen sitio es aquel que <strong>te ayuda a vender.</strong></h3>
                        <p>El fin de cualquier sitio web debería ser simple: conseguir más ventas. Con esto en mente, diseñamos tu sitio con formularios de contacto y links a tus redes sociales, para conseguirte más clientes y más rápido.</p>
                    </Parallax>
                    <Parallax speed={4}>
                        <img src={sitios1} className={style.altimg}/>
                    </Parallax>
                </div>
                <div className={`${style.alternado} ${style.alt2}` }>
                    <Parallax speed={1} className={style.alttext}>
                        <h5>Bonito</h5>
                        <h3>Haz que tus clientes digan: <strong>“¡que bonito es lo bonito!”</strong></h3>
                        <p>Somos unos apasionados del buen diseño, y trabajamos sin descansar para crear las páginas más atractivas del mercado. Nuestra meta no sólo es sorprenderte a ti, sino sorprender también a tus clientes.</p>
                    </Parallax>
                    <Parallax speed={4}>
                        <img src={sitios2} className={style.altimg}/>
                    </Parallax>
                </div>
                <div className={`${style.alternado} ${style.alt1}` }>
                    <Parallax speed={1} className={style.alttext}>
                        <h5>Barato</h5>
                        <h3>El que quiere azul celeste, <strong>que no le cueste taaanto.</strong></h3>
                        <p>Sí, es verdad que todo lo bueno cuesta. Pero en sling, nos esforzamos por reducir tus costos lo más posible, para ofrecerte más por cada peso invertido. Por eso, en tu plan mensual, ¡el dominio y el hosting van por nuestra cuenta!</p>
                    </Parallax>
                    <Parallax speed={4}>
                        <img src={sitios3} className={style.altimg}/>
                    </Parallax>
                </div>
                <div className={style.fourdivide}>
                    <h1>Tu proyecto del 0 al 100, tan rápido como contar 1-2-3-4.</h1>
                    <p>Reducimos el proceso de diseño web a su mínimo, con 4 esenciales pasos para la creación de un gran sitio web.</p>
                    <img src={sitios4}/>
                    <div className={style.foursteps}>
                        <div className={style.step}>
                            <h4>01. Nos cuentas</h4>
                            <p>Hablaremos contigo acerca de tu idea, y de los detalles prácticos necesarios para hacerla realidad.</p>
                        </div>
                        <div className={style.step}>
                            <h4>02. Diseñamos</h4>
                            <p>En 48 horas, subiremos un primer prototipo de tu sitio, que podrás ver en cualquier dispositivo para pedir cambios.</p>
                        </div>
                        <div className={style.step}>
                            <h4>03. Rellenamos</h4>
                            <p>Una vez que apruebes el diseño de tu página, rellenaremos el sitio con los textos e imágenes que nos envíes.</p>
                        </div>
                        <div className={style.step}>
                            <h4>04. Finalizamos</h4>
                            <p>Tras finalizar tu prototipo, podrás cambiar los textos e imágenes en la misma plataforma.</p>
                        </div>
                    </div>
                </div>
                <div className={style.precios}>
                    <h1>Precios</h1>
                    <p>En sling, te ofrecemos la opción de rentar o de comprar tu sitio web. Puedes pagar una renta fija mensual, o pagar el precio de compra y ser dueño de tu sitio.</p>
                    <div className={style.youturnmeon}>
                        <h5 className={style.izq}>Renta</h5>
                        <div className={style.likealightswitch} onClick={()=> { setRenta(!renta) } }>
                            <animated.div style={ useSpring( { to: { x: renta ? 0 : 30 }, from: { x: 0 }, config: { tension: 1000, mass: 0.5 } } ) } className={style.charlieputh}></animated.div>
                        </div>
                        <h5 className={style.der}>Compra</h5>
                    </div>
                    <div className={style.planes}>
                        <animated.div style={ useSpring( { to: { border: plus ? "1px solid #131b23" : "1px solid #DFE4EA" }, from: { border: "1px solid #131b23" }, config: {duration: 100} } ) }className={`${style.plan} ${style.plus}`} onClick={()=> { setPlus(true) } }>
                            <h3>Sitio Plus</h3>
                            <p>Máximo 10 links de contenido estático.</p>
                            <div className={style.precio}>
                                <h2>${renta ? "499" : "4,999"}</h2>
                                { renta ? <h6>al mes</h6> : ""}
                            </div>
                        </animated.div>
                        <animated.div style={ useSpring( { to: { border: plus ? "1px solid #DFE4EA" : "1px solid #131b23" }, from: { border: "1px solid #DFE4EA" }, config: {duration: 100} } ) } className={`${style.plan} ${style.ecommerce}`} onClick={ ()=> { setPlus(false) } }>
                            <h3>Sitio eCommerce</h3>
                            <p>5 links de contenido estático + 50 productos</p>
                            <div className={style.precio}>
                                <h2>${renta ? "999" : "9,999"}</h2>
                                { renta ? <h6>al mes</h6> : ""}
                            </div>
                        </animated.div>
                    </div>
                    <Link className={style.cta} to="/comenzar">¡Comenzar!</Link>
                    <h5 className={style.todavia}>¿Todavía no estás seguro de cuál paquete escoger? <strong>¡Llámanos sin compromiso!</strong> Estamos listos para brindarte más detalles, para que tomes la mejor decisión para tu negocio.</h5>
                </div>
            </div>
        </>
    )
}