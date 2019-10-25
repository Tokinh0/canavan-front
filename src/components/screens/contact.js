import React from 'react';

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
        <img src={"images/cachorro-contato.png"} className="cachorro-contato" />
      </div>
      <ul className="icons-list">
        <li>
          <a href="#"><img src={"images/icone-facebook.ico"} className="face-icon" /></a>
          <p className="text-icon">Facebook</p>
        </li>
        <li>
          <a href="#"><img src="images/icone-instagram.ico" className="insta-icon" /></a>
          <p className="text-icon">Instagram</p>
        </li>
        <li>
          <a href="#"><img src="images/icone-email.ico" className="email-icon" /></a>
          <p className="text-icon">Email</p>
        </li>
      </ul>
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
