import React from 'react';

const images = {
  padreador: require('../../assets/images/padreador.jpg'),
  matrizes: require('../../assets/images/matrizes.jpg'),
  estrela: require('../../assets/images/estrela.jpg'),
  filhotes: require('../../assets/images/filhotes.jpg'),
}

export const CategoryItem = ({
  category: {
    title,
    slug,
    image,
  },
}) => (
  <li>
    <a href={`/gallery/${slug}`}>
      <div className="image-container energy" style={{ backgroundImage: `url(${images[image]})` }}>
        <div className="image-container__overlay">
          <h3>{ title }</h3>
        </div>
      </div>
    </a>
  </li>
);

export default CategoryItem;

