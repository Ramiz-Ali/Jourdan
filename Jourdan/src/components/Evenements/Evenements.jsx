import React from 'react'
import './Evenements.css'
import icon7 from '../../assets/Images/icon7.svg'
import photo12 from '../../assets/Images/photo12.jpg'
import photo13 from '../../assets/Images/photo13.jpg'
import photo14 from '../../assets/Images/photo14.jpg'
import { MoveRight } from 'lucide-react'
const Evenements = () => {
  return (
    <div className='evenements-main'>
        <div className="evenements-text">
            <div>Événements</div>
            <img src={icon7} alt="" />
        </div>

        <div className="evenements-cards">
             <div className="evenements-card1">
                 <div className='seminar-text'>Séminaires</div>
                 <div >
                     <img className="seminar-text-img" src={photo12} alt="" />
                 </div>
                 <div className="seminar-card1-text">Pour des séminaires journée ou demi-journée, Le Domaine dispose d’une salle de 30pers maximum en style école/ U</div>
            
             </div>

             <div className="evenements-card1">
                 <div className='seminar-text'>Réception De Mariage</div>
                 <div >
                     <img className="seminar-text-img" src={photo13} alt="" />
                 </div>
                 <div className="seminar-card1-text">Le Domaine peut se privatiser du vendredi 18h au dimanche 16h, petit-déjeuner inclus...</div>
            
             </div>

             <div className="evenements-card1">
                 <div className='seminar-text'>Privatisation</div>
                 <div >
                     <img className="seminar-text-img" src={photo14} alt="" />
                 </div>
                 <div className="seminar-card1-text">Déjeuner ou diner en extérieur, si beau temps jusqua 150pers Déjeuner ou dîner autour de la piscine.</div>
            
             </div>

             
        </div>

        <div className="evenements-bottom-text">
          <div>VOIR TOUTES LES PHOTOS</div>
          <MoveRight size={30}/>

       </div>
    </div>
  )
}

export default Evenements
