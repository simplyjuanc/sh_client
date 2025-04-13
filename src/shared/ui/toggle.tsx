import React, { useState } from 'react';
import * as Toggle from '@radix-ui/react-toggle';
// import './toggle.style.css';

type ToggleableProps = {
  defaultPressed?: boolean;
  onPress: () => void;
  children: React.ReactNode;
};

const Toggleable: React.FC<ToggleableProps> = ({
  onPress,
  defaultPressed,
  children,
}) => {
  const [isPressed, setIsPressed] = useState(defaultPressed ?? false);
  const handlePressedChange = (pressed: boolean) => {
    setIsPressed(pressed);
    if (pressed) {
      onPress();
    }
  };

  return (
    <Toggle.Root
      className='Toggle'
      aria-label='Toggle italic'
      pressed={isPressed}
      onPressedChange={(pressed) => handlePressedChange(pressed)}
      defaultPressed={defaultPressed ?? false}
    >
      {children}
    </Toggle.Root>
  );
};

export default Toggleable;
