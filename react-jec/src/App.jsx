import {Routes,Route, Link, BrowserRouter} from 'react-router-dom'
import Aboutpage from './components/Aboutpage'
import Homepage from './components/Homepage'
import Contactpage from './components/Contactpage'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}/>
       <Route path="/about" element={<Aboutpage></Aboutpage>}/>
        <Route path="/contact" element={<Contactpage></Contactpage>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App