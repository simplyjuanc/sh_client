import React, { useState } from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import './toggle.style.css';

type ToggleableProps = {
  defaultPressed?: boolean;
  onPressedChange: () => void;
  children: React.ReactNode;
};

const Toggleable: React.FC<ToggleableProps> = ({
  onPressedChange,
  defaultPressed,
  children,
}) => {
  const [isPressed, setIsPressed] = useState(defaultPressed ?? false);
  const handlePressedChange = () => {
    onPressedChange();
    setIsPressed((prev) => !prev);
  };

  return (
    <Toggle.Root
      className='Toggle'
      aria-label='Toggle italic'
      pressed={isPressed}
      onPressedChange={handlePressedChange}
      defaultPressed={defaultPressed ?? false}
    >
      {children}
    </Toggle.Root>
  );
};

export default Toggleable;
