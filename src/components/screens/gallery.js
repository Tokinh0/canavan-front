import React from 'react';
import CategoryItem from '../../components/gallery/category-item';
import GategoryTypes from '../../config/category-types';

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
        {
          GategoryTypes.map((categoryType, index) => (
            <CategoryItem category={categoryType} key={index} />
          ))
        }
      </ul>
    </div>
  </div>
 );

export default GalleryScreen;
