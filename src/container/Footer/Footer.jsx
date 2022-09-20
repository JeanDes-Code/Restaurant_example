import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

import {FooterOverlay, Newsletter} from '../../components'
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
    
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'> Nous Contacter </h1>
        <p className='p__opensans'>43 bis Rue Gambetta, 64200 Biarritz</p>
        <p className='p__opensans'>+33 650-446-668</p>
        <p className='p__opensans'>+33 650-446-668</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo' />
        <p className='p__opensans'>
          « La meilleure façon de se trouver est de se perdre au service d'autrui. »
        </p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'> Horraires d'Ouverture </h1>
        <p className='p__opensans'>Lundi-Vendredi: </p>
        <p className='p__opensans'>10:00 am - 01:00 am</p>
        <p className='p__opensans'>Samedi-Dimanche:</p>
        <p className='p__opensans'>10:00 am - 02:00 am</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Gerícht. Tous Droits Réservés.</p>
    </div>
  </div>
);

export default Footer;
