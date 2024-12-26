import React from 'react'
import './Gallery.css'
import SixthScreenImage from '../../assets/Images/photo1.jpg'
import Homepage from '../../components/Homepage/Homepage'
import Photos from '../../components/Photos/Photos'
import Footer from '../../components/Footer/Footer'
const Gallery = () => {
  return (
    <div className='gallery-main'>
       <Homepage imageSrc={SixthScreenImage}/>
       <Photos/>
       <Footer/>
    </div>
  )
}

export default Gallery
