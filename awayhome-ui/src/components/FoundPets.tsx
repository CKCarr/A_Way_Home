'use client';

import React, { useState, useEffect } from 'react';
import PetCard from './PetCard';
import PetModal from './PetModal';
import { applyFilters } from '../utils/filters';
import { getCoordinates } from '../utils/location';
import { Pet, Filters } from '../types';
import { db } from '../config/firebaseClient';
import { collection, getDocs, query, where } from 'firebase/firestore';
import foundPetsData from '../pets-json/foundPetsData.json';

interface FoundPetsProps {
  filters: Filters;
}

const FoundPets: React.FC<FoundPetsProps> = ({ filters }) => {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);

  const handleCardClick = (pet: Pet) => {
    setSelectedPet(pet);
  };

  const closeModal = () => {
    setSelectedPet(null);
  };

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const q = query(collection(db, 'pets'), where('status', '==', 'found'));
        const querySnapshot = await getDocs(q);
        const petsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Pet[];

        const combinedPetsData = [
          ...petsData,
          ...(foundPetsData as unknown as Pet[]),
        ];

        let userCoordinates: { lat: number; lng: number } | null = null;
        if (filters.location) {
          userCoordinates = await getCoordinates(filters.location);
        }

        const filtered = applyFilters(
          combinedPetsData,
          filters,
          userCoordinates,
        );
        setFilteredPets(filtered);
      } catch (error) {
        console.error('Error fetching pets: ', error);
      }
    };

    fetchPets();
  }, [filters]);

  return (
    <section className="bg-white py-16 flex-grow">
      <div className="flex h-3/4">
        <div className="w-full p-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredPets.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                onMoreDetails={() => handleCardClick(pet)}
                onContactPoster={() => alert('Contact Poster')}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedPet && <PetModal pet={selectedPet} onClose={closeModal} />}
    </section>
  );
};

export default FoundPets;
