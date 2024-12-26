import React , {useState} from 'react'
import './Homepage.css'
import videodm from '../../assets/Images/videodm.mp4'
import DJ from "../../assets/Images/DJ.svg"
import png1 from "../../assets/Images/1.svg"
import png2 from "../../assets/Images/2.svg"


import { AlignJustify, MapPin, Instagram, Linkedin, Facebook, Phone } from "lucide-react"
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Navbar2 from '../Navbar2/Navbar2'
import Sidebar from '../Sidebar/Sidebar'
const Homepage = ({ imageSrc }) => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
   return (
      <div className='homepage-main'>

         <div className="overlay"></div>
         {imageSrc ? (
                <img className="background-image" src={imageSrc} alt="Background" />
            ) : (
                <video className="video-domain" src={videodm} autoPlay muted loop></video>
            )}
         <nav className='nav1'>
            <div className="menu-text" onClick={handleToggleSidebar}>
               <AlignJustify size={25} />
               <div className='menu-text-text'>MENU</div>
            </div>
            <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
            <div className="reserver-btn">
               <p className="reserver-btn-p1">RESERVER</p>
               <p className="reserver-btn-p2">Au meilleur tarif</p>
            </div>
         </nav>


         <div className="home-icons">
            <div className="loc-icon">
               <MapPin size={20} color='#fff' />
            </div>
            <div className="loc-icon">
               <Instagram size={20} color='#fff' />
            </div>

            <div className="loc-icon">
               <Linkedin size={20} color='#fff' />
            </div>

            <div className="loc-icon">
               <Facebook size={20} color='#fff' />
            </div>

            <div className="loc-icon">
               <Phone size={20} color='#fff' />
            </div>
         </div>

         <img className='img-dj' src={DJ} alt="" />
         <div className="image-text">
            <img src={png1} alt="" />
            <div className='BIENVENUE-text'>
               <p className='BIENVENUE-p1'>BIENVENUE AU</p>
               <p className='BIENVENUE-p2'>DOMAIN JOURDAN</p>
            </div>
            <img src={png2} alt="" />
         </div>

         <div className="voir-btn">
            <button>VOIR LE DOMAIN</button>
         </div>

         <IoArrowDownCircleOutline color='#FFF' size={60} className='arrow-circle' />

         <Navbar2/>

     



      </div>
   )
}

export default Homepage
