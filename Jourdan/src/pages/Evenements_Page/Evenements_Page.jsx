import React from 'react'
import './Evenements_Page.css'
import Homepage from '../../components/Homepage/Homepage'
import ForthScreenImage from '../../assets/Images/photo13.jpg'
import Evenements from '../../components/Evenements/Evenements'
import Clients from '../../components/Clients/Clients'
import Footer from '../../components/Footer/Footer'
const Evenements_Page = () => {
  return (
    <div className='Evenements-page-main'>
       <Homepage imageSrc={ForthScreenImage}/>
       <Evenements/>
       <Clients/>
       <Footer/>
    </div>
  )
}

export default Evenements_Page
