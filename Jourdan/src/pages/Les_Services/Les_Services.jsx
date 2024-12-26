import React from 'react'
import './Les_Services.css'
import Homepage from '../../components/Homepage/Homepage'
import Footer from '../../components/Footer/Footer'
import ThirdScreenImage from '../../assets/Images/bed4.jpg'
import Services from '../../components/Services/Services'
import Clients from '../../components/Clients/Clients'
const Les_Services = () => {
  return (
    <div className='Les-Services-main'>
       <Homepage imageSrc={ThirdScreenImage}/>
       <Services/>
       <Clients/>
       <Footer/>
    </div>
  )
}

export default Les_Services
