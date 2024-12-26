import React from 'react'
import './Footer.css'
import domaine from '../../assets/Images/domaine.svg'
import { Linkedin , Instagram } from 'lucide-react'
const Footer = () => {
  return (
    <div className='footer-main'>
        <img className='footer-img' src={domaine} alt="" />
        <div className="footer-boxes">
           <div className="footer-box1">
               <div className="footer-box1-text1">
               610 chemin de la chapelle 13610 Le Puy-Sainte-Réparade
               </div>
               <div className="footer-box1-text2">07 82 00 23 24</div>
               <div className="footer-box1-text3">contact@domainejourdan.com</div>
           </div>
           <div className="footer-box1">
               <div className="footer-box1-text1">
               Contact & Accès
               </div>
               <div className="footer-box1-text2">Ouvert tous les jours 24/24</div>
           </div>
           <div className="footer-box3">
               <div className="footer-box1-text1">
               Hotel & chambres
               </div>
               <div className="footer-box1-text2">Restaurant & bar</div>
               <div className="footer-box1-text3">Séminaire</div>
               <div className="footer-box1-text3">Evènement privé</div>
               <div className="footer-box1-text3">Galerie</div>
           </div>
        </div>

        <div className="footer-last">
           <div className="domain-text">©Domain Jourdan 2024,</div>
           <div className="domain-text">Politique de confidentialité & Mentions Légales</div>
           <div className="domain-text-line"></div>
           <div className="domain-text">Conditions générales de vente</div>

           <div className="footer-icons">
              <div className="footer-icon1">
                  <Linkedin size={23} color='#60727A'/>
              </div>
              <div className="footer-icon1">
                  <Instagram size={23} color='#60727A'/>
              </div>
           </div>
        </div>


    </div>
  )
}

export default Footer
