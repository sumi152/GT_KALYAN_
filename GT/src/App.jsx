import './App.css'
import Navbar from './Navbar.jsx'
import Top from './Top.jsx' 
import Changepass from './Changepass.jsx'
import GameRates from './GameRates.jsx'
import Htp from './HowToPlay.jsx'
import Game from './Game.jsx'
import Bid from './Bid.jsx'
import Win from './Win.jsx'
import Single from './Single.jsx'
import AddFunds from './AddFunds.jsx'
import About from './About.jsx'
import Privacy from './Privacy.jsx'
import Delete from './Delete.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
     {/* <Navbar/>
    <Top/>  */}
    {/* <AddFunds/> */}
    {/* <Changepass/> */}
    {/* <GameRates/> */}

    {/* <Htp/> */}
    {/* <Game/> */}
    {/* <Single/> */}
    {/* <Bid/> */}
    {/* <Win/> */}
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<> <Navbar /><Top /> </>}></Route>
        <Route path="/addfund"  element={<AddFunds/>}> </Route>
        <Route path="/win"  element={<Win/>}> </Route>
        <Route path="/bid"  element={<Bid/>}> </Route>
        <Route path="/gameRates"  element={<GameRates/>}> </Route>
        <Route path="/game"  element={<Game/>}> </Route>
        <Route path="/htp"  element={<Htp/>}> </Route>
        <Route path="/single"  element={<Single/>}> </Route>        
        <Route path="/about"  element={<About/>}> </Route>
        <Route path="/privacy"  element={<Privacy/>}> </Route>
        <Route path="/delete"  element={<Delete/>}> </Route>
        <Route path="/change"  element={<Changepass/>}> </Route>
        </Routes>
      </BrowserRouter>
  

    </>

  )
}

export default App
