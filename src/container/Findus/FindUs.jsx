import React from 'react';

import {SubHeading} from '../../components'
import {images} from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_indo'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>
        Nous trouver
      </h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>
           43 bis Rue Gambetta, 64200 Biarritz
        </p>
        <p className='p__cormorant' style={{color:'#dcca87', margin:'2rem 0'}}>
           Horraires d'Ouverture
        </p>
        <p className='p__opensans'>
           Lun - Ven: 10:00 am - 01:00 am
        </p>
        <p className='p__opensans'>
           Sam - Dim: 10:00 am - 02:00 am
        </p>
      </div>
      <button type='button' className='custom__button' style={{marginTop: '2rem'}}>Nous Trouver</button>

    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='nous trouver'/>
    </div>
  </div>
);

export default FindUs;
