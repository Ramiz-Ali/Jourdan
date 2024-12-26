import React from 'react'
import './Les_Chambers.css'
import SecondScreenImage from '../../assets/Images/bed5.jpg'
import Homepage from '../../components/Homepage/Homepage'
import Chambers from '../../components/Chambers/Chambers'
import Footer from '../../components/Footer/Footer'
const Les_Chambers = () => {
  return (
    <div className='leschambers-main'>
       <Homepage imageSrc={SecondScreenImage}/>
       <Chambers/>
       <Footer/>
    </div>
  )
}

export default Les_Chambers
