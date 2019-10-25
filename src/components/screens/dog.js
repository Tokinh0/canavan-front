import React from 'react';

export const DogScreen = () => (
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

export default DogScreen;