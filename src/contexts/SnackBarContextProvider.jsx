import React, { createContext, useState } from 'react';

export const SnackBarContext = createContext();

const SnackBarContextProvider = (props) => {
  const { children } = props;
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openSnackBar = (message) => {
    setIsOpen(true);
    setMessage(message);
  };

  const closeSnackBar = () => {
    setIsOpen(false);
  };

  const provide = {
    message,
    isOpen,
    openSnackBar,
    closeSnackBar,
  };

  return (
    <SnackBarContext.Provider value={provide}>
      {children}
    </SnackBarContext.Provider>
  );
};

export default SnackBarContextProvider;
