import React, { useState } from 'react';
import Region from './Region';
import RegionSelector from './RegionSelector';

const MapComponent = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    { name: 'Kyiv', coordinates: { x: 260, y: 90, width: 50, height: 50 } },
    { name: 'Lviv', coordinates: { x: 40, y: 100, width: 50, height: 50 } },
    // Додайте інші регіони
  ];

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div>
      <h1>Карта України</h1>
      <div className="map-container">
        {regions.map((region) => (
          <Region
            key={region.name}
            name={region.name}
            coordinates={region.coordinates}
            onSelect={() => handleRegionSelect(region)}
          />
        ))}
      </div>
      {selectedRegion && <RegionSelector region={selectedRegion} />}
    </div>
  );
};

export default MapComponent;
