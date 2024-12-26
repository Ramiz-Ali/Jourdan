import React from 'react'
import './Client.css'
import client from '../../assets/Images/client.avif'
import google from '../../assets/Images/google.svg'
import { Star } from 'lucide-react'
const Clients = () => {
  return (
    <div className='client-main'>
        <div className="avs-clients-text">
            <div>AVIS CLIENTS</div>
            <div className="client-line"></div>
        </div>
        <div className='trusted-client-text'>Read Trusted Reviews From Our Customers</div>

        <div className="review-cards">
            <div className="review-card1">
                <div className="client-name-icon">
                 <div className="client-name">
                    <img src={client} className='client-image' alt="" />
                    <div className="client-name-loc">
                        <p>Paul Starr</p>
                        <div>9 July 2024</div>
                        <div className='client-stars'>
                            <Star color='#A37D06' size={19}/>
                            <Star color='#A37D06' size={19}/>
                            <Star color='#A37D06' size={19}/>
                            <Star color='#A37D06' size={19}/>
                            <Star color='#A37D06' size={19}/>
                        </div>
                    </div>

                 </div>
                 <img src={google} alt="" />
                 </div>
                 <div className='client-caard-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!</div>
            </div>

            {/* //Card 2 */}

            <div className="review-card1">
                <div className="client-name-icon">
                 <div className="client-name">
                    <img src={client} className='client-image' alt="" />
                    <div className="client-name-loc">
                        <p>Paul Starr</p>
                        <div>9 July 2024</div>
                        <div className='client-stars'>
                            <Star color='#A37D06' size={19}/>
                            <Star color='#A37D06' size={19}/>
                            <Star color='#A37D06' size={19}/>
                            <Star color='#A37D06' size={19}/>
                            <Star color='#A37D06' size={19}/>
                        </div>
                    </div>

                 </div>
                 <img src={google} alt="" />
                 </div>
                 <div className='client-caard-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!</div>
            </div>

            {/* Card 3 */}

            <div className="review-card1">
                <div className="client-name-icon">
                 <div className="client-name">
                    <img src={client} className='client-image' alt="" />
                    <div className="client-name-loc">
                        <p>Paul Starr</p>
                        <div>9 July 2024</div>
                        <div className='client-stars'>
                            <Star color='#A37D06' size={19}/>
                            <Star color='#A37D06' size={19}/>
                            <Star color='#A37D06' size={19}/>
                            <Star color='#A37D06' size={19}/>
                            <Star color='#A37D06' size={19}/>
                        </div>
                    </div>

                 </div>
                 <img src={google} alt="" />
                 </div>
                 <div className='client-caard-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!</div>
            </div>
        </div>
    </div>
  )
}

export default Clients
