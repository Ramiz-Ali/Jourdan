import React from 'react'
import './Chambers.css'
import png4 from "../../assets/Images/3.svg"
import bed1 from "../../assets/Images/bed1.jpg"
import bed2 from "../../assets/Images/bed2.jpg"
import bed3 from "../../assets/Images/bed3.jpg"
import bed4 from "../../assets/Images/bed4.jpg"
import bed5 from "../../assets/Images/bed5.jpg"
import bed6 from "../../assets/Images/bed6.jpg"
import { MoveRight } from 'lucide-react'
const Chambers = () => {
  return (
    <div className="les-chambers-main">
         <div className="les-chambers">

            <div className="les-chambers-text">
               <div className='les-chambers-text-p1'>LES</div>
               <div className='les-chambers-text-p2'>CHAMBERS</div>
            </div>
            <img src={png4} alt="" />
            </div>

            <div className="chambers-items">
                <div className="chamber-item1">
                    <img src={bed1} alt="" />
                    <div className="chamber-contants">
                        <div className='chamber-contants-p1'>CHAMBER CONTANCE</div>
                        <div className="en-saviour-icon">
                        <div>EN SAVIOUR PLUS</div>
                        <MoveRight size={30} color='#867d5c'/>
                        </div>
                    </div>
                </div>

                <div className="chamber-item1">
                    <img src={bed2} alt="" />
                    <div className="chamber-contants">
                        <div className='chamber-contants-p1'>CHAMBER PAULINE</div>
                        <div className="en-saviour-icon">
                        <div>EN SAVIOUR PLUS</div>
                        <MoveRight size={30} color='#867d5c'/>
                        </div>
                    </div>
                </div>

                <div className="chamber-item1">
                    <img src={bed3} alt="" />
                    <div className="chamber-contants">
                        <div className='chamber-contants-p1'>CHAMBER HELOISE</div>
                        <div className="en-saviour-icon">
                        <div>EN SAVIOUR PLUS</div>
                        <MoveRight size={30} color='#867d5c'/>
                        </div>
                    </div>
                </div>

                
            </div>

            <div className="chambers-items">
                <div className="chamber-item1">
                    <img src={bed4} alt="" />
                    <div className="chamber-contants">
                        <div className='chamber-contants-p1'>CHAMBER VLAD</div>
                        <div className="en-saviour-icon">
                        <div>EN SAVIOUR PLUS</div>
                        <MoveRight size={30} color='#867d5c'/>
                        </div>
                    </div>
                </div>

                <div className="chamber-item1">
                    <img src={bed5} alt="" />
                    <div className="chamber-contants">
                        <div className='chamber-contants-p1'>CHAMBER ANASTASIYA</div>
                        <div className="en-saviour-icon">
                        <div>EN SAVIOUR PLUS</div>
                        <MoveRight size={30} color='#867d5c'/>
                        </div>
                    </div>
                </div>

                <div className="chamber-item1">
                    <img src={bed6} alt="" />
                    <div className="chamber-contants">
                        <div className='chamber-contants-p1'>CHAMBER FLEUR</div>
                        <div className="en-saviour-icon">
                        <div>EN SAVIOUR PLUS</div>
                        <MoveRight size={30} color='#867d5c'/>
                        </div>
                    </div>
                </div>

                
            </div>
         </div>
  )
}

export default Chambers
