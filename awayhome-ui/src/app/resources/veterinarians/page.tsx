// pages/resources/veterinarians.tsx
import React from 'react';
import NearbyResources from '../../../components/NearbyResources';

const Veterinarians = () => {
  return (
    <div>
      <div className="p-4 mx-auto">
        <NearbyResources type="veterinary_care" />
      </div>
    </div>
  );
};

export default Veterinarians;
