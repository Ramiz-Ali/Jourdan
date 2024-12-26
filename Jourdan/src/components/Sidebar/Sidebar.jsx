import React , {useState} from 'react'
import './Sidebar.css'
import { X , Diamond} from 'lucide-react'
import image12 from '../../assets/Images/DJ.svg'
import { Link  } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebarmain ${isOpen ? 'show' : ''}`}>
      <X className='cross-icon-sidebar' color='#fff' size={25} onClick={onClose} />

      <div className="sidebar-top">
          <img src={image12} className='sidebar-top-img' alt="" />
      </div>
      <div className="sidebar-center">
      <Link to='/Home' className='link2'>
         <div className="sidebar-center-text1">
              <Diamond color='#808080' size={15}/>
              <div>LE DOMAINE</div>
         </div>
         </Link>
        <Link to='/Les_Chambers' className='link2'>
         <div className="sidebar-center-text1">
              <Diamond color='#808080' size={15}/>
              <div>LES CHAMBERS</div>
         </div>
         </Link>
        <Link to='/Les_Services' className='link2' >
         <div className="sidebar-center-text1">
              <Diamond color='#808080' size={15}/>
              <div>LES SERVICES</div>
         </div>
         </Link>

        <Link to='/Evenements_Page' className='link2' >
         <div className="sidebar-center-text1">
              <Diamond color='#808080' size={15}/>
              <div>ÉVÉNEMENTS</div>
         </div>
         </Link>

         <Link to='/Access_Contacts' className='link2'>
         <div className="sidebar-center-text1">
              <Diamond color='#808080' size={15}/>
              <div>ACCÉS & CONTACT</div>
         </div>
         </Link>
         
         <Link to='/Gallery' className='link2' >
         <div className="sidebar-center-text1">
              <Diamond color='#808080' size={15}/>
              <div>GALERIE PHOTOS</div>
         </div>
         </Link>
      </div>
      <div className="reserver-btn-sidebar">
               <p className="reserver-btn-sidebar-p1">RESERVER</p>
               <p className="reserver-btn-sidebar-p2">Au meilleur tarif</p>
            </div>
          <div className="sidebar-line"></div>
          <div className="sidebar-text-bottom1">
          610 chemin de la chapelle 13610 Le Puy-Sainte-Réparade
          </div>
          <div className="sidebar-text-bottom2">07 82 00 23 24</div>
          <div className="sidebar-text-bottom3">contact@domainejourdan.com</div>
    </div>
  );
};


export default Sidebar
