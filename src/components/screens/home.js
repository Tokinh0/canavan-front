
import React from 'react';
import SocialNetworkLinks from '../base/social-network-links';
import dogImage from '../../assets/images/cachorrinhos-home.png';

export const HomeScreen = () => (
  <div className="container" id="home">
    <div className="home-titles">
      <h1>
        <div>CA</div>
        <div>NA</div>
        <div>VANS</div>
      </h1>
      <h2>SIBERIANS</h2>
      <h4>c a n i l {' - '} e s p e c i a l i z a d o</h4>
      <SocialNetworkLinks />
    </div>
    <div className="home-image">
      <img src={dogImage} className="mask-element" alt="cachorrinhos"/>
    </div>
  </div>
);

export default HomeScreen;
