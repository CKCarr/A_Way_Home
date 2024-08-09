'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../app/MTailwind';
import { Pet } from '../types';
import MessageForm from './MessageForm';

interface PetModalProps {
  pet: Pet;
  onClose: () => void;
}

const PetModal: React.FC<PetModalProps> = ({ pet, onClose }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [showMessageForm, setShowMessageForm] = useState(false);

  const handleToggleMessageForm = () => {
    setShowMessageForm(!showMessageForm);
  };

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current && pet.address) {
        const { city, state, zip, country } = pet.address;
        const address = `${city}, ${state} ${zip}, ${country}`;

        const geocoder = new window.google.maps.Geocoder();
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 12,
          center: { lat: 0, lng: 0 },
        });

        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results[0]) {
            map.setCenter(results[0].geometry.location);
            new window.google.maps.Marker({
              map,
              position: results[0].geometry.location,
            });
          }
        });
      }
    };

    if (window.google && window.google.maps) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, [pet.address]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-3/4 max-w-2xl border-2 border-primary-blue p-5 max-h-[90vh] overflow-y-auto no-scrollbar">
        <div className="relative h-64 border-x-8 border-t-8 border-primary-blue rounded-md  justify-center items-center">
          <img
            src={pet.photos?.[0] || '/default-image.png'}
            alt={pet.name}
            className=" w-full h-full object-fit object-center"
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl p-3 font-bold mb-2 text-center bg-primary-blue text-white">
            {pet.name}
          </h2>
          <p>
            <strong>Type:</strong> {pet.type}
          </p>
          <p>
            <strong>Breed:</strong> {pet.breed}
          </p>
          <p>
            <strong>Gender:</strong> {pet.gender}
          </p>
          <p>
            <strong>Size:</strong> {pet.size}
          </p>
          <p>
            <strong>Date Posted:</strong> {pet.datePost}
          </p>
          <p>
            <strong>Location:</strong> {pet.address?.city}, {pet.address?.state}
            , {pet.address?.zip}, {pet.address?.country}
          </p>
          <p>
            <strong>Description:</strong> {pet.description}
          </p>
          <div className="flex space-x-4 mt-4">
            <Button
              onClick={handleToggleMessageForm}
              className="bg-primary-green text-white border-white border hover:border-2 hover:border-primary-blue hover:bg-bright-teal hover:text-primary-blue"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Contact Poster
            </Button>
            <Button
              onClick={onClose}
              className="bg-primary-blue hover:border hover:border-bright-teal hover:bg-primary-blue hover:text-bright-teal"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Close
            </Button>
          </div>
        </div>
        <div ref={mapRef} className="h-64 w-full"></div>
        {showMessageForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-3/4 max-w-2xl border-2 border-indigo-500 p-5">
              <MessageForm
                receiverId={pet.userLogin || ''}
                onClose={handleToggleMessageForm}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetModal;
