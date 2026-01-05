import React from 'react';
import LinkFeature from '@/components/itemsPublicFeed/LinkFeature';
import NavbarFead from '@/components/itemsPublicFeed/NavbarFead';

interface RootFeadProps {
  children: React.ReactNode;
}

const RootFead: React.FC<RootFeadProps> = ({ children }) => {
  return (
    <div>
      <LinkFeature />
      <NavbarFead />
      {/* Content Fead */}
      <div>
        {children}
      </div>
    </div>
  );
};

export default RootFead;
