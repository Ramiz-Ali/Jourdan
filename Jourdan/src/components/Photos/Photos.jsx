import React from 'react'
import './Photos.css'
import photo1 from '../../assets/Images/photo1.jpg'
import photo2 from '../../assets/Images/photo2.jpg'
import photo3 from '../../assets/Images/photo3.jpg'
import photo4 from '../../assets/Images/photo4.jpg'
import photo5 from '../../assets/Images/photo5.jpg'
import photo6 from '../../assets/Images/photo6.jpg'
import photo7 from '../../assets/Images/photo7.jpg'
import photo8 from '../../assets/Images/photo8.jpg'
import photo9 from '../../assets/Images/photo9.jpg'
import photo10 from '../../assets/Images/photo10.jpg'
import photo11 from '../../assets/Images/photo11.jpg'
import icon7 from '../../assets/Images/icon7.svg'
import { MoveRight } from 'lucide-react'
export default function Photos() {
  return (
    <div className='photos-main'>
      <div className="photo-text">
        <div className="photo-domian">
            <div>PHOTO DU</div>
            <div className="photo-domain-text2">DOMAIN</div>
        </div>
        <img className='photo-text-icon' src={icon7} alt="" />
      </div>
       <div className="first-photos">
          <div >
                <img className="first-photos-left" src={photo1} alt="" />
          </div>

          <div >
                <img className="first-photos-left" src={photo2} alt="" />
          </div>
       </div>

       <div className="second-photos">
           <div>
               <img  className="second-photos-left" src={photo3} alt="" />
           </div>

           <div>
               <img className="second-photos-left" src={photo4} alt="" />
           </div>

           <div>
              <img className="second-photos-left" src={photo5} alt="" />
           </div>

           <div className="second-photos-right">
             <div >
                  <img className="second-photos-right1" src={photo6} alt="" />
             </div>

             <div >
                <img className="second-photos-right1" src={photo7} alt="" />
             </div>
             
           </div>
           
       </div>

       <div className="third-photos">
            <div className="third-photos-left">
                <div >
                      <img className="third-photos-left1" src={photo8} alt="" />
                </div>
                <div >
                       <img className="third-photos-left1" src={photo9} alt="" />
                </div>
            </div>

            <div className="third-photos-left">
                <div >
                      <img className="third-photos-left1" src={photo10} alt="" />
                </div>
                <div >
                       <img className="third-photos-left1" src={photo11} alt="" />
                </div>
            </div>

            

       </div>

       <div className="photos-bottom-text">
          <div>VOIR TOUTES LES PHOTOS</div>
          <MoveRight size={30}/>

       </div>


    </div>
  )
}
