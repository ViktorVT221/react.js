import React from 'react';

const Region = ({ name, coordinates, onSelect }) => {
  const { x, y, width, height } = coordinates;

  return (
    <div
      onClick={onSelect}
      style={{
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        border: '1px solid blue',
        cursor: 'pointer',
        borderRadius: '50%', // зробити форму круглою
      }}
    >
      {name}
    </div>
  );
};

export default Region;
