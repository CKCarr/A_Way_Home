// src/app/flyer/page.tsx
'use client';

import React, { useState } from 'react';
import FlyerForm from '../../components/FlyerForm';
import { Filters } from '../../types';

const FlyerFormPage: React.FC = () => {
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

  return <FlyerForm filters={filters} />;
};

export default FlyerFormPage;
