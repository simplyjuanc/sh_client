import React, { PropsWithChildren } from 'react';
import { SidePanel } from './SidePanel';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ display: 'flex', width: '100vw' }}>
      <SidePanel />
      <div style={{ width: '100%' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(Layout);
