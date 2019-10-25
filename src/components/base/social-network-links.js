import React from 'react';

import iconeFacebook from '../../assets/images/icone-facebook.ico';
import iconeInstagram from '../../assets/images/icone-instagram.ico';
import iconeEmail from '../../assets/images/icone-email.ico';

export const SocialNetworkLinks = () => (
  <ul>
    <li><a href="#"><img src={iconeFacebook} className="icon" id="facebook-icon" /></a></li>
    <li><a href="#"><img src={iconeInstagram} className="icon" /></a></li>
    <li><a href="#"><img src={iconeEmail} className="icon" /></a></li>
  </ul>    
);

export default SocialNetworkLinks;
