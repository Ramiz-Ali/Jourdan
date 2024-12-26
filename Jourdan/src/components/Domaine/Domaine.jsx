import React from 'react'
import './Domaine.css'
import png4 from "../../assets/Images/3.svg"
import mask1 from "../../assets/Images/Mask1.jpg"
import png3 from "../../assets/Images/4.svg"
import { MoveRight } from 'lucide-react'
const Domaine = () => {
  return (
    <div className='Domaine-main'>
      <div className="UN-DOMAINE">
            <div className="un-domaine-text">
               <div className='un-domaine-text-p1'>UN DOMAINE</div>
               <div className='un-domaine-text-p2'>DE LUXE</div>
            </div>
            <img src={png3} alt="" />
            <div className="paragraphs">
               <div className='paragraph1'>
                  <p>Un portail monumental en fer forgé orné de pierres sculptées… Une bâtisse de style néogothique se dresse fièrement devant vous.</p>
               </div>

               <div className='paragraph2'>
                  <p>La délicatesse de ses sculptures murales, l’élégance de ses boiseries, le charme authentique de ses vieilles pierres provençales vous plongent dans un univers unique d’un luxe hors du temps.</p>
               </div>

               <div className='paragraph2'>
                  <p>Le Domaine se situe dans un écrin de nature qui s’étend sur 2,5 hectares et qui surplombe un magnifique panorama boisé avec une vue imprenable sur les Alpes, le Luberon et la montagne Sainte-Victoire. Le vignoble du Domaine parfait la beauté sereine des lieux.</p>
               </div>

               <div className='paragraph1'>
                  <p>Une escapade en amoureux, un séjour en famille, un week-end entre amis, un voyage d’affaires…Il est également possible de louer l’ensemble du Domaine à la semaine.Le Domaine Jourdan vous réserve le meilleur accueil</p>
               </div>

            </div>

            <div className="reserver-btn-text">
               <div className="reserver-btn-3">
                  <button >RESERVER</button>
               </div>

               <div className='EN-SAVIOR'>
                  <div className='EN-SAVIOR-text'>EN SAVIOR PLUS</div>
                  <MoveRight color='#c0b384' />
               </div>
            </div>
         </div>

         <div className="UN-SEJOUR">
            <div className="UN-SEJOUR-left">
               <div className="un-unique">
                  <div className="un-unique-text">
                     <div className='un-unique-text-p1'>UN SAJOUR</div>
                     <div className='un-unique-text-p2'>UNIQUE</div>
                  </div>
                  <img src={png4} alt="" />
               </div>
               <div className="UN-SEJOUR-left-text">
                  Offrez-vous une escale dans un havre de paix luxueux et chaleureux. Pour vousPour vous accueillir, le Domaine comporte cinq chambres modernes et pleines de charme dans la bâtisse principale, dont une suite de luxe équipée d’un jacuzzi privatif en plus de sa salle de bain, elle offre une splendide vue sur les Alpes et un aperçu sur la montagne Sainte-Victoire et également trois bastidons seigneuriaux à la décoration soignée tout confort, situés dans la propriété, disposant chacun de leur terrasse privative offrant également la vue sur les Alpes.Pour parfaire votre séjour au cœur de la Provence, accordez-vous un moment de détente au bord de la piscine, décompressez dans le jacuzzi...
               </div>

               <div className="reserver-btn-text1">
                  <div className="reserver-btn-4">
                     <button >RESERVER</button>
                  </div>

                  <div className='EN-SAVIOR'>
                     <div className='EN-SAVIOR-text'>EN SAVIOR PLUS</div>
                     <MoveRight color='#c0b384' />
                  </div>
               </div>

            </div>

            <div className="UN-SEJOUR-right">
               <img src={mask1} alt="" />
            </div>
         </div>

         <div className="UN-SEJOUR">

            <div className="UN-SEJOUR-right">
               <img src={mask1} alt="" />
            </div>

            <div className="UN-SEJOUR-left">
               <div className="un-unique">
                  <div className="un-unique-text">
                     <div className='un-unique-text-p1'>UN MOMENT</div>
                     <div className='un-unique-text-p2'>INOUBLIABLE</div>
                  </div>
                  <img src={png4} alt="" />
               </div>
               <div className="UN-SEJOUR-left-text">
                  Offrez-vous une escale dans un havre de paix luxueux et chaleureux. Pour vousPour vous accueillir, le Domaine comporte cinq chambres modernes et pleines de charme dans la bâtisse principale, dont une suite de luxe équipée d’un jacuzzi privatif en plus de sa salle de bain, elle offre une splendide vue sur les Alpes et un aperçu sur la montagne Sainte-Victoire et également trois bastidons seigneuriaux à la décoration soignée tout confort, situés dans la propriété, disposant chacun de leur terrasse privative offrant également la vue sur les Alpes.Pour parfaire votre séjour au cœur de la Provence, accordez-vous un moment de détente au bord de la piscine, décompressez dans le jacuzzi...
               </div>

               <div className="reserver-btn-text1">
                  <div className="reserver-btn-4">
                     <button >RESERVER</button>
                  </div>

                  <div className='EN-SAVIOR'>
                     <div className='EN-SAVIOR-text'>EN SAVIOR PLUS</div>
                     <MoveRight color='#c0b384' />
                  </div>
               </div>

            </div>
         </div>
     



      </div>
  )
}

export default Domaine
