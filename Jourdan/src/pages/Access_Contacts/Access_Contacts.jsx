import React from 'react'
import './Access_Contacts.css'
import Homepage from '../../components/Homepage/Homepage'
import SixthScreenImage from '../../assets/Images/photo1.jpg'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/ContactForm/ContactForm'

const Access_Contacts = () => {
  return (
    <div className='Access-contacts-main'>
       <Homepage imageSrc={SixthScreenImage}/>
        <div className="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56146.70623136273!2d70.26280272815511!3d28.414152793566938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375c713b45db39%3A0x28af23c1672a0170!2sRahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731403194475!5m2!1sen!2s"   allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="contact-form">
              <ContactForm/>
        </div>
       <Footer/>
    </div>
  )
}

export default Access_Contacts
