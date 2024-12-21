import React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import './toggle.style.css';

const Toggleable: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Toggle.Root className='Toggle' aria-label='Toggle italic'>
    {children}
  </Toggle.Root>
);

export default Toggleable;
