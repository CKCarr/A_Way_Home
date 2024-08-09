// src/app/found-pets/page.jsx
'use client';

import React, { useState } from 'react';
import { Filters } from '../../types';
import FoundPets from '../../components/FoundPets';
import Sidebar from '../../components/Sidebar';

const FoundPetsPage: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    idOrName: '',
    status: 'found',
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
        <h1 className="text-4xl font-bold text-center mt-4">Found Pets</h1>
        <FoundPets filters={filters} />
      </div>
    </div>
  );
};

export default FoundPetsPage;
