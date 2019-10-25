import React from 'react';
import logo from './logo.svg';
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link
} from "react-router-dom";

import iconeFacebook from './assets/images/icone-facebook.ico';
import iconeInstagram from './assets/images/icone-instagram.ico';
import iconeEmail from './assets/images/icone-email.ico';
import cachorrinhosHome from './assets/images/cachorrinhos-home.png';

import './App.scss';
const App = () => (
 <Router>
   <AppBar />
   <AppContent />
 </Router>
);

const AppBar = () => (
 <div className="navbar-menu">
   <ul>
     <li><a href="HomeScreen">HOME</a></li>
     <li><a href="AboutScreen">SOBRE</a></li>
     <li><a href="GalleryScreen">GALERIA</a></li>
     <li><a href="ContactScreen">CONTATO</a></li>
   </ul>
 </div>
);

const AppContent = () => (
 <div className="app">
   <Switch>
     <Route path="/">
       <HomeScreen />
     </Route>
     <Route path="/about">
       <AboutScreen />
     </Route>
     <Route path="/gallery">
       <GalleryScreen />
     </Route>
     <Route path="/contact">
       <ContactScreen />
     </Route>
     <Route path="/padreadores">
       <PadreadoresScreen />
     </Route>
   </Switch>
 </div>
)

const HomeScreen = () => (
 <div className="container" id="home">
   <div className="home-titles">
     <h1>
       <div>CA</div>
       <div>NA</div>
       <div>VANS</div>
     </h1>
     <h2>SIBERIANS</h2>
     <h4>c a n i l {' - '} e s p e c i a l i z a d o</h4>
     <ul>
       <li><a href="#"><img src={iconeFacebook} className="icon" id="facebook-icon" /></a></li>
       <li><a href="#"><img src={iconeInstagram} className="icon" /></a></li>
       <li><a href="#"><img src={iconeEmail} className="icon" /></a></li>
     </ul>
   </div>
   <div className="home-image">
     <img src={cachorrinhosHome} className="mask-element" />
   </div>
 </div>
);

const AboutScreen = () => (
 <div className="container" id="about">
   <div className="about-image">
     <img src={"images/cachorro-sobre.png"} className="mask-object" />
   </div>
   <div className="about-history-container">
     <div className="about-history">
       <h2>História</h2>
       <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
     </div>
   </div>
   <div className="about-menu">
     <h1>
       <div>SO</div>
       <div>BRE</div>
     </h1>
     <ul>
       <li>
         <div className="collapsible">Nosso Trabalho</div>
         <div className="collapsText">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div>
       </li>
       <li>
         <div className="collapsible">História</div>
         <div className="collapsText">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div>
       </li>
       <li>
         <div className="collapsible">Padrões</div>
         <div className="collapsText">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div>
       </li>
       <li>
         <div className="collapsible">Cuidados</div>
         <div className="collapsText">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div>
       </li>
       <li>
         <div className="collapsible">Dicas</div>
         <div className="collapsText">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div>
       </li>
     </ul>
   </div>
 </div>
);

const GalleryScreen = () => (
 <div className="container" id="gallery">
   <div className="gallery-title">
     <h1>
       <div>GA</div>
       <div>LE</div>
       <div>RIA</div>
     </h1>
   </div>
   <div className="gallery-types">
     <ul>
       <li>
         <a href="#padreadores">
           <div className="image-container energy" style="background-image: url('/images/padreador.jpg');">
             <div className="image-container__overlay">
               <h3>PADREADORES</h3>
             </div>
           </div>
         </a>
       </li>
       <li>
         <a href="#">
           <div className="image-container energy" style="background-image: url('/images/matrizes.jpeg');">
             <div className="image-container__overlay">
               <h3>MATRIZES</h3>
             </div>
           </div>
         </a>
       </li>
       <li>
         <a href="#">
           <div className="image-container energy" style="background-image: url('/images/estrela.jpg');">
             <div className="image-container__overlay">
               <h3>ESTRELA</h3>
             </div>
           </div>
         </a>
       </li>
       <li>
         <a href="#">
           <div className="image-container energy" style="background-image: url('/images/filhotes.jpg');">
             <div className="image-container__overlay">
               <h3>FILHOTES</h3>
             </div>
           </div>
         </a>
       </li>
     </ul>
   </div>
 </div>
);

const ContactScreen = () => (
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

const PadreadoresScreen = () => (
 <div className="container" id="padreadores">
   <div className="padreadores-title">
     <h1>
       <div>PA</div>
       <div>DRE</div>
       <div>ADO</div>
       <div>RES</div>
     </h1>
   </div>
   <div className="padreadores-dogs">
     <div className="dog-list">
         { /* Render Padreador Item here */ }
     </div>
   </div>
 </div>
);

const PadreadorItem = ({
 dog: {
   images,
   name,
   date_of_birth: dateOfBirth,
   classNameification,
   description,
 }
}) => (
 <div className="dog-item">
   <img src={images[0]} className="dog-img" />
   <div className="dog-collapse">
     <div className="dog-informations">
       <p className="dog-information">NOME: { name }</p>
       <p className="dog-information">NASCIMENTO: { dateOfBirth }</p>
       <p className="dog-information">CLASSIFICAÇÃO: { classNameification }</p>
       <p className="dog-information">DESCRIÇÃO: { description }</p>
     </div>
   </div>
 </div>
);

export default App;
