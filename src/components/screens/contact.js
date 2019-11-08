import React from 'react';
import dogImage from '../../assets/images/cachorro-contato.png';
import SocialNetworkLinks from '../base/social-network-links';

export const ContactScreen = () => (
  <div className="container" id="contact">
    <div className="contact-title">
      <h1>
        <div>CON</div>
        <div>TA</div>
        <div>TO</div>
      </h1>
    </div>
    <div className="contact-image-icons">
      <div className="contact-image">
        <img src={dogImage} className="cachorro-contato" alt="cachorro" />
      </div>
      <SocialNetworkLinks />
    </div>
    <div className="contact-subtitle">
      <h1>
        <div>CA</div>
        <div>NA</div>
        <div>VANS</div>
      </h1>
      <h4>siberians</h4>
    </div>
  </div>
);

export default ContactScreen;
