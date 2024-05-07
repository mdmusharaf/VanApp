
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About'
import Home from './Components/Home'
import Vans from './Components/Vans'
import VanDetail from './Components/VanDetail'
import Layout from './Components/Layout'
import Income from './Host/Income'
import Reviews from './Host/Reviews'
import Dashboard from './Host/Dashboard'

import HostLayout from './Components/HostLayout'
import Error from './Components/Error'
import HostVans from './Host/HostVans'
import HostVansDetails from './Host/HostVansDetails'
import HostVansInfo from './Host/HostVansInfo'
import HostVansPricing from './Host/HostVansPricing'
import HostVanPhotos from './Host/HostVanPhotos'
import TodoList from './Components/TodoList'


function App() {

  return (
    <>
      <BrowserRouter>
    
     <Routes>
        <Route path ="/" element={<Layout/>}>
        <Route index element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/vans" element={<Vans/>}/>
          <Route path="/vans/:id" element={<VanDetail/>}/>

        <Route path="/host" element={ <HostLayout/> }>
        <Route index element={ <Dashboard /> }/>
          <Route path="income" element={ <Income/> }/>
          <Route path="reviews" element={ <Reviews/> }/>
          <Route path="hostVans" element={ <HostVans/> }/>
          <Route path="/hostVans/:id" element={ <HostVansDetails /> }>
          <Route index element={ <HostVansInfo  /> }/>
          <Route path="pricing" element={ <HostVansPricing/> }/>
          <Route path="photos" element={ <HostVanPhotos/> }/>


          </Route>

</Route>
        </Route>
        <Route path='todo' element={<TodoList/>}/>
        <Route path='*' element={<Error/>}/>

        </Routes>

      </BrowserRouter>
     
    </>
  )
}

export default App
