import './App.css'
import Mainpage from './components/Mainpage'
import Tvnpage from './components/Tvnpage'
import Jtbcpage from './components/Jtbcpage'
import Sbspage from './components/Sbspage'
import Mbcpage from './components/Mbcpage'
import Kbspage from './components/Kbspage'
import Enapage from './components/Enapage'
import Tvchosun from './components/Tvchosun'
import  Netflix from './components/Netflix'
import  Tving from './components/Tving'
import  Wavve from './components/Wavve'
import Disney from './components/Disneypage'
import Discover from './components/DISCOVER'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wishlist from './components/Wishlist'
import Recommedations from './components/Recommedations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/tvn" element={<Tvnpage />} />
        <Route path="/jtbc" element={<Jtbcpage />} />
        <Route path="/sbs" element={<Sbspage />} />
        <Route path="/mbc" element={<Mbcpage />} />
        <Route path="/kbs" element={<Kbspage />} />
        <Route path="/ena" element={<Enapage />} />
        <Route path="/tvchosun" element={<Tvchosun />} />
        <Route path="/netflix" element={<Netflix />} />
        <Route path="/tving" element={<Tving />} />
        <Route path="/wavve" element={<Wavve />} />
        <Route path="/disney" element={<Disney />} />
        <Route path='/Discover' element={<Discover />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/Recommedations' element={Recommedations}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App