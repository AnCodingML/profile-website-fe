import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './page/home'
import Parallax from './page/example/parallax'

function App() {

  return (
    <>
    <Routes>
      <Route path="/">
        <Route index element={<Home />}/>
        <Route path="parallax" element={<Parallax/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
