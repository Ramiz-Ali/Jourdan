import React from 'react'
import './Navbar2.css'
const Navbar2 = () => {
  return (
    <div className="homepage-navbar2">
            <div className='RESERVERENLIGNE' >RESERVER EN LIGNE</div>
            <div className='DATEARRIVE'>DATE D'ARRIVE</div>
            <div className='DATEARRIVE'>DATE D' DEPART</div>

            <div className="adulte">
               <div className='adulte-text'>ADULTE(S):</div>
               <div className='box0'>0</div>
            </div>

            <div className="adulte">
               <div className='adulte-text'>ENFANTE(S):</div>
               <div className='box0'>0</div>
            </div>

            <div className="reserver-btn-2">
               <button >RESERVER</button>
            </div>

            <div className="malleur">
               MALLEUR TARIF GRANTI ICI
            </div>
         </div>
  )
}

export default Navbar2
