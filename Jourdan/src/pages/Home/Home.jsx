import React from 'react'
import './Home.css'
import Homepage from '../../components/Homepage/Homepage';
import Chambers from '../../components/Chambers/Chambers';
import Services from '../../components/Services/Services';
import Photos from '../../components/Photos/Photos'; 
import Evenements from '../../components/Evenements/Evenements';
import Clients from '../../components/Clients/Clients';
import Footer from '../../components/Footer/Footer';
import Domaine from '../../components/Domaine/Domaine';

const Home = () => {
  return (
    <div className="home-main">
    <div>
       <Homepage useImageBackground={false}/>
    </div>

    <div>
    <Domaine/>
    </div>

    {/* <div>
        <Chambers/>
    </div> */}
    <div>
      <Services/>
    </div>

    <div>
      <Photos/>
    </div>

    <div>
      <Evenements/>
    </div>

    <div>
      <Clients/>
    </div>

    <div>
      <Footer/>
    </div>

    </div>
  )
}

export default Home
