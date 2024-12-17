import React from 'react';

const RegionSelector = ({ region }) => {
  return (
    <div>
      <h2>Вибраний регіон: {region.name}</h2>
      <p>Координати: X: {region.coordinates.x}, Y: {region.coordinates.y}</p>
      <p>Розміри: Ширина: {region.coordinates.width}, Висота: {region.coordinates.height}</p>
    </div>
  );
};

export default RegionSelector;
