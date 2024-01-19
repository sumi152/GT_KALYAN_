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
        <Route path="/bid"  element={<Bid/>}> </Route>
        <Route path="/bid"  element={<Bid/>}> </Route>
        <Route path="/bid"  element={<Bid/>}> </Route>
        <Route path="/bid"  element={<Bid/>}> </Route>
        </Routes>
      </BrowserRouter>
  

    </>

  )
}

export default App
