import { Route, Routes } from "react-router-dom";
import './App.css'
import '@splidejs/react-splide/css';
import Home from './page/home'
import Parallax from './page/example/parallax'
import Splide from './page/example/splide'

function App() {

  return (
    <>
    <Routes>
      <Route path="/">
        <Route index element={<Home />}/>
        <Route path="parallax" element={<Parallax/>}/>
        <Route path="splide" element={<Splide />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
