import React from 'react';
import AboutUs from '../../components/About';
import TeamLinks from '../../components/TeamLinks';

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:space-x-2 space-y-4 md:space-y-0">
      <div className="flex-1">
        <TeamLinks />
      </div>
      <div className="flex-1">
        <AboutUs />
      </div>
    </div>
  );
};

export default ContactPage;
