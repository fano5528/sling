import './scss/main.scss'
import Header from './components/header.component'
import Footer from './components/footer.component'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import SitiosWeb from './pages/sitios-web'
import AplicacionesWeb from './pages/aplicaciones-web'
import 'material-symbols';
import { ParallaxProvider } from 'react-scroll-parallax'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop>
      <Header/>
      <ParallaxProvider>
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route exact path="/sitios-web" element={ <SitiosWeb/> }/>
          <Route exact path="/aplicaciones-web" element={ <AplicacionesWeb/> }/>
        </Routes>
      </ParallaxProvider>
      <Footer/>
      </ScrollToTop>
    </>
  )
}

export default App;