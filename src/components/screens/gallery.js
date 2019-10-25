import React from 'react';

export const GalleryScreen = () => (
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
            <div className="image-container energy">
              <div className="image-container__overlay">
                <h3>PADREADORES</h3>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="image-container energy">
              <div className="image-container__overlay">
                <h3>MATRIZES</h3>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="image-container energy">
              <div className="image-container__overlay">
                <h3>ESTRELA</h3>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="image-container energy">
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

export default GalleryScreen;
