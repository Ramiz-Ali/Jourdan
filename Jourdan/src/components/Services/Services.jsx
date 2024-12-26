import React from 'react'
import './Services.css'
import png5 from '../../assets/Images/5.svg'
import icon1 from '../../assets/Images/icon1.svg'
import icon2 from '../../assets/Images/icon2.svg'
import icon3 from '../../assets/Images/icon3.svg'
import icon4 from '../../assets/Images/icon4.svg'
import icon5 from '../../assets/Images/icon5.svg'
import icon6 from '../../assets/Images/icon6.svg'
import { Clock , MoveRight } from 'lucide-react'
const Services = () => {
  return (
    <div className='services-main'>
       <div className="service-text">
        <div className="service-text-main">
          <div className='service-p1'>N0 SERVICE A</div>
          <div className='service-p2'>VOTRE DISPOSITION</div>
          </div>
          <img src={png5} alt="" />
       </div>

       <div className="first-services">
          <div className='transfert'>
             <img src={icon1} alt="" />
             <p>Transfert</p>
             <div>gare & aéroport</div>
          </div>

          <div className='transfert'>
             <img src={icon2} alt="" />
             <p>Réception</p>
             <div>de 8h30 à 11h / 14h30 à 17h</div>
          </div>

          <div className='transfert'>
             <img src={icon3} alt="" />
             <p>Service</p>
             <div>petit-déjeuner(08h30 - 10h30)</div>
          </div>
       </div>

       <div className="second-services">
          <div className='transfert'>
             <img src={icon4} alt="" />
             <p>Dishes</p>
             <div>dîner(19h30 - 21h30)</div>
          </div>

          <div className='transfert'>
             <img src={icon5} alt="" />
             <p>Réception</p>
             <div>Piscine/Jacuzzi</div>
          </div>

          <div className='transfert'>
             <img src={icon6} alt="" />
             <p>Animaux</p>
             <div>non-acceptés pour des raisons d’hygiène</div>
          </div>
       </div>

       <div className="clock-div">
            <Clock size={50}/>
            <div className="ckeck-text">
                <div className='check-div1'>Check-in : </div>
                <div className='check-div2'> à parti de 15h</div>
            </div>
            <div className="ckeck-text">
                <div className='check-div1'>Check-out : </div>
                <div className='check-div2'>au plus tard à 11h</div>
            </div>
            <div className='voir-tous'>
                <div>VOIR TOUS LES SERVICES</div>
                <MoveRight size={30}/>
            </div>
       </div>


    </div>
  )
}

export default Services
