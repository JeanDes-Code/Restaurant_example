import React from 'react';

import {images} from '../../constants'
import './Header.css';
import SubHeading from './../../components/SubHeading/SubHeading';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Recherchez de nouvelles saveurs" />
      <h1 className='app__header-h1'>La Voie du Fin Gourmet</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
      </p>
      <button type='button' className='custom__button'>Voir la Carte</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
