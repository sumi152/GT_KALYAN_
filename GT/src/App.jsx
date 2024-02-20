import './App.css'
import Navbar from './Navbar.jsx'
import Top from './Top.jsx' 
import Changepass from './Changepass.jsx'
import GameRates from './GameRates.jsx'
import Htp from './HowToPlay.jsx'
import Game from './Game.jsx'
import Bid from './Bid.jsx'
import Win from './Win.jsx'
import Single from './Games/Single.jsx'
import AddFunds from './AddFunds.jsx'
import About from './About.jsx'
import Privacy from './Privacy.jsx'
import Delete from './Delete.jsx'
import Wallet from './Wallet.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GameFRONT from './GameFRONT.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Imp from './IMP.jsx'
import { Provider } from 'react-redux'
import appStore from "./Util/appStore"
import Starline from './Starline.jsx'
import Profile from './Profile.jsx'
import IMP2 from './IMP2.jsx'
import StarGame from './StarGame.jsx'
import StarSingle from './Stargame/StarSingle.jsx'
import Ssinglepana from './Stargame/Ssinglepana.jsx'
import Sdoublepana from './Stargame/Sdoublepana.jsx'
import Stripplepana from './Stargame/Stripplepana.jsx'
import FullSangam from './Games/FullSangam.jsx'
import HalfSangam from './Games/HalfSangam.jsx'
import TripplePana from './Games/TripplePana.jsx'
import SinglePana from './Games/SinglePana.jsx'
import DoublePana from './Games/DoublePana.jsx'
import Jodi from './Games/Jodi.jsx'
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
    <Provider store={appStore}>
    <BrowserRouter>
        <Routes>
        <Route path="/r" element={<> <Register/> </>}></Route>  
        <Route path="/star" element={<> <Starline/> </>}></Route>
        <Route path="/" element={<> <Login/> </>}></Route>
        <Route path="/imp" element={<> <Imp/></>}></Route>
        <Route path="/addfund"  element={<AddFunds/>}> </Route>
        <Route path="/win"  element={<Win/>}> </Route>
        <Route path="/bid"  element={<Bid/>}> </Route>
        <Route path="/gameRates"  element={<GameRates/>}> </Route>
        <Route path="/game"  element={<Game/>}> </Route>
        <Route path="/htp"  element={<Htp/>}> </Route>
      
        <Route path="/about"  element={<About/>}> </Route>
        <Route path="/privacy"  element={<Privacy/>}> </Route>
        <Route path="/delete"  element={<Delete/>}> </Route>
        <Route path="/change"  element={<Changepass/>}> </Route>
        <Route path="/wallet"  element={<Wallet/>}> </Route>
        <Route path="/profile" element={<> <Profile/> </>}></Route>
        <Route path='/imp2' element={<><IMP2/></>}></Route>


        <Route path='/stargame' element={<><StarGame/></>}></Route>
        <Route path='/ssinglepana' element={<><Ssinglepana/></>}></Route>
        <Route path='/sdoublepana' element={<><Sdoublepana/></>}></Route>
        <Route path='/stripplepana' element={<><Stripplepana/></>}></Route>
        <Route path='/starsingle' element={<><StarSingle/></>}></Route>

        <Route path="/single"  element={<Single/>}> </Route>  
        <Route path='/fullsangam' element={<><FullSangam/></>}></Route>
        <Route path='/halfsangam' element={<><HalfSangam/></>}></Route>
        <Route path='/tripplepana' element={<><TripplePana/></>}></Route>
        <Route path='/doublepana' element={<><DoublePana/></>}></Route>
        <Route path='/singlepana' element={<><SinglePana/></>}></Route>
        <Route path='/jodi' element={<><Jodi/></>}></Route>
        
        
        
        </Routes>
      </BrowserRouter>
      </Provider>

    </>

  )
}

export default App
