import React from 'react';

export const DogItem = ({
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

export default DogItem;