// pages/resources/shelters.tsx
import React from 'react';
import NearbyResources from '../../../components/NearbyResources';

const Shelters = () => {
  return (
    <div>
      <div className="p-4 mx-auto">
        <NearbyResources type="animal_shelter" />
      </div>
    </div>
  );
};

export default Shelters;
