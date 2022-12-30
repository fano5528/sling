import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './scss/main.scss'

function App() {
  return (
    <>
      <Parallax pages={5} style={{ top: '0', left: '0' }} className="container">
        <ParallaxLayer className="hola" offset={0} factor={1}  speed={0}>
          <h1>Hola</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-2} className="gracias">
          <h1>Gracias</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0} className="adios">
          <h1>Adiós</h1>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default App;
