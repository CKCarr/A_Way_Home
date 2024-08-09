// src/app/lost-pets/page.jsx
'use client';

import React, { useState } from 'react';
import { Filters } from '../../types';
import Sidebar from '../../components/Sidebar';
import LostPets from '../../components/LostPets';

const LostPetsPage = () => {
  const [filters, setFilters] = useState<Filters>({
    idOrName: '',
    status: 'lost',
    type: '',
    gender: '',
    size: '',
    location: '',
    distance: 25,
    sort: 'datePost',
  });

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/5 lg:w-1/5 sm:w-1/3 md:mr-4 sm:mr-4">
        <div className="sticky top-0">
          <Sidebar filters={filters} setFilters={setFilters} />
        </div>
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        <h1 className="text-4xl font-bold text-center mt-4">Lost Pets</h1>
        <LostPets filters={filters} />
      </div>
    </div>
  );
};

export default LostPetsPage;
