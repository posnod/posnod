import React from 'react';
import LinkFeature from '@/components/itemsPublicFeed/LinkFeature';
import NavbarFeed from '@/components/itemsPublicFeed/NavbarFeed';
import FooterFeed from '@/components/itemsPublicFeed/FooterFeed';

interface RootFeadProps {
  children: React.ReactNode;
}

const RootFead: React.FC<RootFeadProps> = ({ children }) => {
  return (
    <div>
      <LinkFeature />
      <NavbarFeed />
      {/* Content Fead */}
      <div>
        {children}
      </div>
      <FooterFeed />
    </div>
  );
};

export default RootFead;
