import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Les_Chambers from './pages/Les_Chambers/Les_Chambers';
import Les_Services from './pages/Les_Services/Les_Services';
import Evenements_Page from './pages/Evenements_Page/Evenements_Page';
import Gallery from './pages/Gallery/Gallery';
import Access_Contacts from './pages/Access_Contacts/Access_Contacts';
import './App.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Home' element={<Home/>}/>
          <Route path='Les_Chambers' element={<Les_Chambers/>}/>
          <Route path='Les_Services' element= {<Les_Services/>}/>
          <Route path='Evenements_Page' element= {<Evenements_Page/>}/>
          <Route path='Gallery' element= {<Gallery/>}/>
          <Route path='Access_Contacts' element= {<Access_Contacts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
