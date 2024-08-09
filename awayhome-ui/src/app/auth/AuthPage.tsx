// src/app/auth/AuthPage.tsx
'use client';
import Login from './Login';
import Register from './Register';
import React, { useState } from 'react';

const AuthPage: React.FC<{ initialTab?: 'login' | 'register' }> = ({
  initialTab = 'login',
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(initialTab);

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      {activeTab === 'login' ? (
        <Login setActiveTab={setActiveTab} />
      ) : (
        <Register setActiveTab={setActiveTab} />
      )}
    </div>
  );
};

export default AuthPage;
