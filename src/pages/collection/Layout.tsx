import React, { PropsWithChildren } from 'react';
import { SidePanel } from './side-panel';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ display: 'flex', width: '100vw' }}>
      <aside style={{ width: '20%' }}>
        <SidePanel />
      </aside>
      <div style={{ width: '80%' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(Layout);
