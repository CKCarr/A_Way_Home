// src/components/PetList.tsx

'use client';

import React, { useEffect, useState } from 'react';
import PetCard from './PetCard';
import { Pet } from '../types';
import { fetchPets } from '../app/api/pets';

const PetList: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const getPets = async () => {
      try {
        const petsData = await fetchPets();
        setPets(petsData);
      } catch (error) {
        console.error('Error fetching pets: ', error);
      }
    };

    getPets();
  }, []);

  const handleCardClick = (pet: Pet) => {
    console.log('Card clicked:', pet);
  };

  const handleMoreDetails = (pet: Pet) => {
    console.log('More details:', pet);
  };

  const handleContactPoster = (pet: Pet) => {
    console.log('Contact poster:', pet);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
          onClick={() => handleCardClick(pet)}
          onMoreDetails={() => handleMoreDetails(pet)}
          onContactPoster={() => handleContactPoster(pet)}
        />
      ))}
    </div>
  );
};

export default PetList;
